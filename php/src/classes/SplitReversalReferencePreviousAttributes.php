<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $payment_split_id
 * @property-read string|null $payment_split_reversal_id
 * Presence-aware response; omitted optional fields return null. */
final class SplitReversalReferencePreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'payment_split_id'?: mixed, 'payment_split_reversal_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SplitReversalReferencePreviousAttributes')); }
    /** The amount fixed at allocation, unchanged by recovery or reinstatement. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The split whose seller share was allocated. anyOf[1] (Value): string. The split whose seller share was allocated. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentSplitId(): string|null { return $this->get('payment_split_id'); }
    public function hasPaymentSplitId(): bool { return $this->has('payment_split_id'); }
    /** The reversal in PaymentSplit.reversals that records recovery status. anyOf[1] (Value): string. The reversal in PaymentSplit.reversals that records recovery status. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentSplitReversalId(): string|null { return $this->get('payment_split_reversal_id'); }
    public function hasPaymentSplitReversalId(): bool { return $this->has('payment_split_reversal_id'); }
}
