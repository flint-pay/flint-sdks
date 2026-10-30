<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $fee_type
 * Presence-aware response; omitted optional fields return null. */
final class PaymentAddOnFee extends Model {
    /** @param array{'amount_money': mixed, 'fee_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentAddOnFee')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The Flint feature this fee pays for. A payment carries at most one of invoice_collection and subscription_collection. Can gain values: sum every entry rather than matching only the types you know. Value enum: "invoice_collection", "subscription_collection", "automatic_tax".
     * @return string
     */
    public function getFeeType(): string { return $this->get('fee_type'); }
    public function hasFeeType(): bool { return $this->has('fee_type'); }
}
