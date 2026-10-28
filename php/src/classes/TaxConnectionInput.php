<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $business_address
 * @property-read string $business_name
 * @property-read string|\DateTimeInterface $created_at
 * @property-read TaxConnectionDisclosureInput|array<array-key, mixed>|\stdClass $disclosure
 * @property-read array{'attested_at': string|\DateTimeInterface, 'disclosure_version': string, ...}|object|null $seller_attestation
 * @property-read string $status
 * @property-read string|null $status_reason
 * @property-read list<string> $supported_actions
 * @property-read string $tax_connection_id
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionInput extends Model {
    /** @param array{'business_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'business_name'?: string, 'created_at'?: string|\DateTimeInterface, 'disclosure': TaxConnectionDisclosureInput|array<array-key, mixed>|\stdClass, 'seller_attestation': array{'attested_at': string|\DateTimeInterface, 'disclosure_version': string, ...}|object|null, 'status': string, 'status_reason': string|null, 'supported_actions': list<string>, 'tax_connection_id'?: string, 'updated_at'?: string|\DateTimeInterface, 'version'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionInput')); }
    /** Shape $ (Value): {@see AddressInput}. Verified business address that connect will use as the tax origin, or the address copied to the connected account. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When business_address is omitted; use hasBusinessAddress() or valueOrDefault().
     */
    public function getBusinessAddress(): mixed { return $this->get('business_address'); }
    public function hasBusinessAddress(): bool { return $this->has('business_address'); }
    /** Shape $ (Value): string. Verified legal business name that connect will use, or the name copied to the connected account.
     * @return string
     * @throws SdkError When business_name is omitted; use hasBusinessName() or valueOrDefault().
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** Shape $ (Value): string. When the connection record was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see TaxConnectionDisclosureInput}. Current statements the seller must agree to before connecting. Ordered seller disclosure rendered with the merchant's effective automatic tax fee.
     * @return TaxConnectionDisclosureInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When disclosure is omitted; use hasDisclosure() or valueOrDefault().
     */
    public function getDisclosure(): mixed { return $this->get('disclosure'); }
    public function hasDisclosure(): bool { return $this->has('disclosure'); }
    /** Shape $ (Value): {@see TaxConnectionSellerAttestationInput} or null. Recorded seller agreement, or null before a connect records one. Shape $.anyOf[1] (Value): {@see TaxConnectionSellerAttestationInput}. The disclosure the seller agreed to and when Flint recorded that agreement. Shape $.anyOf[2] (Value): null.
     * @return array{'attested_at': string|\DateTimeInterface, 'disclosure_version': string, ...}|object|null
     * @throws SdkError When seller_attestation is omitted; use hasSellerAttestation() or valueOrDefault().
     */
    public function getSellerAttestation(): mixed { return $this->get('seller_attestation'); }
    public function hasSellerAttestation(): bool { return $this->has('seller_attestation'); }
    /** Shape $ (Value): string. Whether automatic tax is connected and can calculate tax. Value enum: "not_connected", "provisioning", "active", "attention_required", "disabled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string or null. Machine-readable detail for not_connected or attention_required, or null when no reason applies. Unknown reasons normalize to other. Value enum: "not_offered", "onboarding_required", "tax_category_required", "registration_required", "temporarily_unavailable", "setup_incomplete", "registration_rejected", "business_details_changed", "support_required", "disconnected", "other", null.
     * @return string|null
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Shape $ (Value): Array of string. Lists connect when setup can complete and disconnect when automatic tax can be turned off, for credentials that can write settings; otherwise empty. Webhook snapshots describe the connection state independently of a receiving credential. [] enum: "connect", "disconnect". Shape $[] (Value): string.  Value enum: "connect", "disconnect".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): string. Flint tax connection ID. Present once the first registration or connection creates a record.
     * @return string
     * @throws SdkError When tax_connection_id is omitted; use hasTaxConnectionId() or valueOrDefault().
     */
    public function getTaxConnectionId(): string { return $this->get('tax_connection_id'); }
    public function hasTaxConnectionId(): bool { return $this->has('tax_connection_id'); }
    /** Shape $ (Value): string. When the connection record's public state last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Current resource version. Send as expected_version to reject a write based on an older version. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
