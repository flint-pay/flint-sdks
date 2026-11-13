<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $amount_money
 * @property-read string $payment_split_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SplitReversalRequestInput extends Model {
    /** @param array{'amount_money': array{'amount': string, 'currency': string}|object, 'payment_split_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SplitReversalRequestInput')); }
    /** Positive seller amount to take back, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): array|object { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** An eligible split on a payment this refund covers. Each split may appear once. minLength: 1. pattern: ^psplit_[0-9A-HJKMNP-TV-Z]{26}$. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8".
     * @return string
     * @throws SdkError When payment_split_id is omitted; use hasPaymentSplitId() or valueOrDefault().
     */
    public function getPaymentSplitId(): string { return $this->get('payment_split_id'); }
    public function hasPaymentSplitId(): bool { return $this->has('payment_split_id'); }
}
