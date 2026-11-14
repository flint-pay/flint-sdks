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
    /** Fixed amount the promotion is set to take off, in the order's currency. Depending on the promotion's allocation it can apply to each eligible unit, so a charge can take off more. Present for an amount-off promotion, and absent for a percentage. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAmountOffMoney(): ?MoneyValue { return $this->get('amount_off_money'); }
    public function hasAmountOffMoney(): bool { return $this->has('amount_off_money'); }
    /** Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercentOff(): ?float { return $this->get('percent_off'); }
    public function hasPercentOff(): bool { return $this->has('percent_off'); }
}
