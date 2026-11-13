<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $payment_split_id
 * @property-read string $payment_split_reversal_id
 * Presence-aware response; omitted optional fields return null. */
final class SplitReversalReference extends Model {
    /** @param array{'amount_money': mixed, 'payment_split_id': string, 'payment_split_reversal_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SplitReversalReference')); }
    /** The amount fixed at allocation, unchanged by recovery or reinstatement. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The split whose seller share was allocated.
     * @return string
     */
    public function getPaymentSplitId(): string { return $this->get('payment_split_id'); }
    public function hasPaymentSplitId(): bool { return $this->has('payment_split_id'); }
    /** The reversal in PaymentSplit.reversals that records recovery status.
     * @return string
     */
    public function getPaymentSplitReversalId(): string { return $this->get('payment_split_reversal_id'); }
    public function hasPaymentSplitReversalId(): bool { return $this->has('payment_split_reversal_id'); }
}
