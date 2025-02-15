export class Polygon extends Element {
    constructor(element) {
        super(element);
    }

    static draw(canvas, points, polygons = []) {
        polygons.push(points);
        canvas.polygon(points, {
            fill: 'rgba(0,0,0,0.2)',
            stroke: 'black',
            strokeWidth: 2
        });
        return polygons;
    }
}
