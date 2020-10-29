export class Selector <T =any> {
    protected array: T[]
    private readonly length: number
    protected _currentIndex: number

    constructor (array: T[]) {
      this.array = array
      this.length = array.length
      this._currentIndex = 0
    }

    public set currentIndex (index: number) {
      this._currentIndex = index
    }

    public get currentIndex (): number {
      return this._currentIndex
    }

    public next () {
      if (this._currentIndex >= this.length) this._currentIndex = 0
      return this.array[this._currentIndex++]
    }
}
