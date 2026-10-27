<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read list<string> $type
 * @property-read list<string> $status
 * @property-read list<string> $available_payout_methods
 * @property-read bool $default_for_currency
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutSettingsListPayoutDestinationsInput extends Model {
    /** @param array{'currency'?: string, 'type'?: list<string>, 'status'?: list<string>, 'available_payout_methods'?: list<string>, 'default_for_currency'?: bool, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsListPayoutDestinationsInput')); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "bank_account", "debit_card". Shape $[] (Value): string.  Value enum: "bank_account", "debit_card".
     * @return list<string>
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): array { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "active", "verification_required", "disabled", "archived", "failed". Shape $[] (Value): string.  Value enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "standard". Shape $[] (Value): string.  Value enum: "standard".
     * @return list<string>
     * @throws SdkError When available_payout_methods is omitted; use hasAvailablePayoutMethods() or valueOrDefault().
     */
    public function getAvailablePayoutMethods(): array { return $this->get('available_payout_methods'); }
    public function hasAvailablePayoutMethods(): bool { return $this->has('available_payout_methods'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When default_for_currency is omitted; use hasDefaultForCurrency() or valueOrDefault().
     */
    public function getDefaultForCurrency(): bool { return $this->get('default_for_currency'); }
    public function hasDefaultForCurrency(): bool { return $this->has('default_for_currency'); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
}
