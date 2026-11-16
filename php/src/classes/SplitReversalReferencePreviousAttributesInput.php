<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $payment_split_id
 * @property-read string|null $payment_split_reversal_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SplitReversalReferencePreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'payment_split_id'?: string|null, 'payment_split_reversal_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SplitReversalReferencePreviousAttributesInput')); }
    /** The amount fixed at allocation, unchanged by recovery or reinstatement. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The split whose seller share was allocated. anyOf[1] (Value): string. The split whose seller share was allocated. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_split_id is omitted; use hasPaymentSplitId() or valueOrDefault().
     */
    public function getPaymentSplitId(): mixed { return $this->get('payment_split_id'); }
    public function hasPaymentSplitId(): bool { return $this->has('payment_split_id'); }
    /** The reversal in PaymentSplit.reversals that records recovery status. anyOf[1] (Value): string. The reversal in PaymentSplit.reversals that records recovery status. Example: "psrev_01KEZF7C00XC1HA7S8YCQJDBDM". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_split_reversal_id is omitted; use hasPaymentSplitReversalId() or valueOrDefault().
     */
    public function getPaymentSplitReversalId(): mixed { return $this->get('payment_split_reversal_id'); }
    public function hasPaymentSplitReversalId(): bool { return $this->has('payment_split_reversal_id'); }
}
