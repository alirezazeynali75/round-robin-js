"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selector = void 0;
class Selector {
    constructor(array) {
        this.array = array;
        this.length = array.length;
        this._currentIndex = 0;
    }
    set currentIndex(index) {
        this._currentIndex = index;
    }
    get currentIndex() {
        return this._currentIndex;
    }
    next() {
        if (this._currentIndex >= this.length)
            this._currentIndex = 0;
        return this.array[this._currentIndex++];
    }
}
exports.Selector = Selector;
