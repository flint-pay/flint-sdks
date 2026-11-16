<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $canceled_reason
 * @property-read string|null $collecting_merchant_id
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $description
 * @property-read string|null $external_reference_id
 * @property-read string|null $failure_reason
 * @property-read string|\DateTimeInterface|null $funds_available_at
 * @property-read string|null $partner_app_id
 * @property-read string|null $partner_app_install_id
 * @property-read string|null $payment_intent_id
 * @property-read string|null $payment_split_id
 * @property-read string|null $pending_reason
 * @property-read list<PaymentSplitReversalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $reversals
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $reversed_money
 * @property-read string|null $seller_merchant_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $shortfall_money
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $succeeded_at
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSplitPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'canceled_reason'?: string|null, 'collecting_merchant_id'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'description'?: string|null, 'external_reference_id'?: string|null, 'failure_reason'?: string|null, 'funds_available_at'?: string|\DateTimeInterface|null, 'partner_app_id'?: string|null, 'partner_app_install_id'?: string|null, 'payment_intent_id'?: string|null, 'payment_split_id'?: string|null, 'pending_reason'?: string|null, 'reversals'?: list<PaymentSplitReversalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'reversed_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'seller_merchant_id'?: string|null, 'shortfall_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'succeeded_at'?: string|\DateTimeInterface|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitPreviousAttributesInput')); }
    /** The admitted amount, or its final amount set at capture. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Present when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "fully_reversed". anyOf[1] (Value): string. Present when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "fully_reversed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When canceled_reason is omitted; use hasCanceledReason() or valueOrDefault().
     */
    public function getCanceledReason(): mixed { return $this->get('canceled_reason'); }
    public function hasCanceledReason(): bool { return $this->has('canceled_reason'); }
    /** The merchant of record that collected the payment. anyOf[1] (Value): string. The merchant of record that collected the payment. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When collecting_merchant_id is omitted; use hasCollectingMerchantId() or valueOrDefault().
     */
    public function getCollectingMerchantId(): mixed { return $this->get('collecting_merchant_id'); }
    public function hasCollectingMerchantId(): bool { return $this->has('collecting_merchant_id'); }
    /** When the payment's create recorded the split. anyOf[1] (Value): string. When the payment's create recorded the split. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The collecting merchant's description, shown to the seller. anyOf[1] (Value): string. The collecting merchant's description, shown to the seller. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Present when status is failed. Can gain values; unknown reasons use split_failed. Value enum: "seller_cannot_receive", "split_failed". anyOf[1] (Value): string. Present when status is failed. Can gain values; unknown reasons use split_failed. Value enum: "seller_cannot_receive", "split_failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): mixed { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. anyOf[1] (Value): string. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When funds_available_at is omitted; use hasFundsAvailableAt() or valueOrDefault().
     */
    public function getFundsAvailableAt(): mixed { return $this->get('funds_available_at'); }
    public function hasFundsAvailableAt(): bool { return $this->has('funds_available_at'); }
    /** The collecting merchant's partner app. anyOf[1] (Value): string. The collecting merchant's partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): mixed { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The seller's install of the app. anyOf[1] (Value): string. The seller's install of the app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): mixed { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The collecting merchant's payment. Sellers can read the split, but not the payment. anyOf[1] (Value): string. The collecting merchant's payment. Sellers can read the split, but not the payment. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): mixed { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Unique identifier for the split. anyOf[1] (Value): string. Unique identifier for the split. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_split_id is omitted; use hasPaymentSplitId() or valueOrDefault().
     */
    public function getPaymentSplitId(): mixed { return $this->get('payment_split_id'); }
    public function hasPaymentSplitId(): bool { return $this->has('payment_split_id'); }
    /** Present when status is pending. Can gain values. Value enum: "awaiting_payment", "dispute_open", "reversals_pending", "awaiting_funds". anyOf[1] (Value): string. Present when status is pending. Can gain values. Value enum: "awaiting_payment", "dispute_open", "reversals_pending", "awaiting_funds". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When pending_reason is omitted; use hasPendingReason() or valueOrDefault().
     */
    public function getPendingReason(): mixed { return $this->get('pending_reason'); }
    public function hasPendingReason(): bool { return $this->has('pending_reason'); }
    /** Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. anyOf[1] (Value): Array of {@see PaymentSplitReversalPreviousAttributesInput}. Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. anyOf[1][] (Value): {@see PaymentSplitReversalPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<PaymentSplitReversalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When reversals is omitted; use hasReversals() or valueOrDefault().
     */
    public function getReversals(): mixed { return $this->get('reversals'); }
    public function hasReversals(): bool { return $this->has('reversals'); }
    /** Reversals' total amount minus their reinstated amounts. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When reversed_money is omitted; use hasReversedMoney() or valueOrDefault().
     */
    public function getReversedMoney(): mixed { return $this->get('reversed_money'); }
    public function hasReversedMoney(): bool { return $this->has('reversed_money'); }
    /** The merchant receiving the split. anyOf[1] (Value): string. The merchant receiving the split. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When seller_merchant_id is omitted; use hasSellerMerchantId() or valueOrDefault().
     */
    public function getSellerMerchantId(): mixed { return $this->get('seller_merchant_id'); }
    public function hasSellerMerchantId(): bool { return $this->has('seller_merchant_id'); }
    /** Reversed funds the collecting merchant covered for the seller, less reinstatements. The seller's net is amount_money minus reversed_money plus shortfall_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When shortfall_money is omitted; use hasShortfallMoney() or valueOrDefault().
     */
    public function getShortfallMoney(): mixed { return $this->get('shortfall_money'); }
    public function hasShortfallMoney(): bool { return $this->has('shortfall_money'); }
    /** The split lifecycle status. Value enum: "pending", "processing", "succeeded", "failed", "canceled". anyOf[1] (Value): string. The split lifecycle status. Value enum: "pending", "processing", "succeeded", "failed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the split reached the seller's balance. Present when succeeded. anyOf[1] (Value): string. When the split reached the seller's balance. Present when succeeded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When succeeded_at is omitted; use hasSucceededAt() or valueOrDefault().
     */
    public function getSucceededAt(): mixed { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** When the split last changed. anyOf[1] (Value): string. When the split last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
