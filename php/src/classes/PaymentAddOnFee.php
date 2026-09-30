<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $fee_type
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentAddOnFee extends Model {
    /** @param array{'amount_money': mixed, 'fee_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentAddOnFee')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When fee_type is omitted; use hasFeeType() or valueOrDefault().
     */
    public function getFeeType(): string { return $this->get('fee_type'); }
    public function hasFeeType(): bool { return $this->has('fee_type'); }
}
