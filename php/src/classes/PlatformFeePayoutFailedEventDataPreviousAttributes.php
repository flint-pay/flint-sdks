<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $amount_money
 * @property-read string|null $balance_transaction_id
 * @property-read string|null $created_at
 * @property-read string|null $failure_reason
 * @property-read string|null $partner_app_id
 * @property-read string|null $platform_fee_payout_id
 * @property-read string|null $status
 * @property-read string|null $succeeded_at
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeePayoutFailedEventDataPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'balance_transaction_id'?: mixed, 'created_at'?: mixed, 'failure_reason'?: mixed, 'partner_app_id'?: mixed, 'platform_fee_payout_id'?: mixed, 'status'?: mixed, 'succeeded_at'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeePayoutFailedEventDataPreviousAttributes')); }
    /** The amount transferred to your merchant balance. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. anyOf[1] (Value): string. The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBalanceTransactionId(): string|null { return $this->get('balance_transaction_id'); }
    public function hasBalanceTransactionId(): bool { return $this->has('balance_transaction_id'); }
    /** When Flint prepared the payout. anyOf[1] (Value): string. When Flint prepared the payout. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Value enum: "merchant_cannot_receive", "payout_failed". anyOf[1] (Value): string. Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Value enum: "merchant_cannot_receive", "payout_failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailureReason(): string|null { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** The partner app whose fee balance funded the payout. anyOf[1] (Value): string. The partner app whose fee balance funded the payout. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppId(): string|null { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Unique identifier for the platform fee payout. anyOf[1] (Value): string. Unique identifier for the platform fee payout. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPlatformFeePayoutId(): string|null { return $this->get('platform_fee_payout_id'); }
    public function hasPlatformFeePayoutId(): bool { return $this->has('platform_fee_payout_id'); }
    /** Where the payout stands. succeeded and failed are final. Value enum: "pending", "succeeded", "failed". anyOf[1] (Value): string. Where the payout stands. succeeded and failed are final. Value enum: "pending", "succeeded", "failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the transfer succeeded. Present only when status is succeeded. anyOf[1] (Value): string. When the transfer succeeded. Present only when status is succeeded. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSucceededAt(): string|null { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. anyOf[1] (Value): string. When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
