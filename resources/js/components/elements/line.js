export class Line extends Element {
    constructor(element) {
        super(element);
    }

    static draw(canvas, points) {
        for (let i = 0; i < points.length - 1; i++) {
            let xyA = points[i];
            let xyB = points[i + 1];
            canvas.line(xyA[0], xyA[1], xyB[0], xyB[1]);
        }
    }
}
