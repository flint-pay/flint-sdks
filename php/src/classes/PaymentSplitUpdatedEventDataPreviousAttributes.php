<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $canceled_reason
 * @property-read string|null $collecting_merchant_id
 * @property-read string|null $created_at
 * @property-read string|null $description
 * @property-read string|null $external_reference_id
 * @property-read string|null $failure_reason
 * @property-read string|null $funds_available_at
 * @property-read string|null $partner_app_id
 * @property-read string|null $partner_app_install_id
 * @property-read string|null $payment_intent_id
 * @property-read string|null $payment_split_id
 * @property-read string|null $pending_reason
 * @property-read list<PaymentSplitReversalPreviousAttributes>|null $reversals
 * @property-read MoneyValuePreviousAttributes|null $reversed_money
 * @property-read string|null $seller_merchant_id
 * @property-read MoneyValuePreviousAttributes|null $shortfall_money
 * @property-read string|null $status
 * @property-read string|null $succeeded_at
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSplitUpdatedEventDataPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'canceled_reason'?: mixed, 'collecting_merchant_id'?: mixed, 'created_at'?: mixed, 'description'?: mixed, 'external_reference_id'?: mixed, 'failure_reason'?: mixed, 'funds_available_at'?: mixed, 'partner_app_id'?: mixed, 'partner_app_install_id'?: mixed, 'payment_intent_id'?: mixed, 'payment_split_id'?: mixed, 'pending_reason'?: mixed, 'reversals'?: mixed, 'reversed_money'?: mixed, 'seller_merchant_id'?: mixed, 'shortfall_money'?: mixed, 'status'?: mixed, 'succeeded_at'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitUpdatedEventDataPreviousAttributes')); }
    /** The admitted amount, or its final amount set at capture. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Present when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "fully_reversed". anyOf[1] (Value): string. Present when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "fully_reversed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCanceledReason(): string|null { return $this->get('canceled_reason'); }
    public function hasCanceledReason(): bool { return $this->has('canceled_reason'); }
    /** The merchant of record that collected the payment. anyOf[1] (Value): string. The merchant of record that collected the payment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCollectingMerchantId(): string|null { return $this->get('collecting_merchant_id'); }
    public function hasCollectingMerchantId(): bool { return $this->has('collecting_merchant_id'); }
    /** When the payment's create recorded the split. anyOf[1] (Value): string. When the payment's create recorded the split. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The collecting merchant's description, shown to the seller. anyOf[1] (Value): string. The collecting merchant's description, shown to the seller. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Present when status is failed. Can gain values; unknown reasons use split_failed. Value enum: "seller_cannot_receive", "split_failed". anyOf[1] (Value): string. Present when status is failed. Can gain values; unknown reasons use split_failed. Value enum: "seller_cannot_receive", "split_failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailureReason(): string|null { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. anyOf[1] (Value): string. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFundsAvailableAt(): string|null { return $this->get('funds_available_at'); }
    public function hasFundsAvailableAt(): bool { return $this->has('funds_available_at'); }
    /** The collecting merchant's partner app. anyOf[1] (Value): string. The collecting merchant's partner app. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppId(): string|null { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The seller's install of the app. anyOf[1] (Value): string. The seller's install of the app. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppInstallId(): string|null { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The collecting merchant's payment. Sellers can read the split, but not the payment. anyOf[1] (Value): string. The collecting merchant's payment. Sellers can read the split, but not the payment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Unique identifier for the split. anyOf[1] (Value): string. Unique identifier for the split. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentSplitId(): string|null { return $this->get('payment_split_id'); }
    public function hasPaymentSplitId(): bool { return $this->has('payment_split_id'); }
    /** Present when status is pending. Can gain values. Value enum: "awaiting_payment", "dispute_open", "reversals_pending", "awaiting_funds". anyOf[1] (Value): string. Present when status is pending. Can gain values. Value enum: "awaiting_payment", "dispute_open", "reversals_pending", "awaiting_funds". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPendingReason(): string|null { return $this->get('pending_reason'); }
    public function hasPendingReason(): bool { return $this->has('pending_reason'); }
    /** Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. anyOf[1] (Value): Array of {@see PaymentSplitReversalPreviousAttributes}. Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. anyOf[1][] (Value): {@see PaymentSplitReversalPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<PaymentSplitReversalPreviousAttributes>|null
     */
    public function getReversals(): array|null { return $this->get('reversals'); }
    public function hasReversals(): bool { return $this->has('reversals'); }
    /** Reversals' total amount minus their reinstated amounts. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReversedMoney(): MoneyValuePreviousAttributes|null { return $this->get('reversed_money'); }
    public function hasReversedMoney(): bool { return $this->has('reversed_money'); }
    /** The merchant receiving the split. anyOf[1] (Value): string. The merchant receiving the split. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSellerMerchantId(): string|null { return $this->get('seller_merchant_id'); }
    public function hasSellerMerchantId(): bool { return $this->has('seller_merchant_id'); }
    /** Reversed funds the collecting merchant covered for the seller, less reinstatements. The seller's net is amount_money minus reversed_money plus shortfall_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getShortfallMoney(): MoneyValuePreviousAttributes|null { return $this->get('shortfall_money'); }
    public function hasShortfallMoney(): bool { return $this->has('shortfall_money'); }
    /** The split lifecycle status. Value enum: "pending", "processing", "succeeded", "failed", "canceled". anyOf[1] (Value): string. The split lifecycle status. Value enum: "pending", "processing", "succeeded", "failed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the split reached the seller's balance. Present when succeeded. anyOf[1] (Value): string. When the split reached the seller's balance. Present when succeeded. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSucceededAt(): string|null { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** When the split last changed. anyOf[1] (Value): string. When the split last changed. Format: date-time. anyOf[2] (Value): null.
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
