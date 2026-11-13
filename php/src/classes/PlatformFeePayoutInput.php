<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $balance_transaction_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $failure_reason
 * @property-read string $partner_app_id
 * @property-read string $platform_fee_payout_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $succeeded_at
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeePayoutInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_transaction_id'?: string, 'created_at': string|\DateTimeInterface, 'failure_reason'?: string, 'partner_app_id': string, 'platform_fee_payout_id': string, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeePayoutInput')); }
    /** The amount transferred to your merchant balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     * @return string
     * @throws SdkError When balance_transaction_id is omitted; use hasBalanceTransactionId() or valueOrDefault().
     */
    public function getBalanceTransactionId(): string { return $this->get('balance_transaction_id'); }
    public function hasBalanceTransactionId(): bool { return $this->has('balance_transaction_id'); }
    /** When Flint prepared the payout. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Value enum: "merchant_cannot_receive", "payout_failed".
     * @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** The partner app whose fee balance funded the payout. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Unique identifier for the platform fee payout. Example: "pfpo_01KEZF7C00H58B147FK286D4A4".
     * @return string
     * @throws SdkError When platform_fee_payout_id is omitted; use hasPlatformFeePayoutId() or valueOrDefault().
     */
    public function getPlatformFeePayoutId(): string { return $this->get('platform_fee_payout_id'); }
    public function hasPlatformFeePayoutId(): bool { return $this->has('platform_fee_payout_id'); }
    /** Where the payout stands. succeeded and failed are final. Value enum: "pending", "succeeded", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the transfer succeeded. Present only when status is succeeded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When succeeded_at is omitted; use hasSucceededAt() or valueOrDefault().
     */
    public function getSucceededAt(): string|\DateTimeInterface { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
