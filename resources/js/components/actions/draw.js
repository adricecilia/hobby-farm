import { Line } from '@/components/elements/line';
import { Polygon } from '@/components/elements/polygon';

export function draw(type, points, polygons = []) {
    if (points.length < 2) {
        return;
    }
    switch (type) {
        case 'line':
            Line.draw(getCanvas(), points);
            break;
        case 'polygon':
            Polygon.draw(getCanvas(), points, polygons);
            break;
    }
}

function getCanvas() {
    return rough.canvas(document.getElementById('canvas'))
}
