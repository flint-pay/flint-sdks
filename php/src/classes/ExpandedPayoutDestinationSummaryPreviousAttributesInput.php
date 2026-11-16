<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $available_payout_methods
 * @property-read string|null $bank_name
 * @property-read string|null $country
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $currency
 * @property-read bool|null $is_default_for_currency
 * @property-read string|null $last4
 * @property-read string|null $payout_destination_id
 * @property-read string|null $status
 * @property-read string|null $type
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedPayoutDestinationSummaryPreviousAttributesInput extends Model {
    /** @param array{'available_payout_methods'?: list<string>|null, 'bank_name'?: string|null, 'country'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'currency'?: string|null, 'is_default_for_currency'?: bool|null, 'last4'?: string|null, 'payout_destination_id'?: string|null, 'status'?: string|null, 'type'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPayoutDestinationSummaryPreviousAttributesInput')); }
    /** Payout methods available through Flint for this destination. Only standard is currently available. [] enum: "standard". anyOf[1] (Value): Array of string. Payout methods available through Flint for this destination. Only standard is currently available. [] enum: "standard". anyOf[1][] (Value): string.  Value enum: "standard". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When available_payout_methods is omitted; use hasAvailablePayoutMethods() or valueOrDefault().
     */
    public function getAvailablePayoutMethods(): mixed { return $this->get('available_payout_methods'); }
    public function hasAvailablePayoutMethods(): bool { return $this->has('available_payout_methods'); }
    /** Name of the bank, when your processor reports it. anyOf[1] (Value): string. Name of the bank, when your processor reports it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bank_name is omitted; use hasBankName() or valueOrDefault().
     */
    public function getBankName(): mixed { return $this->get('bank_name'); }
    public function hasBankName(): bool { return $this->has('bank_name'); }
    /** ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): mixed { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. anyOf[1] (Value): boolean. Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_default_for_currency is omitted; use hasIsDefaultForCurrency() or valueOrDefault().
     */
    public function getIsDefaultForCurrency(): mixed { return $this->get('is_default_for_currency'); }
    public function hasIsDefaultForCurrency(): bool { return $this->has('is_default_for_currency'); }
    /** Last four digits of the account or card number. anyOf[1] (Value): string. Last four digits of the account or card number. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): mixed { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Unique identifier for this payout destination, prefixed `pdest_`. anyOf[1] (Value): string. Unique identifier for this payout destination, prefixed `pdest_`. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): mixed { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Current status. Archived: deleted, and still readable by ID. Value enum: "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[1] (Value): string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Destination type. Unmapped destination types are returned as other. Value enum: "bank_account", "debit_card", "other". anyOf[1] (Value): string. Destination type. Unmapped destination types are returned as other. Value enum: "bank_account", "debit_card", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
