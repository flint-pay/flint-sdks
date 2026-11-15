<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read ?string $balance_transaction_id
 * @property-read string $created_at
 * @property-read ?string $failure_reason
 * @property-read string $partner_app_id
 * @property-read string $platform_fee_payout_id
 * @property-read string $status
 * @property-read ?string $succeeded_at
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeePayoutFailedEventDataObject extends Model {
    /** @param array{'amount_money': mixed, 'balance_transaction_id'?: string, 'created_at': string, 'failure_reason'?: string, 'partner_app_id': string, 'platform_fee_payout_id': string, 'status': string, 'succeeded_at'?: string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeePayoutFailedEventDataObject')); }
    /** The amount transferred to your merchant balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version.
     * @return ?string
     */
    public function getBalanceTransactionId(): ?string { return $this->get('balance_transaction_id'); }
    public function hasBalanceTransactionId(): bool { return $this->has('balance_transaction_id'); }
    /** When Flint prepared the payout. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Value enum: "merchant_cannot_receive", "payout_failed".
     * @return ?string
     */
    public function getFailureReason(): ?string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** The partner app whose fee balance funded the payout.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Unique identifier for the platform fee payout.
     * @return string
     */
    public function getPlatformFeePayoutId(): string { return $this->get('platform_fee_payout_id'); }
    public function hasPlatformFeePayoutId(): bool { return $this->has('platform_fee_payout_id'); }
    /** Where the payout stands. succeeded and failed are final. Value enum: "pending", "succeeded", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the transfer succeeded. Present only when status is succeeded. Format: date-time.
     * @return ?string
     */
    public function getSucceededAt(): ?string { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
