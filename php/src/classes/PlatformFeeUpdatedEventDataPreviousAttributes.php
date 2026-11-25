<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $canceled_reason
 * @property-read string|null $checkout_session_id
 * @property-read string|null $collected_at
 * @property-read string|null $created_at
 * @property-read string|null $invoice_id
 * @property-read string|null $merchant_id
 * @property-read string|null $partner_app_id
 * @property-read string|null $partner_app_install_id
 * @property-read string|null $payment_intent_id
 * @property-read string|null $payment_link_id
 * @property-read string|null $platform_fee_id
 * @property-read PlatformFeeRulePreviousAttributes|null $platform_fee_rule
 * @property-read MoneyValuePreviousAttributes|null $refunded_money
 * @property-read MoneyValuePreviousAttributes|null $requested_amount_money
 * @property-read string|null $reserve_available_at
 * @property-read MoneyValuePreviousAttributes|null $reserve_hold_money
 * @property-read string|null $status
 * @property-read string|null $subscription_id
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeeUpdatedEventDataPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'canceled_reason'?: mixed, 'checkout_session_id'?: mixed, 'collected_at'?: mixed, 'created_at'?: mixed, 'invoice_id'?: mixed, 'merchant_id'?: mixed, 'partner_app_id'?: mixed, 'partner_app_install_id'?: mixed, 'payment_intent_id'?: mixed, 'payment_link_id'?: mixed, 'platform_fee_id'?: mixed, 'platform_fee_rule'?: mixed, 'refunded_money'?: mixed, 'requested_amount_money'?: mixed, 'reserve_available_at'?: mixed, 'reserve_hold_money'?: mixed, 'status'?: mixed, 'subscription_id'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeUpdatedEventDataPreviousAttributes')); }
    /** The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Why Flint collected no fee. Present only when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "install_revoked_by_app", "platform_capability_inactive", "uncollectible". anyOf[1] (Value): string. Why Flint collected no fee. Present only when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "install_revoked_by_app", "platform_capability_inactive", "uncollectible". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCanceledReason(): string|null { return $this->get('canceled_reason'); }
    public function hasCanceledReason(): bool { return $this->has('canceled_reason'); }
    /** The checkout session the payment came from. Absent when the fee was sent with the payment itself. anyOf[1] (Value): string. The checkout session the payment came from. Absent when the fee was sent with the payment itself. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCheckoutSessionId(): string|null { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** When Flint collected the fee with the payment. Absent unless status is succeeded. anyOf[1] (Value): string. When Flint collected the fee with the payment. Absent unless status is succeeded. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCollectedAt(): string|null { return $this->get('collected_at'); }
    public function hasCollectedAt(): bool { return $this->has('collected_at'); }
    /** When the payment's create recorded the fee. anyOf[1] (Value): string. When the payment's create recorded the fee. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The invoice the payment collected. anyOf[1] (Value): string. The invoice the payment collected. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** The installed merchant charged the fee, as on the install. anyOf[1] (Value): string. The installed merchant charged the fee, as on the install. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** The partner app that charged the fee. anyOf[1] (Value): string. The partner app that charged the fee. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppId(): string|null { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The install whose partner app token created the payment. anyOf[1] (Value): string. The install whose partner app token created the payment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppInstallId(): string|null { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. anyOf[1] (Value): string. The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** The payment link whose checkout made the payment. anyOf[1] (Value): string. The payment link whose checkout made the payment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentLinkId(): string|null { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. anyOf[1] (Value): string. Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPlatformFeeId(): string|null { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** The rule that priced this fee, as it stood when the payment was created. anyOf[1] (Value): {@see PlatformFeeRulePreviousAttributes}. anyOf[2] (Value): null.
     * @return PlatformFeeRulePreviousAttributes|null
     */
    public function getPlatformFeeRule(): PlatformFeeRulePreviousAttributes|null { return $this->get('platform_fee_rule'); }
    public function hasPlatformFeeRule(): bool { return $this->has('platform_fee_rule'); }
    /** The fee debited from the platform for returns so far, including opted-in payment refunds and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundedMoney(): MoneyValuePreviousAttributes|null { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** The fee the request asked for. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRequestedAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('requested_amount_money'); }
    public function hasRequestedAmountMoney(): bool { return $this->has('requested_amount_money'); }
    /** The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event. anyOf[1] (Value): string. The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReserveAvailableAt(): string|null { return $this->get('reserve_available_at'); }
    public function hasReserveAvailableAt(): bool { return $this->has('reserve_available_at'); }
    /** The share of the fee Flint held in your reserve when it posted the fee to your ledger. Absent until then. The original collection snapshot: refunds release their proportional share early, and loss coverage draws on the reserve as a whole. Read PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReserveHoldMoney(): MoneyValuePreviousAttributes|null { return $this->get('reserve_hold_money'); }
    public function hasReserveHoldMoney(): bool { return $this->has('reserve_hold_money'); }
    /** Where the fee stands. canceled is final. Value enum: "pending", "succeeded", "canceled". anyOf[1] (Value): string. Where the fee stands. canceled is final. Value enum: "pending", "succeeded", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The subscription associated with the payment. anyOf[1] (Value): string. The subscription associated with the payment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** When the fee last changed. anyOf[1] (Value): string. When the fee last changed. Format: date-time. anyOf[2] (Value): null.
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
