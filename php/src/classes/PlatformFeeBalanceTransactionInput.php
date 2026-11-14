<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $available_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $partner_app_id
 * @property-read string $platform_fee_balance_transaction_id
 * @property-read string $platform_fee_id
 * @property-read string $platform_fee_payout_id
 * @property-read list<string> $related_balance_transaction_ids
 * @property-read ResourceReferenceInput|array<array-key, mixed>|\stdClass $related_resource
 * @property-read string $status
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeeBalanceTransactionInput extends Model {
    /** @param array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'available_at'?: string|\DateTimeInterface, 'created_at': string|\DateTimeInterface, 'description'?: string, 'occurred_at': string|\DateTimeInterface, 'partner_app_id': string, 'platform_fee_balance_transaction_id': string, 'platform_fee_id'?: string, 'platform_fee_payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'status': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeBalanceTransactionInput')); }
    /** The signed effect on available_money plus pending_money: positive for money in, negative for money out. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the entry becomes, or became, available. Absent while Flint hasn't verified the application fee that carries it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When available_at is omitted; use hasAvailableAt() or valueOrDefault().
     */
    public function getAvailableAt(): string|\DateTimeInterface { return $this->get('available_at'); }
    public function hasAvailableAt(): bool { return $this->has('available_at'); }
    /** When Flint recorded the entry. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Display text, not for matching.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** When the movement happened. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** The partner app the entry belongs to. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Unique identifier for the balance transaction. Example: "pfbt_01KEZF7C0079KPKMAHC7C60G1T".
     * @return string
     * @throws SdkError When platform_fee_balance_transaction_id is omitted; use hasPlatformFeeBalanceTransactionId() or valueOrDefault().
     */
    public function getPlatformFeeBalanceTransactionId(): string { return $this->get('platform_fee_balance_transaction_id'); }
    public function hasPlatformFeeBalanceTransactionId(): bool { return $this->has('platform_fee_balance_transaction_id'); }
    /** The fee the entry concerns, when it concerns one. Example: "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     * @return string
     * @throws SdkError When platform_fee_id is omitted; use hasPlatformFeeId() or valueOrDefault().
     */
    public function getPlatformFeeId(): string { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** The payout that carried the entry. Set once when a payout is prepared, and never changed. Example: "pfpo_01KEZF7C00H58B147FK286D4A4".
     * @return string
     * @throws SdkError When platform_fee_payout_id is omitted; use hasPlatformFeePayoutId() or valueOrDefault().
     */
    public function getPlatformFeePayoutId(): string { return $this->get('platform_fee_payout_id'); }
    public function hasPlatformFeePayoutId(): bool { return $this->has('platform_fee_payout_id'); }
    /** Earlier entries this one is linked to. Empty when none. [] (Value): string. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     * @return list<string>
     * @throws SdkError When related_balance_transaction_ids is omitted; use hasRelatedBalanceTransactionIds() or valueOrDefault().
     */
    public function getRelatedBalanceTransactionIds(): array { return $this->get('related_balance_transaction_ids'); }
    public function hasRelatedBalanceTransactionIds(): bool { return $this->has('related_balance_transaction_ids'); }
    /** The Flint resource behind the entry, when it has one other than the fee. A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReferenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When related_resource is omitted; use hasRelatedResource() or valueOrDefault().
     */
    public function getRelatedResource(): mixed { return $this->get('related_resource'); }
    public function hasRelatedResource(): bool { return $this->has('related_resource'); }
    /** Whether the amount counts toward available_money yet. Value enum: "pending", "available".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** What the entry records. Can gain values; treat an unknown value as other. Value enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage", "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal", "platform_fee_payout", "platform_fee_payout_reversal", "other".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
