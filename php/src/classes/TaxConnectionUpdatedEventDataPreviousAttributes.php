<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxCountryCoveragePreviousAttributes>|null $coverage
 * @property-read string|null $created_at
 * @property-read TaxConnectionDisclosurePreviousAttributes|null $disclosure
 * @property-read AddressPreviousAttributes|null $legal_address
 * @property-read string|null $legal_business_name
 * @property-read TaxConnectionSellerAttestationPreviousAttributes|null $seller_attestation
 * @property-read string|null $status
 * @property-read string|null $status_reason
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $tax_connection_id
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class TaxConnectionUpdatedEventDataPreviousAttributes extends Model {
    /** @param array{'coverage'?: mixed, 'created_at'?: mixed, 'disclosure'?: mixed, 'legal_address'?: mixed, 'legal_business_name'?: mixed, 'seller_attestation'?: mixed, 'status'?: mixed, 'status_reason'?: mixed, 'supported_actions'?: mixed, 'tax_connection_id'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionUpdatedEventDataPreviousAttributes')); }
    /** Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. anyOf[1] (Value): Array of {@see TaxCountryCoveragePreviousAttributes}. Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. anyOf[1][] (Value): {@see TaxCountryCoveragePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<TaxCountryCoveragePreviousAttributes>|null
     */
    public function getCoverage(): array|null { return $this->get('coverage'); }
    public function hasCoverage(): bool { return $this->has('coverage'); }
    /** When the connection record was created. anyOf[1] (Value): string. When the connection record was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Current statements the seller must agree to before connecting. anyOf[1] (Value): {@see TaxConnectionDisclosurePreviousAttributes}. anyOf[2] (Value): null.
     * @return TaxConnectionDisclosurePreviousAttributes|null
     */
    public function getDisclosure(): TaxConnectionDisclosurePreviousAttributes|null { return $this->get('disclosure'); }
    public function hasDisclosure(): bool { return $this->has('disclosure'); }
    /** Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, uses an explicit legal_address supplied at connect, otherwise verified live details or the merchant profile, and retains the attested snapshot for retries and reconnects. `null` when no legal address is available. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getLegalAddress(): AddressPreviousAttributes|null { return $this->get('legal_address'); }
    public function hasLegalAddress(): bool { return $this->has('legal_address'); }
    /** Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, uses verified live details when available, otherwise the merchant profile, and retains the connected snapshot. Omitted when no name is available. anyOf[1] (Value): string. Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, uses verified live details when available, otherwise the merchant profile, and retains the connected snapshot. Omitted when no name is available. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLegalBusinessName(): string|null { return $this->get('legal_business_name'); }
    public function hasLegalBusinessName(): bool { return $this->has('legal_business_name'); }
    /** The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. anyOf[1] (Value): {@see TaxConnectionSellerAttestationPreviousAttributes}. anyOf[2] (Value): null.
     * @return TaxConnectionSellerAttestationPreviousAttributes|null
     */
    public function getSellerAttestation(): TaxConnectionSellerAttestationPreviousAttributes|null { return $this->get('seller_attestation'); }
    public function hasSellerAttestation(): bool { return $this->has('seller_attestation'); }
    /** Whether automatic tax is connected and can calculate tax. Value enum: "not_connected", "provisioning", "active", "attention_required", "disabled". anyOf[1] (Value): string. Whether automatic tax is connected and can calculate tax. Value enum: "not_connected", "provisioning", "active", "attention_required", "disabled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Value enum: "not_offered", "business_address_required", "onboarding_required", "tax_category_required", "registration_required", "temporarily_unavailable", "setup_incomplete", "registration_rejected", "business_details_changed", "support_required", "disconnected", "other", null. anyOf[1] (Value): string. Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Value enum: "not_offered", "business_address_required", "onboarding_required", "tax_category_required", "registration_required", "temporarily_unavailable", "setup_incomplete", "registration_rejected", "business_details_changed", "support_required", "disconnected", "other", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Lists connect when setup can complete, including by supplying legal_address in test mode and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. [] enum: "connect", "disconnect". anyOf[1] (Value): Array of string. Lists connect when setup can complete, including by supplying legal_address in test mode and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. [] enum: "connect", "disconnect". anyOf[1][] (Value): string.  Value enum: "connect", "disconnect". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Flint tax connection ID. Present once the first registration or connection creates a record. anyOf[1] (Value): string. Flint tax connection ID. Present once the first registration or connection creates a record. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTaxConnectionId(): string|null { return $this->get('tax_connection_id'); }
    public function hasTaxConnectionId(): bool { return $this->has('tax_connection_id'); }
    /** When the connection record's public state last changed. anyOf[1] (Value): string. When the connection record's public state last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current resource version. Send as expected_version to reject a write based on an older version. anyOf[1] (Value): integer. Current resource version. Send as expected_version to reject a write based on an older version. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
