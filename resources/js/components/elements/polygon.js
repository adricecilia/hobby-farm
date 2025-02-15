export function drawPolygon(canvas, points, polygons = []) {
    polygons.push(points);
    canvas.polygon(points, {
        fill: 'rgba(0,0,0,0.2)',
        stroke: 'black',
        strokeWidth: 2
    });
    return polygons;
}
