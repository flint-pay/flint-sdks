<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $amount
 * @property-read string $currency
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardCustomAmountBoundsMinimumMoney extends Model {
    /** @param array{'amount': string, 'currency': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardCustomAmountBoundsMinimumMoney')); }
    /** Amount in the currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 200000.
     * @return string
     */
    public function getAmount(): string { return $this->get('amount'); }
    public function hasAmount(): bool { return $this->has('amount'); }
    /** Three-letter ISO 4217 currency code. Value enum: "USD".
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
}
