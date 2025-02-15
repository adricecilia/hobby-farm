import { drawLine } from '@/components/elements/line';
import { drawPolygon } from '@/components/elements/polygon';

export function draw(type, points, polygons = []) {
    if (points.length < 2) {
        return;
    }
    switch (type) {
        case 'line':
            drawLine(getCanvas(), points);
            break;
        case 'polygon':
            drawPolygon(getCanvas(), points, polygons);
            break;
    }
}

function getCanvas() {
    return rough.canvas(document.getElementById('canvas'))
}
