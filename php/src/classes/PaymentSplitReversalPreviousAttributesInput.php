<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $payment_split_reversal_id
 * @property-read string|null $reason
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $reinstated_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $shortfall_money
 * @property-read ResourceReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $source
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $succeeded_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSplitReversalPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'created_at'?: string|\DateTimeInterface|null, 'payment_split_reversal_id'?: string|null, 'reason'?: string|null, 'reinstated_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'shortfall_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'source'?: ResourceReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'succeeded_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitReversalPreviousAttributesInput')); }
    /** The split's share taken back. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the reversal was recorded. anyOf[1] (Value): string. When the reversal was recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier for the reversal. anyOf[1] (Value): string. Unique identifier for the reversal. Example: "psrev_01KEZF7C00XC1HA7S8YCQJDBDM". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_split_reversal_id is omitted; use hasPaymentSplitReversalId() or valueOrDefault().
     */
    public function getPaymentSplitReversalId(): mixed { return $this->get('payment_split_reversal_id'); }
    public function hasPaymentSplitReversalId(): bool { return $this->has('payment_split_reversal_id'); }
    /** Why Flint created the reversal. Value enum: "refund", "dispute", "other". anyOf[1] (Value): string. Why Flint created the reversal. Value enum: "refund", "dispute", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When reinstated_money is omitted; use hasReinstatedMoney() or valueOrDefault().
     */
    public function getReinstatedMoney(): mixed { return $this->get('reinstated_money'); }
    public function hasReinstatedMoney(): bool { return $this->has('reinstated_money'); }
    /** The part the collecting merchant covered. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When shortfall_money is omitted; use hasShortfallMoney() or valueOrDefault().
     */
    public function getShortfallMoney(): mixed { return $this->get('shortfall_money'); }
    public function hasShortfallMoney(): bool { return $this->has('shortfall_money'); }
    /** The refund or dispute behind the reversal. anyOf[1] (Value): {@see ResourceReferencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ResourceReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** The reversal lifecycle status. Value enum: "pending", "succeeded", "canceled". anyOf[1] (Value): string. The reversal lifecycle status. Value enum: "pending", "succeeded", "canceled". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the split's share was recovered. Present when succeeded. anyOf[1] (Value): string. When the split's share was recovered. Present when succeeded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When succeeded_at is omitted; use hasSucceededAt() or valueOrDefault().
     */
    public function getSucceededAt(): mixed { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
}
