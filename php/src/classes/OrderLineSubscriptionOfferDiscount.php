<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?MoneyValue $amount_off_money
 * @property-read ?float $percent_off
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineSubscriptionOfferDiscount extends Model {
    /** @param array{'amount_off_money'?: mixed, 'percent_off'?: float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineSubscriptionOfferDiscount')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAmountOffMoney(): ?MoneyValue { return $this->get('amount_off_money'); }
    public function hasAmountOffMoney(): bool { return $this->has('amount_off_money'); }
    /** Shape $ (Value): number. multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercentOff(): ?float { return $this->get('percent_off'); }
    public function hasPercentOff(): bool { return $this->has('percent_off'); }
}
