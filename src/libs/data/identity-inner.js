export default class IdentityInner {
  constructor() {
    this.didDocument = {}
  }

  static create(element) {
    const self = new IdentityInner()
    self.didDocument = { ...element }
    return self
  }
}
