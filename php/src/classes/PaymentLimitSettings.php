<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, MoneyValue> $max_amounts
 * @property-read ?array<array-key, MoneyValue> $min_amounts
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLimitSettings extends Model {
    /** @param array{'max_amounts'?: \stdClass, 'min_amounts'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLimitSettings')); }
    /** Shape $ (Value): Map of {@see MoneyValue}. Map replaced as a whole: the keys you send become the full map. Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot raise Flint's policy ceiling. Shape $.* (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, MoneyValue>
     */
    public function getMaxAmounts(): ?array { return $this->get('max_amounts'); }
    public function hasMaxAmounts(): bool { return $this->has('max_amounts'); }
    /** Shape $ (Value): Map of {@see MoneyValue}. Map replaced as a whole: the keys you send become the full map. Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot lower Flint's payment-option floor. Shape $.* (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, MoneyValue>
     */
    public function getMinAmounts(): ?array { return $this->get('min_amounts'); }
    public function hasMinAmounts(): bool { return $this->has('min_amounts'); }
}
