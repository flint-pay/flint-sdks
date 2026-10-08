<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_off_money
 * @property-read int|float $percent_off
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineSubscriptionOfferDiscountInput extends Model {
    /** @param array{'amount_off_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent_off'?: int|float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineSubscriptionOfferDiscountInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_off_money is omitted; use hasAmountOffMoney() or valueOrDefault().
     */
    public function getAmountOffMoney(): mixed { return $this->get('amount_off_money'); }
    public function hasAmountOffMoney(): bool { return $this->has('amount_off_money'); }
    /** @return int|float
     * @throws SdkError When percent_off is omitted; use hasPercentOff() or valueOrDefault().
     */
    public function getPercentOff(): int|float { return $this->get('percent_off'); }
    public function hasPercentOff(): bool { return $this->has('percent_off'); }
}
