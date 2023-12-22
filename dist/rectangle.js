import { Shape } from "./shape.js";
export class Rectangle extends Shape {
    constructor(theX, theY, _width, _length) {
        super(theX, theY);
        this._width = _width;
        this._length = _length;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    getInfo() {
        return super.getInfo() + `, width=${this._width} length=${this._length}`;
    }
    calculateArea() {
        return this._length * this._width;
    }
}
