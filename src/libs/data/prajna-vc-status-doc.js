export default class PrajnaVcStatusDoc {
  constructor() {
    this.id = ''
    this.context = []
    this.currentStatus = ''
    this.issuer = ''
    this.issuanceDate = ''
    this.credStatusProof = null
    this.originalVc = null
    this.vcDocToShow = {}
  }

  static create(element) {
    const self = new PrajnaVcStatusDoc()
    self.id = element.credentialStatusDocument.id
    if (!element.credentialStatusDocument.revoked && !element.credentialStatusDocument.suspended) {
      self.currentStatus = 'Live'
    } else if (element.credentialStatusDocument.revoked && !element.credentialStatusDocument.suspended) {
      self.currentStatus = 'Revoked'
    } else if (!element.credentialStatusDocument.revoked && element.credentialStatusDocument.suspended) {
      self.currentStatus = 'Suspended'
    } else {
      self.currentStatus = 'Revoked'
    }
    self.issuer = element.credentialStatusDocument.issuer
    self.issuanceDate = element.credentialStatusDocument.issuanceDate
    self.vcDocToShow.currentStatus = self.currentStatus
    self.vcDocToShow.context = element.credentialStatusDocument.context
    self.vcDocToShow.revoked = element.credentialStatusDocument.revoked
    self.vcDocToShow.suspended = element.credentialStatusDocument.suspended
    self.vcDocToShow.remarks = element.credentialStatusDocument.remarks
    self.vcDocToShow.issuanceDate = element.credentialStatusDocument.issuanceDate
    self.vcDocToShow.credentialMerkleRootHash = element.credentialStatusDocument.credentialMerkleRootHash
    self.vcDocToShow.issuer = element.credentialStatusDocument.issuer
    self.credStatusProof = element.credentialStatusProof
    self.originalVc = { ...element }
    return self
  }
}
