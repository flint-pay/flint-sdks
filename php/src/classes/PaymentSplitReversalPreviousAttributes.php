<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $amount_money
 * @property-read string|null $created_at
 * @property-read string|null $payment_split_reversal_id
 * @property-read string|null $reason
 * @property-read mixed $reinstated_money
 * @property-read mixed $shortfall_money
 * @property-read mixed $source
 * @property-read string|null $status
 * @property-read string|null $succeeded_at
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSplitReversalPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'created_at'?: mixed, 'payment_split_reversal_id'?: mixed, 'reason'?: mixed, 'reinstated_money'?: mixed, 'shortfall_money'?: mixed, 'source'?: mixed, 'status'?: mixed, 'succeeded_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitReversalPreviousAttributes')); }
    /** The split's share taken back. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the reversal was recorded. anyOf[1] (Value): string. When the reversal was recorded. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier for the reversal. anyOf[1] (Value): string. Unique identifier for the reversal. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentSplitReversalId(): string|null { return $this->get('payment_split_reversal_id'); }
    public function hasPaymentSplitReversalId(): bool { return $this->has('payment_split_reversal_id'); }
    /** Why Flint created the reversal. Value enum: "refund", "dispute", "other". anyOf[1] (Value): string. Why Flint created the reversal. Value enum: "refund", "dispute", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReinstatedMoney(): mixed { return $this->get('reinstated_money'); }
    public function hasReinstatedMoney(): bool { return $this->has('reinstated_money'); }
    /** The part the collecting merchant covered. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getShortfallMoney(): mixed { return $this->get('shortfall_money'); }
    public function hasShortfallMoney(): bool { return $this->has('shortfall_money'); }
    /** The refund or dispute behind the reversal. anyOf[1] (Value): {@see ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** The reversal lifecycle status. Value enum: "pending", "succeeded", "canceled". anyOf[1] (Value): string. The reversal lifecycle status. Value enum: "pending", "succeeded", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the split's share was recovered. Present when succeeded. anyOf[1] (Value): string. When the split's share was recovered. Present when succeeded. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSucceededAt(): string|null { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
}
