<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read ?string $canceled_reason
 * @property-read string $collecting_merchant_id
 * @property-read string $created_at
 * @property-read ?string $description
 * @property-read ?string $external_reference_id
 * @property-read ?string $failure_reason
 * @property-read string|null $funds_available_at
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $payment_intent_id
 * @property-read string $payment_split_id
 * @property-read ?string $pending_reason
 * @property-read list<PaymentSplitReversal> $reversals
 * @property-read MoneyValue $reversed_money
 * @property-read string $seller_merchant_id
 * @property-read MoneyValue $shortfall_money
 * @property-read string $status
 * @property-read ?string $succeeded_at
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSplitFailedEventDataObject extends Model {
    /** @param array{'amount_money': mixed, 'canceled_reason'?: string, 'collecting_merchant_id': string, 'created_at': string, 'description'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'funds_available_at': string|null, 'partner_app_id': string, 'partner_app_install_id': string, 'payment_intent_id': string, 'payment_split_id': string, 'pending_reason'?: string, 'reversals': list<mixed>, 'reversed_money': mixed, 'seller_merchant_id': string, 'shortfall_money': mixed, 'status': string, 'succeeded_at'?: string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitFailedEventDataObject')); }
    /** The admitted amount, or its final amount set at capture. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Present when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "fully_reversed".
     * @return ?string
     */
    public function getCanceledReason(): ?string { return $this->get('canceled_reason'); }
    public function hasCanceledReason(): bool { return $this->has('canceled_reason'); }
    /** The merchant of record that collected the payment.
     * @return string
     */
    public function getCollectingMerchantId(): string { return $this->get('collecting_merchant_id'); }
    public function hasCollectingMerchantId(): bool { return $this->has('collecting_merchant_id'); }
    /** When the payment's create recorded the split. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The collecting merchant's description, shown to the seller.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Present when status is failed. Can gain values; unknown reasons use split_failed. Value enum: "seller_cannot_receive", "split_failed".
     * @return ?string
     */
    public function getFailureReason(): ?string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. Format: date-time.
     * @return string|null
     */
    public function getFundsAvailableAt(): string|null { return $this->get('funds_available_at'); }
    public function hasFundsAvailableAt(): bool { return $this->has('funds_available_at'); }
    /** The collecting merchant's partner app.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The seller's install of the app.
     * @return string
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The collecting merchant's payment. Sellers can read the split, but not the payment.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Unique identifier for the split.
     * @return string
     */
    public function getPaymentSplitId(): string { return $this->get('payment_split_id'); }
    public function hasPaymentSplitId(): bool { return $this->has('payment_split_id'); }
    /** Present when status is pending. Can gain values. Value enum: "awaiting_payment", "dispute_open", "reversals_pending", "awaiting_funds".
     * @return ?string
     */
    public function getPendingReason(): ?string { return $this->get('pending_reason'); }
    public function hasPendingReason(): bool { return $this->has('pending_reason'); }
    /** Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. [] (Value): {@see PaymentSplitReversal}. A read-only nested child of a payment split, created by Flint for a refund or dispute. Embedded whole in PaymentSplit.reversals; no routes of its own.
     * @return list<PaymentSplitReversal>
     */
    public function getReversals(): array { return $this->get('reversals'); }
    public function hasReversals(): bool { return $this->has('reversals'); }
    /** Reversals' total amount minus their reinstated amounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReversedMoney(): MoneyValue { return $this->get('reversed_money'); }
    public function hasReversedMoney(): bool { return $this->has('reversed_money'); }
    /** The merchant receiving the split.
     * @return string
     */
    public function getSellerMerchantId(): string { return $this->get('seller_merchant_id'); }
    public function hasSellerMerchantId(): bool { return $this->has('seller_merchant_id'); }
    /** Reversed funds the collecting merchant covered for the seller, less reinstatements. The seller's net is amount_money minus reversed_money plus shortfall_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getShortfallMoney(): MoneyValue { return $this->get('shortfall_money'); }
    public function hasShortfallMoney(): bool { return $this->has('shortfall_money'); }
    /** The split lifecycle status. Value enum: "pending", "processing", "succeeded", "failed", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the split reached the seller's balance. Present when succeeded. Format: date-time.
     * @return ?string
     */
    public function getSucceededAt(): ?string { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** When the split last changed. Format: date-time.
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
