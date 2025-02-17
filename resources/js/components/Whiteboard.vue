<template>
    <div id="whiteboard">
        <canvas
            id="canvas"
            @mousedown="handleMouseClick"
        />
    </div>
</template>

<script>
import { draw } from '@/components/actions/draw';
export default {
    data() {
        return {
            roughCanvas: null,
            isDrawing: false,
            points: [],
            polygons: [],
            tool: 'line'
        }
    },
    methods: {
        // Global functions
        calculateCanvasSize() {
            let width = window.innerWidth;
            let height = window.innerHeight;
            let pixelRatio = window.devicePixelRatio;
            let canvas = document.getElementById('canvas');

            canvas.setAttribute('width', width * pixelRatio);
            canvas.setAttribute('height', height * pixelRatio);
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
        },
        calculateIfNewPointIsNearFirstPoint() {
            if (this.points.length < 2) {
                return false;
            }
            let firstPoint = this.points[0];
            let lastPoint = this.points[this.points.length - 1];

            let powX = Math.pow(firstPoint[0] - lastPoint[0], 2);
            let powY = Math.pow(firstPoint[1] - lastPoint[1], 2);

            let distance = Math.sqrt(powX + powY);
            return distance < 10;
        },
        calculateAreaOfPolygon(points) {
            let area = 0;
            for (let i = 0; i < points.length; i++) {
                let xyA = points[i];
                let xyB = points[(i + 1) % points.length];
                area += (xyA[0] * xyB[1]) - (xyA[1] * xyB[0]);
            }
            return Math.abs(area / 2);
        },
        // Event handlers
        handleMouseClick(event) {
            this.isDrawing = true;
            let pos = this.getPosition(event);
            this.setPoints([
                ...this.points,
                [pos.x,pos.y]
            ]);
        },
        handleMouseUp() {
            this.isDrawing = false;
            this.polygons = draw(this.tool, this.points, this.polygons);
            this.points = [];
        },
        handleMouseMove(event) {
            if (!this.isDrawing) {
                return;
            }

            const pos = this.getPosition(event);
            if(this.points.length > 2){
                this.points = this.points.slice(0, this.points.length - 2);
            }

            this.setPoints([
                ...this.points,
                [pos.x,pos.y],
            ]);
        },
        // Setters
        setPoints(element) {
            this.points = element;
            draw(this.tool, this.points);
            if(this.calculateIfNewPointIsNearFirstPoint()){
                this.handleMouseUp();
            }
        },
        // Getters
        getPosition(event) {
            return {
                x: event.screenX,
                y: event.screenY
            };
        }
    },
    mounted() {
        this.calculateCanvasSize();
    }
};
</script>

<style scoped>

#canvas {
    position: absolute;
    z-index: 1;
}

</style>
