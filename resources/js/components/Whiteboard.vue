<template>
    <div id="whiteboard">
        <canvas
            id="canvas"
            @mousedown="handleMouseClick"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            roughCanvas: null,
            isDrawing: false,
            points: [],
            polygons: []
        }
    },
    methods: {
        // Global functions
        calculateCanvasSize() {
            let width = window.innerWidth;
            let height = window.innerHeight;

            let canvas = document.getElementById('canvas');
            canvas.setAttribute('width', width * 2);
            canvas.setAttribute('height', height * 2);
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
        draw(type) {
            this.roughCanvas = this.getCanvas();
            if (this.points.length < 2) {
                return;
            }
            switch (type) {
                case 'line':
                    this.drawLine();
                    break;
                case 'polygon':
                    this.drawPolygon();
                    break;
            }
        },
        drawLine() {
            for (let i = 0; i < this.points.length - 1; i++) {
                let xyA = this.points[i];
                let xyB = this.points[i + 1];
                this.roughCanvas.line(xyA[0], xyA[1], xyB[0], xyB[1]);
            }
        },
        drawPolygon() {
            this.polygons.push(this.points);
            this.roughCanvas.polygon(this.points, {
                fill: 'rgba(0,0,0,0.2)',
                stroke: 'black',
                strokeWidth: 2
            });
            this.points = [];
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
            this.draw('polygon');
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
            this.draw('line');
            if(this.calculateIfNewPointIsNearFirstPoint()){
                this.handleMouseUp();
                console.log('Polygon closed');
                console.log('Area: ', this.calculateAreaOfPolygon(this.points));
            }
        },
        // Getters
        getPosition(event) {
            return {
                x: event.screenX,
                y: event.screenY
            };
        },
        getCanvas() {
            return rough.canvas(document.getElementById('canvas'))
        }
    },
    mounted() {
        this.calculateCanvasSize();
    }
};
</script>
