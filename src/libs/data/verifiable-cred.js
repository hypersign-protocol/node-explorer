export default class VerifiableCred {
  constructor() {
    this.id = ''
    this.currentStatus = ''
    this.issuer = ''
    this.issuanceDate = ''
    this.vcDocument = null
    this.vcDocToShow = {}
  }

  static create(element) {
    const self = new VerifiableCred()
    self.id = element.claim.id
    self.currentStatus = element.claim.currentStatus
    self.issuer = element.issuer
    self.issuanceDate = element.issuanceDate
    self.vcDocToShow.currentStatus = element.claim.currentStatus
    self.vcDocToShow.statusReason = element.claim.statusReason
    self.vcDocToShow.issuanceDate = element.issuanceDate
    self.vcDocToShow.expirationDate = element.expirationDate
    self.vcDocToShow.credentialHash = element.credentialHash
    self.vcDocToShow.issuer = element.issuer
    self.vcDocument = { ...element }
    return self
  }
}
