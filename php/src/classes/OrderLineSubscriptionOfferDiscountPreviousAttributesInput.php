<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_off_money
 * @property-read int|float|null $percent_off
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineSubscriptionOfferDiscountPreviousAttributesInput extends Model {
    /** @param array{'amount_off_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'percent_off'?: int|float|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineSubscriptionOfferDiscountPreviousAttributesInput')); }
    /** Fixed amount the promotion is set to take off, in the order's currency. Depending on the promotion's allocation it can apply to each eligible unit, so a charge can take off more. Present for an amount-off promotion, and absent for a percentage. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_off_money is omitted; use hasAmountOffMoney() or valueOrDefault().
     */
    public function getAmountOffMoney(): mixed { return $this->get('amount_off_money'); }
    public function hasAmountOffMoney(): bool { return $this->has('amount_off_money'); }
    /** Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. anyOf[1] (Value): number. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When percent_off is omitted; use hasPercentOff() or valueOrDefault().
     */
    public function getPercentOff(): mixed { return $this->get('percent_off'); }
    public function hasPercentOff(): bool { return $this->has('percent_off'); }
}
