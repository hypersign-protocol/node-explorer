export default class Schema {
  constructor() {
    this.id = ''
    this.name = ''
    this.modelVersion = ''
    this.description = ''
    this.author = ''
    this.schemaDoc = {}
    this.originalSchmea = null
    this.proof = null
  }

  static create(element) {
    const self = new Schema()
    self.id = element.id
    self.name = element.name
    self.modelVersion = element.modelVersion
    self.description = element.schema.description
    self.author = element.author
    self.schemaDoc.name = element.name
    self.schemaDoc.description = element.schema.description
    self.schemaDoc.type = element.type
    self.schemaDoc.authoredAt = element.authored
    self.schemaDoc.author = element.author
    self.schemaDoc.modelVersion = element.modelVersion
    self.schemaDoc.properties = JSON.parse(element.schema.properties)
    self.schemaDoc.additionalProperties = element.schema.additionalProperties
    self.schemaDoc.required = element.schema.required
    self.originalSchmea = { ...element }
    self.proof = element.proof
    return self
  }
}
