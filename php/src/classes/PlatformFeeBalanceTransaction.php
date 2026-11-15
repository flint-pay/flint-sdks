<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoney $amount_money
 * @property-read ?string $available_at
 * @property-read string $created_at
 * @property-read ?string $description
 * @property-read string $occurred_at
 * @property-read string $partner_app_id
 * @property-read string $platform_fee_balance_transaction_id
 * @property-read ?string $platform_fee_id
 * @property-read ?string $platform_fee_payout_id
 * @property-read list<string> $related_balance_transaction_ids
 * @property-read ?ResourceReference $related_resource
 * @property-read string $status
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeeBalanceTransaction extends Model {
    /** @param array{'amount_money': mixed, 'available_at'?: string, 'created_at': string, 'description'?: string, 'occurred_at': string, 'partner_app_id': string, 'platform_fee_balance_transaction_id': string, 'platform_fee_id'?: string, 'platform_fee_payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: mixed, 'status': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeBalanceTransaction')); }
    /** The signed effect on available_money plus pending_money: positive for money in, negative for money out. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getAmountMoney(): SignedMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the entry becomes, or became, available. Absent while Flint hasn't verified the application fee that carries it. Format: date-time.
     * @return ?string
     */
    public function getAvailableAt(): ?string { return $this->get('available_at'); }
    public function hasAvailableAt(): bool { return $this->has('available_at'); }
    /** When Flint recorded the entry. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Display text, not for matching.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** When the movement happened. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** The partner app the entry belongs to.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Unique identifier for the balance transaction.
     * @return string
     */
    public function getPlatformFeeBalanceTransactionId(): string { return $this->get('platform_fee_balance_transaction_id'); }
    public function hasPlatformFeeBalanceTransactionId(): bool { return $this->has('platform_fee_balance_transaction_id'); }
    /** The fee the entry concerns, when it concerns one.
     * @return ?string
     */
    public function getPlatformFeeId(): ?string { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** The payout that carried the entry. Set once when a payout is prepared, and never changed.
     * @return ?string
     */
    public function getPlatformFeePayoutId(): ?string { return $this->get('platform_fee_payout_id'); }
    public function hasPlatformFeePayoutId(): bool { return $this->has('platform_fee_payout_id'); }
    /** Earlier entries this one is linked to. Empty when none. [] (Value): string.
     * @return list<string>
     */
    public function getRelatedBalanceTransactionIds(): array { return $this->get('related_balance_transaction_ids'); }
    public function hasRelatedBalanceTransactionIds(): bool { return $this->has('related_balance_transaction_ids'); }
    /** The Flint resource behind the entry, when it has one other than the fee. A reference to another resource by `resource_type` and `resource_id`.
     * @return ?ResourceReference
     */
    public function getRelatedResource(): ?ResourceReference { return $this->get('related_resource'); }
    public function hasRelatedResource(): bool { return $this->has('related_resource'); }
    /** Whether the amount counts toward available_money yet. Value enum: "pending", "available".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** What the entry records. Can gain values; treat an unknown value as other. Value enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage", "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal", "platform_fee_payout", "platform_fee_payout_reversal", "other".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
