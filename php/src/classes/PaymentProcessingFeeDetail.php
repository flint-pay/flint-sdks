<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class PaymentProcessingFeeDetail extends Model {
    /** @param array{'amount_money': mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentProcessingFeeDetail')); }
    /** This component's amount, in the payment currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Applied fee component: base percentage, international card, manual entry, currency conversion, or fixed amount. Value enum: "base", "international_card", "manual_entry", "currency_conversion", "fixed".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
