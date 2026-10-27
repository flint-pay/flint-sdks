<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $available_payout_methods
 * @property-read string $bank_name
 * @property-read string $country
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $currency
 * @property-read bool $default_for_currency
 * @property-read string|\DateTimeInterface $disabled_at
 * @property-read string $disabled_reason
 * @property-read string $last4
 * @property-read string $merchant_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $payout_destination_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $status_updated_at
 * @property-read string $type
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutDestinationInput extends Model {
    /** @param array{'available_payout_methods': list<string>, 'bank_name'?: string, 'country'?: string, 'created_at': string|\DateTimeInterface, 'currency': string, 'default_for_currency': bool, 'disabled_at'?: string|\DateTimeInterface, 'disabled_reason'?: string, 'last4'?: string, 'merchant_id': string, 'metadata'?: array<array-key, string>|\stdClass, 'payout_destination_id': string, 'status': string, 'status_updated_at'?: string|\DateTimeInterface, 'type': string, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationInput')); }
    /** Shape $ (Value): Array of string. Payout methods available through Flint for this destination. Only standard is currently available. [] enum: "standard". Shape $[] (Value): string.  Value enum: "standard".
     * @return list<string>
     * @throws SdkError When available_payout_methods is omitted; use hasAvailablePayoutMethods() or valueOrDefault().
     */
    public function getAvailablePayoutMethods(): array { return $this->get('available_payout_methods'); }
    public function hasAvailablePayoutMethods(): bool { return $this->has('available_payout_methods'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When bank_name is omitted; use hasBankName() or valueOrDefault().
     */
    public function getBankName(): string { return $this->get('bank_name'); }
    public function hasBankName(): bool { return $this->has('bank_name'); }
    /** Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When default_for_currency is omitted; use hasDefaultForCurrency() or valueOrDefault().
     */
    public function getDefaultForCurrency(): bool { return $this->get('default_for_currency'); }
    public function hasDefaultForCurrency(): bool { return $this->has('default_for_currency'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When disabled_at is omitted; use hasDisabledAt() or valueOrDefault().
     */
    public function getDisabledAt(): string|\DateTimeInterface { return $this->get('disabled_at'); }
    public function hasDisabledAt(): bool { return $this->has('disabled_at'); }
    /** Shape $ (Value): string. Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Value enum: "destination_disabled", "destination_removed", "destination_unavailable", "destination_rejected", "destination_under_review", "disabled_by_merchant_request", "requirements_past_due", "requirements_pending_verification", "superseded_destination_session_completed".
     * @return string
     * @throws SdkError When disabled_reason is omitted; use hasDisabledReason() or valueOrDefault().
     */
    public function getDisabledReason(): string { return $this->get('disabled_reason'); }
    public function hasDisabledReason(): bool { return $this->has('disabled_reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Shape $ (Value): string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When status_updated_at is omitted; use hasStatusUpdatedAt() or valueOrDefault().
     */
    public function getStatusUpdatedAt(): string|\DateTimeInterface { return $this->get('status_updated_at'); }
    public function hasStatusUpdatedAt(): bool { return $this->has('status_updated_at'); }
    /** Shape $ (Value): string. Destination type. Unmapped destination types are returned as other. Value enum: "bank_account", "debit_card", "other".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
