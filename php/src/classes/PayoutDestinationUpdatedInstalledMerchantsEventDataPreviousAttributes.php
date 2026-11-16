<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $available_payout_methods
 * @property-read string|null $bank_name
 * @property-read string|null $country
 * @property-read string|null $created_at
 * @property-read string|null $currency
 * @property-read string|null $disabled_at
 * @property-read string|null $disabled_reason
 * @property-read bool|null $is_default_for_currency
 * @property-read string|null $last4
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $payout_destination_id
 * @property-read string|null $status
 * @property-read string|null $status_updated_at
 * @property-read string|null $type
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class PayoutDestinationUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'available_payout_methods'?: mixed, 'bank_name'?: mixed, 'country'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'disabled_at'?: mixed, 'disabled_reason'?: mixed, 'is_default_for_currency'?: mixed, 'last4'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'payout_destination_id'?: mixed, 'status'?: mixed, 'status_updated_at'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Payout methods available through Flint for this destination. Only standard is currently available. [] enum: "standard". anyOf[1] (Value): Array of string. Payout methods available through Flint for this destination. Only standard is currently available. [] enum: "standard". anyOf[1][] (Value): string.  Value enum: "standard". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAvailablePayoutMethods(): array|null { return $this->get('available_payout_methods'); }
    public function hasAvailablePayoutMethods(): bool { return $this->has('available_payout_methods'); }
    /** Name of the bank, when your processor reports it. anyOf[1] (Value): string. Name of the bank, when your processor reports it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBankName(): string|null { return $this->get('bank_name'); }
    public function hasBankName(): bool { return $this->has('bank_name'); }
    /** ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCountry(): string|null { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** When the destination was added. anyOf[1] (Value): string. When the destination was added. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** When the destination was last disabled or archived. Absent if it never was. anyOf[1] (Value): string. When the destination was last disabled or archived. Absent if it never was. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisabledAt(): string|null { return $this->get('disabled_at'); }
    public function hasDisabledAt(): bool { return $this->has('disabled_at'); }
    /** Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Value enum: "destination_disabled", "destination_removed", "destination_unavailable", "destination_rejected", "destination_under_review", "requirements_past_due", "requirements_pending_verification". anyOf[1] (Value): string. Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Value enum: "destination_disabled", "destination_removed", "destination_unavailable", "destination_rejected", "destination_under_review", "requirements_past_due", "requirements_pending_verification". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisabledReason(): string|null { return $this->get('disabled_reason'); }
    public function hasDisabledReason(): bool { return $this->has('disabled_reason'); }
    /** Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. anyOf[1] (Value): boolean. Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsDefaultForCurrency(): bool|null { return $this->get('is_default_for_currency'); }
    public function hasIsDefaultForCurrency(): bool { return $this->has('is_default_for_currency'); }
    /** Last four digits of the account or card number. anyOf[1] (Value): string. Last four digits of the account or card number. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Merchant that owns the destination. anyOf[1] (Value): string. Merchant that owns the destination. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Stable identifier of the payout destination. anyOf[1] (Value): string. Stable identifier of the payout destination. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPayoutDestinationId(): string|null { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Current status. Archived: deleted, and still readable by ID. Value enum: "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[1] (Value): string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When Flint last recorded the destination's status. anyOf[1] (Value): string. When Flint last recorded the destination's status. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatusUpdatedAt(): string|null { return $this->get('status_updated_at'); }
    public function hasStatusUpdatedAt(): bool { return $this->has('status_updated_at'); }
    /** Destination type. Unmapped destination types are returned as other. Value enum: "bank_account", "debit_card", "other". anyOf[1] (Value): string. Destination type. Unmapped destination types are returned as other. Value enum: "bank_account", "debit_card", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** When the destination last changed. anyOf[1] (Value): string. When the destination last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
