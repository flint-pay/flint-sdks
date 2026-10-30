<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $fee_type
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentAddOnFeeInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'fee_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentAddOnFeeInput')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The Flint feature this fee pays for. A payment carries at most one of invoice_collection and subscription_collection. Can gain values: sum every entry rather than matching only the types you know. Value enum: "invoice_collection", "subscription_collection", "automatic_tax".
     * @return string
     * @throws SdkError When fee_type is omitted; use hasFeeType() or valueOrDefault().
     */
    public function getFeeType(): string { return $this->get('fee_type'); }
    public function hasFeeType(): bool { return $this->has('fee_type'); }
}
