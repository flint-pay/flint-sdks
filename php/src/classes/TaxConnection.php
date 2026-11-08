<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxCountryCoverage> $coverage
 * @property-read ?string $created_at
 * @property-read TaxConnectionDisclosure $disclosure
 * @property-read Address|null $legal_address
 * @property-read ?string $legal_business_name
 * @property-read TaxConnectionSellerAttestation|null $seller_attestation
 * @property-read string $status
 * @property-read string|null $status_reason
 * @property-read list<string> $supported_actions
 * @property-read ?string $tax_connection_id
 * @property-read ?string $updated_at
 * @property-read ?int $version
 * Presence-aware response; omitted optional fields return null. */
final class TaxConnection extends Model {
    /** @param array{'coverage': list<mixed>, 'created_at'?: string, 'disclosure': mixed, 'legal_address': mixed, 'legal_business_name'?: string, 'seller_attestation': mixed, 'status': string, 'status_reason': string|null, 'supported_actions': list<string>, 'tax_connection_id'?: string, 'updated_at'?: string, 'version'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnection')); }
    /** Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. [] (Value): {@see TaxCountryCoverage}. A country and the categories automatic tax can calculate there.
     * @return list<TaxCountryCoverage>
     */
    public function getCoverage(): array { return $this->get('coverage'); }
    public function hasCoverage(): bool { return $this->has('coverage'); }
    /** When the connection record was created. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Current statements the seller must agree to before connecting. Ordered seller disclosure rendered with the merchant's effective automatic tax fee.
     * @return TaxConnectionDisclosure
     */
    public function getDisclosure(): TaxConnectionDisclosure { return $this->get('disclosure'); }
    public function hasDisclosure(): bool { return $this->has('disclosure'); }
    /** Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete. anyOf[1] (Value): {@see Address}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     * @return Address|null
     */
    public function getLegalAddress(): Address|null { return $this->get('legal_address'); }
    public function hasLegalAddress(): bool { return $this->has('legal_address'); }
    /** Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available.
     * @return ?string
     */
    public function getLegalBusinessName(): ?string { return $this->get('legal_business_name'); }
    public function hasLegalBusinessName(): bool { return $this->has('legal_business_name'); }
    /** The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. anyOf[1] (Value): {@see TaxConnectionSellerAttestation}. The disclosure the seller agreed to and when Flint recorded that agreement. anyOf[2] (Value): null.
     * @return TaxConnectionSellerAttestation|null
     */
    public function getSellerAttestation(): TaxConnectionSellerAttestation|null { return $this->get('seller_attestation'); }
    public function hasSellerAttestation(): bool { return $this->has('seller_attestation'); }
    /** Whether automatic tax is connected and can calculate tax. Value enum: "not_connected", "provisioning", "active", "attention_required", "disabled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Value enum: "not_offered", "onboarding_required", "tax_category_required", "registration_required", "temporarily_unavailable", "setup_incomplete", "registration_rejected", "business_details_changed", "support_required", "disconnected", "other", null.
     * @return string|null
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. [] enum: "connect", "disconnect". [] (Value): string.  Value enum: "connect", "disconnect".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Flint tax connection ID. Present once the first registration or connection creates a record.
     * @return ?string
     */
    public function getTaxConnectionId(): ?string { return $this->get('tax_connection_id'); }
    public function hasTaxConnectionId(): bool { return $this->has('tax_connection_id'); }
    /** When the connection record's public state last changed. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current resource version. Send as expected_version to reject a write based on an older version. Format: uint64. minimum: 1.
     * @return ?int
     */
    public function getVersion(): ?int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
