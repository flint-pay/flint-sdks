<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $currency
 * @property-read list<string>|string $type
 * @property-read list<string>|string $status
 * @property-read list<string>|string $available_payout_methods
 * @property-read bool $default_for_currency
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutDestinationsListInput extends Model {
    /** @param array{'currency'?: string, 'type'?: list<string>|string, 'status'?: list<string>|string, 'available_payout_methods'?: list<string>|string, 'default_for_currency'?: bool, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationsListInput')); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Optional payout destination type filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "bank_account", "debit_card". Value enum: "bank_account", "debit_card". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "bank_account", "debit_card". anyOf[1][] (Value): string.  Value enum: "bank_account", "debit_card". anyOf[2] (Value): string.  Value enum: "bank_account", "debit_card".
     * @return list<string>|string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "pending", "active", "verification_required", "disabled", "archived", "failed". Value enum: "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[1][] (Value): string.  Value enum: "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[2] (Value): string.  Value enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Optional available payout method filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "standard". Value enum: "standard". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "standard". anyOf[1][] (Value): string.  Value enum: "standard". anyOf[2] (Value): string.  Value enum: "standard".
     * @return list<string>|string
     * @throws SdkError When available_payout_methods is omitted; use hasAvailablePayoutMethods() or valueOrDefault().
     */
    public function getAvailablePayoutMethods(): mixed { return $this->get('available_payout_methods'); }
    public function hasAvailablePayoutMethods(): bool { return $this->has('available_payout_methods'); }
    /** Whether to return only destinations that are the default for their currency.
     * @return bool
     * @throws SdkError When default_for_currency is omitted; use hasDefaultForCurrency() or valueOrDefault().
     */
    public function getDefaultForCurrency(): bool { return $this->get('default_for_currency'); }
    public function hasDefaultForCurrency(): bool { return $this->has('default_for_currency'); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
}
