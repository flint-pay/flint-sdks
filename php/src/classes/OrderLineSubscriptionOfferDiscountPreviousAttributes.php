<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_off_money
 * @property-read float|null $percent_off
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineSubscriptionOfferDiscountPreviousAttributes extends Model {
    /** @param array{'amount_off_money'?: mixed, 'percent_off'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineSubscriptionOfferDiscountPreviousAttributes')); }
    /** Fixed amount the promotion is set to take off, in the order's currency. Depending on the promotion's allocation it can apply to each eligible unit, so a charge can take off more. Present for an amount-off promotion, and absent for a percentage. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountOffMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_off_money'); }
    public function hasAmountOffMoney(): bool { return $this->has('amount_off_money'); }
    /** Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. anyOf[1] (Value): number. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getPercentOff(): float|null { return $this->get('percent_off'); }
    public function hasPercentOff(): bool { return $this->has('percent_off'); }
}
