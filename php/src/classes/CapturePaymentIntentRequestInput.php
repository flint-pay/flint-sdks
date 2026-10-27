<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CapturePaymentIntentRequestInput extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CapturePaymentIntentRequestInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Amount to capture, in the authorization's currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same request, and the payment intent can't be captured again. Must be greater than zero and at most capturable_money. Affirm payments can only be captured in full. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
}
