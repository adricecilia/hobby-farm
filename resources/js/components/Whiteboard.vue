<template>
    <v-stage
        ref="stage"
        :config="stage"
        @click="handleMouseClick"
        @mousemove="handleMouseMove"
    >
        <v-layer ref="layer">
            <v-line :config="{
                points: points,
                fill: '#9b7653',
                stroke: '#5a5959',
                strokeWidth: 3,
                closed: closed,
              }"
            />
        </v-layer>
    </v-stage>
</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;

export default {
    data() {
        return {
            stage: {
                width: width,
                height: height,
            },
            isDrawing: false,
            closed: false,
            points: [],
            options: {
                snapToGrid: 20,
            }
        };
    },
    methods: {
        handleMouseClick(event) {
            this.isDrawing = true;
            const pos = this.$refs.stage.getNode().getPointerPosition();
            this.setPoints([
                ...this.points,
                pos.x,pos.y,
            ]);
            console.log(this.calculateAreaOfPolygon(this.points) + 'm²');
        },
        handleMouseUp() {
            this.isDrawing = false;
            this.closed = true;
        },
        setPoints(element) {
            this.points = element;
        },
        calculateAreaOfPolygon(points) {
            const pxConversion = 20;
            let area = 0;
            for (let i = 0; i < points.length; i += 2) {
                const x1 = points[i] / pxConversion;
                const y1 = points[i + 1] / pxConversion;
                const x2 = points[(i + 2) % points.length] / pxConversion;
                const y2 = points[(i + 3) % points.length] / pxConversion;
                area += x1 * y2 - x2 * y1;
            }
            return Math.abs(area / 2);
        },
        handleMouseMove(event) {
            if (!this.isDrawing) {
                return;
            }

            const pos = this.$refs.stage.getNode().getPointerPosition();
            if(this.points.length > 2){
                this.points = this.points.slice(0, this.points.length - 2);
            }

            this.setPoints([
                ...this.points,
                pos.x,pos.y,
            ]);
        },
        // TODO: Implement snapToGrid
        // snapToGrid(a) {
        //     let b = null;
        //     console.log(a, b);
        //     if (a.length)
        //         return b = [a[0] % this.options.snapToGrid, a[1] % this.options.snapToGrid],
        //             a[0] -= b[0] < this.options.snapToGrid / 2 ? b[0] : b[0] - this.options.snapToGrid,
        //             a[1] -= b[1] < this.options.snapToGrid / 2 ? b[1] : b[1] - this.options.snapToGrid,
        //             a;
        //     for (let c in a)
        //         b = a[c] % this.options.snapToGrid,
        //             a[c] -= (b < this.options.snapToGrid / 2 ? b : b - this.options.snapToGrid) + (0 > b ? this.options.snapToGrid : 0);
        //     return a
        // }
    },
    created() {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.handleMouseUp();
            }
        });
    }
};
</script>
