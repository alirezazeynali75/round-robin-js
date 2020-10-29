export declare class Selector<T = any> {
    protected array: T[];
    private readonly length;
    protected _currentIndex: number;
    constructor(array: T[]);
    set currentIndex(index: number);
    get currentIndex(): number;
    next(): T;
}
