export default class Schema {
  constructor() {
    this.id = ''
    this.name = ''
    this.modelVersion = ''
    this.description = ''
    this.type = ''
    this.authored = ''
    this.author = ''
    this.schema = null
    this.proof = null
  }

  static create(element) {
    const self = new Schema()
    self.id = element.id
    self.name = element.name
    self.modelVersion = element.modelVersion
    self.description = element.schema.description
    self.type = element.type
    self.author = element.author
    self.authored = element.authored
    self.schema = element.schema
    self.proof = element.proof
    return self
  }
}
