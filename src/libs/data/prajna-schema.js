export default class PrajnaSchema {
  constructor() {
    this.id = ''
    this.name = ''
    this.modelVersion = ''
    this.description = ''
    this.author = ''
    this.schemaDoc = {}
    this.originalSchema = null
    this.proof = null
  }

  static create(element) {
    const self = new PrajnaSchema()
    self.originalSchema = { ...element }
    self.id = element.credentialSchemaDocument.id
    self.name = element.credentialSchemaDocument.name
    self.modelVersion = element.credentialSchemaDocument.modelVersion
    self.description = element.credentialSchemaDocument.schema.description
    self.author = element.credentialSchemaDocument.author
    self.schemaDoc.name = element.credentialSchemaDocument.name
    self.schemaDoc.context = element.credentialSchemaDocument.context
    self.schemaDoc.description = element.credentialSchemaDocument.schema.description
    self.schemaDoc.type = element.credentialSchemaDocument.type
    self.schemaDoc.authoredAt = element.credentialSchemaDocument.authored
    self.schemaDoc.author = element.credentialSchemaDocument.author
    self.schemaDoc.modelVersion = element.credentialSchemaDocument.modelVersion
    self.schemaDoc.properties = JSON.parse(element.credentialSchemaDocument.schema.properties)
    self.schemaDoc.additionalProperties = element.credentialSchemaDocument.schema.additionalProperties
    self.schemaDoc.required = element.credentialSchemaDocument.schema.required
    self.proof = element.credentialSchemaProof
    return self
  }
}
