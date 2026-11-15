<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $payment_split_reversal_id
 * @property-read string $reason
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $reinstated_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $shortfall_money
 * @property-read ResourceReferenceInput|array<array-key, mixed>|\stdClass $source
 * @property-read string $status
 * @property-read string|\DateTimeInterface $succeeded_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSplitReversalInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'payment_split_reversal_id': string, 'reason': string, 'reinstated_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'shortfall_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'source': ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitReversalInput')); }
    /** The split's share taken back. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the reversal was recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier for the reversal. Example: "psrev_01KEZF7C00XC1HA7S8YCQJDBDM".
     * @return string
     * @throws SdkError When payment_split_reversal_id is omitted; use hasPaymentSplitReversalId() or valueOrDefault().
     */
    public function getPaymentSplitReversalId(): string { return $this->get('payment_split_reversal_id'); }
    public function hasPaymentSplitReversalId(): bool { return $this->has('payment_split_reversal_id'); }
    /** Why Flint created the reversal. Value enum: "refund", "dispute", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reinstated_money is omitted; use hasReinstatedMoney() or valueOrDefault().
     */
    public function getReinstatedMoney(): mixed { return $this->get('reinstated_money'); }
    public function hasReinstatedMoney(): bool { return $this->has('reinstated_money'); }
    /** The part the collecting merchant covered. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shortfall_money is omitted; use hasShortfallMoney() or valueOrDefault().
     */
    public function getShortfallMoney(): mixed { return $this->get('shortfall_money'); }
    public function hasShortfallMoney(): bool { return $this->has('shortfall_money'); }
    /** The refund or dispute behind the reversal. A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReferenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** The reversal lifecycle status. Value enum: "pending", "succeeded", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the split's share was recovered. Present when succeeded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When succeeded_at is omitted; use hasSucceededAt() or valueOrDefault().
     */
    public function getSucceededAt(): string|\DateTimeInterface { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
}
