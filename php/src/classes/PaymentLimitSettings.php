<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, MoneyValue> $effective_max_amounts
 * @property-read ?array<array-key, MoneyValue> $effective_min_amounts
 * @property-read ?array<array-key, MoneyValue> $max_amounts
 * @property-read ?array<array-key, MoneyValue> $min_amounts
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLimitSettings extends Model {
    /** @param array{'effective_max_amounts'?: \stdClass, 'effective_min_amounts'?: \stdClass, 'max_amounts'?: \stdClass, 'min_amounts'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLimitSettings')); }
    /** Enforced maximum USD amounts for every supported exact payment_option.surface selector. Only returned by GET /v1/settings/effective. Includes merchant limits and Flint support approvals; the approval map is private. * (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, MoneyValue>
     */
    public function getEffectiveMaxAmounts(): ?array { return $this->get('effective_max_amounts'); }
    public function hasEffectiveMaxAmounts(): bool { return $this->has('effective_max_amounts'); }
    /** Enforced minimum USD amounts for every supported exact payment_option.surface selector. Only returned by GET /v1/settings/effective. Includes merchant limits and Flint's payment-option floors. * (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, MoneyValue>
     */
    public function getEffectiveMinAmounts(): ?array { return $this->get('effective_min_amounts'); }
    public function hasEffectiveMinAmounts(): bool { return $this->has('effective_min_amounts'); }
    /** Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot raise Flint's policy ceiling. * (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, MoneyValue>
     */
    public function getMaxAmounts(): ?array { return $this->get('max_amounts'); }
    public function hasMaxAmounts(): bool { return $this->has('max_amounts'); }
    /** Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot lower Flint's payment-option floor. * (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, MoneyValue>
     */
    public function getMinAmounts(): ?array { return $this->get('min_amounts'); }
    public function hasMinAmounts(): bool { return $this->has('min_amounts'); }
}
