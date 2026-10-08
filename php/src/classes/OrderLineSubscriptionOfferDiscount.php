<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_off_money
 * @property-read float $percent_off
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderLineSubscriptionOfferDiscount extends Model {
    /** @param array{'amount_off_money'?: mixed, 'percent_off'?: float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineSubscriptionOfferDiscount')); }
    /** @return MoneyValue
     * @throws SdkError When amount_off_money is omitted; use hasAmountOffMoney() or valueOrDefault().
     */
    public function getAmountOffMoney(): MoneyValue { return $this->get('amount_off_money'); }
    public function hasAmountOffMoney(): bool { return $this->has('amount_off_money'); }
    /** @return float
     * @throws SdkError When percent_off is omitted; use hasPercentOff() or valueOrDefault().
     */
    public function getPercentOff(): float { return $this->get('percent_off'); }
    public function hasPercentOff(): bool { return $this->has('percent_off'); }
}
