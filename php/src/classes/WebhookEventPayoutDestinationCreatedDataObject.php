<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $available_payout_methods
 * @property-read ?string $bank_name
 * @property-read ?string $country
 * @property-read string $created_at
 * @property-read string $currency
 * @property-read bool $default_for_currency
 * @property-read ?string $disabled_at
 * @property-read ?string $disabled_reason
 * @property-read ?string $last4
 * @property-read string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $payout_destination_id
 * @property-read string $status
 * @property-read ?string $status_updated_at
 * @property-read string $type
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutDestinationCreatedDataObject extends Model {
    /** @param array{'available_payout_methods': list<string>, 'bank_name'?: string, 'country'?: string, 'created_at': string, 'currency': string, 'default_for_currency': bool, 'disabled_at'?: string, 'disabled_reason'?: string, 'last4'?: string, 'merchant_id': string, 'metadata'?: \stdClass, 'payout_destination_id': string, 'status': string, 'status_updated_at'?: string, 'type': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutDestinationCreatedDataObject')); }
    /** Shape $ (Value): Array of string. Payout methods available through Flint for this destination. Only standard is currently available. [] enum: "standard". Shape $[] (Value): string.  Value enum: "standard".
     * @return list<string>
     */
    public function getAvailablePayoutMethods(): array { return $this->get('available_payout_methods'); }
    public function hasAvailablePayoutMethods(): bool { return $this->has('available_payout_methods'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBankName(): ?string { return $this->get('bank_name'); }
    public function hasBankName(): bool { return $this->has('bank_name'); }
    /** Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * @return ?string
     */
    public function getCountry(): ?string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getDefaultForCurrency(): bool { return $this->get('default_for_currency'); }
    public function hasDefaultForCurrency(): bool { return $this->has('default_for_currency'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getDisabledAt(): ?string { return $this->get('disabled_at'); }
    public function hasDisabledAt(): bool { return $this->has('disabled_at'); }
    /** Shape $ (Value): string. Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Value enum: "destination_disabled", "destination_removed", "destination_unavailable", "destination_rejected", "destination_under_review", "disabled_by_merchant_request", "requirements_past_due", "requirements_pending_verification", "superseded_destination_session_completed".
     * @return ?string
     */
    public function getDisabledReason(): ?string { return $this->get('disabled_reason'); }
    public function hasDisabledReason(): bool { return $this->has('disabled_reason'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getLast4(): ?string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Shape $ (Value): string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getStatusUpdatedAt(): ?string { return $this->get('status_updated_at'); }
    public function hasStatusUpdatedAt(): bool { return $this->has('status_updated_at'); }
    /** Shape $ (Value): string. Destination type. Unmapped destination types are returned as other. Value enum: "bank_account", "debit_card", "other".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
