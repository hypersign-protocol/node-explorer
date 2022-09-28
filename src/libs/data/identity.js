export default class Identity {
  constructor() {
    this.did_id = ''
    this.versionId = ''
    this.createdAt = ''
    this.updatedAt = ''
    this.deactivated = false
    this.didDocument = null
    this.didDocumentMetadata = null
  }

  static create(element) {
    const self = new Identity()
    self.did_id = element.didDocument.id
    self.versionId = element.didDocumentMetadata.versionId
    self.createdAt = element.didDocumentMetadata.created
    self.updatedAt = element.didDocumentMetadata.updated
    self.deactivated = element.didDocumentMetadata.deactivated
    self.didDocument = element.didDocument
    self.didDocumentMetadata = element.didDocumentMetadata
    return self
  }
}
