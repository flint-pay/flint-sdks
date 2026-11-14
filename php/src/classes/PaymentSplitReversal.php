<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $created_at
 * @property-read string $payment_split_reversal_id
 * @property-read string $reason
 * @property-read MoneyValue $reinstated_money
 * @property-read MoneyValue $shortfall_money
 * @property-read ResourceReference $source
 * @property-read string $status
 * @property-read ?string $succeeded_at
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSplitReversal extends Model {
    /** @param array{'amount_money': mixed, 'created_at': string, 'payment_split_reversal_id': string, 'reason': string, 'reinstated_money': mixed, 'shortfall_money': mixed, 'source': mixed, 'status': string, 'succeeded_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitReversal')); }
    /** The split's share taken back. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the reversal was recorded. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier for the reversal.
     * @return string
     */
    public function getPaymentSplitReversalId(): string { return $this->get('payment_split_reversal_id'); }
    public function hasPaymentSplitReversalId(): bool { return $this->has('payment_split_reversal_id'); }
    /** Why Flint created the reversal. Value enum: "refund", "dispute", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReinstatedMoney(): MoneyValue { return $this->get('reinstated_money'); }
    public function hasReinstatedMoney(): bool { return $this->has('reinstated_money'); }
    /** The part the collecting merchant covered. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getShortfallMoney(): MoneyValue { return $this->get('shortfall_money'); }
    public function hasShortfallMoney(): bool { return $this->has('shortfall_money'); }
    /** The refund or dispute behind the reversal. A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReference
     */
    public function getSource(): ResourceReference { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** The reversal lifecycle status. Value enum: "pending", "succeeded", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the split's share was recovered. Present when succeeded. Format: date-time.
     * @return ?string
     */
    public function getSucceededAt(): ?string { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
}
