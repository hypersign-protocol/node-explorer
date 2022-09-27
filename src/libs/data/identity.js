import IdentityInner from './identity-inner'

export default class Identity {
  constructor() {
    this.did_id = ''
    this.versionId = ''
    this.createdAt = ''
    this.updatedAt = ''
    this.deactivated = false
    this.identity_inner = new IdentityInner()
  }

  static create(element) {
    const self = new Identity()
    self.did_id = element.didDocument.id
    self.versionId = element.didDocumentMetadata.versionId
    self.createdAt = element.didDocumentMetadata.created
    self.updatedAt = element.didDocumentMetadata.updated
    self.deactivated = element.didDocumentMetadata.deactivated
    self.identity_inner = IdentityInner.create(element.didDocument)
    return self
  }
}
