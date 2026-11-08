<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxCountryCoverageInput|array<array-key, mixed>|\stdClass> $coverage
 * @property-read string|\DateTimeInterface $created_at
 * @property-read TaxConnectionDisclosureInput|array<array-key, mixed>|\stdClass $disclosure
 * @property-read array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null $legal_address
 * @property-read string $legal_business_name
 * @property-read array{'attested_at': string|\DateTimeInterface, 'disclosure_version': string, ...}|object|null $seller_attestation
 * @property-read string $status
 * @property-read string|null $status_reason
 * @property-read list<string> $supported_actions
 * @property-read string $tax_connection_id
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionInput extends Model {
    /** @param array{'coverage': list<TaxCountryCoverageInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'disclosure': TaxConnectionDisclosureInput|array<array-key, mixed>|\stdClass, 'legal_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'legal_business_name'?: string, 'seller_attestation': array{'attested_at': string|\DateTimeInterface, 'disclosure_version': string, ...}|object|null, 'status': string, 'status_reason': string|null, 'supported_actions': list<string>, 'tax_connection_id'?: string, 'updated_at'?: string|\DateTimeInterface, 'version'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionInput')); }
    /** Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. [] (Value): {@see TaxCountryCoverageInput}. A country and the categories automatic tax can calculate there.
     * @return list<TaxCountryCoverageInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When coverage is omitted; use hasCoverage() or valueOrDefault().
     */
    public function getCoverage(): array { return $this->get('coverage'); }
    public function hasCoverage(): bool { return $this->has('coverage'); }
    /** When the connection record was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Current statements the seller must agree to before connecting. Ordered seller disclosure rendered with the merchant's effective automatic tax fee.
     * @return TaxConnectionDisclosureInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When disclosure is omitted; use hasDisclosure() or valueOrDefault().
     */
    public function getDisclosure(): mixed { return $this->get('disclosure'); }
    public function hasDisclosure(): bool { return $this->has('disclosure'); }
    /** Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete. anyOf[1] (Value): {@see AddressInput}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     * @return array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null
     * @throws SdkError When legal_address is omitted; use hasLegalAddress() or valueOrDefault().
     */
    public function getLegalAddress(): mixed { return $this->get('legal_address'); }
    public function hasLegalAddress(): bool { return $this->has('legal_address'); }
    /** Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available.
     * @return string
     * @throws SdkError When legal_business_name is omitted; use hasLegalBusinessName() or valueOrDefault().
     */
    public function getLegalBusinessName(): string { return $this->get('legal_business_name'); }
    public function hasLegalBusinessName(): bool { return $this->has('legal_business_name'); }
    /** The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. anyOf[1] (Value): {@see TaxConnectionSellerAttestationInput}. The disclosure the seller agreed to and when Flint recorded that agreement. anyOf[2] (Value): null.
     * @return array{'attested_at': string|\DateTimeInterface, 'disclosure_version': string, ...}|object|null
     * @throws SdkError When seller_attestation is omitted; use hasSellerAttestation() or valueOrDefault().
     */
    public function getSellerAttestation(): mixed { return $this->get('seller_attestation'); }
    public function hasSellerAttestation(): bool { return $this->has('seller_attestation'); }
    /** Whether automatic tax is connected and can calculate tax. Value enum: "not_connected", "provisioning", "active", "attention_required", "disabled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Value enum: "not_offered", "onboarding_required", "tax_category_required", "registration_required", "temporarily_unavailable", "setup_incomplete", "registration_rejected", "business_details_changed", "support_required", "disconnected", "other", null.
     * @return string|null
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. [] enum: "connect", "disconnect". [] (Value): string.  Value enum: "connect", "disconnect".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Flint tax connection ID. Present once the first registration or connection creates a record. Example: "tcn_01KEZF7C007Y42FMVNHV3P27QN".
     * @return string
     * @throws SdkError When tax_connection_id is omitted; use hasTaxConnectionId() or valueOrDefault().
     */
    public function getTaxConnectionId(): string { return $this->get('tax_connection_id'); }
    public function hasTaxConnectionId(): bool { return $this->has('tax_connection_id'); }
    /** When the connection record's public state last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current resource version. Send as expected_version to reject a write based on an older version. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
