<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read ?string $canceled_reason
 * @property-read ?string $checkout_session_id
 * @property-read ?string $collected_at
 * @property-read string $created_at
 * @property-read string $merchant_id
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $payment_intent_id
 * @property-read string $platform_fee_id
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $requested_amount_money
 * @property-read ?string $reserve_available_at
 * @property-read ?MoneyValue $reserve_hold_money
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeeUpdatedEventDataObject extends Model {
    /** @param array{'amount_money': mixed, 'canceled_reason'?: string, 'checkout_session_id'?: string, 'collected_at'?: string, 'created_at': string, 'merchant_id': string, 'partner_app_id': string, 'partner_app_install_id': string, 'payment_intent_id': string, 'platform_fee_id': string, 'refunded_money': mixed, 'requested_amount_money': mixed, 'reserve_available_at'?: string, 'reserve_hold_money'?: mixed, 'status': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeUpdatedEventDataObject')); }
    /** The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Why Flint collected no fee. Present only when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "platform_capability_inactive", "uncollectible".
     * @return ?string
     */
    public function getCanceledReason(): ?string { return $this->get('canceled_reason'); }
    public function hasCanceledReason(): bool { return $this->has('canceled_reason'); }
    /** The checkout session the payment came from. Absent when the fee was sent with the payment itself.
     * @return ?string
     */
    public function getCheckoutSessionId(): ?string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** When Flint collected the fee with the payment. Absent unless status is succeeded. Format: date-time.
     * @return ?string
     */
    public function getCollectedAt(): ?string { return $this->get('collected_at'); }
    public function hasCollectedAt(): bool { return $this->has('collected_at'); }
    /** When the payment's create recorded the fee. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The installed merchant charged the fee, as on the install.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** The partner app that charged the fee.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The install whose partner app token created the payment.
     * @return string
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id.
     * @return string
     */
    public function getPlatformFeeId(): string { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** The fee returned to the installed merchant so far, including opted-in payment refunds and returns of the whole application fee. A failed refund reverses its share of this total. 0 when nothing has been returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** The fee the request asked for. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRequestedAmountMoney(): MoneyValue { return $this->get('requested_amount_money'); }
    public function hasRequestedAmountMoney(): bool { return $this->has('requested_amount_money'); }
    /** When the held share is due to return to your available balance. Absent until the fee posts, and when nothing was held. Setting it sends no event. Format: date-time.
     * @return ?string
     */
    public function getReserveAvailableAt(): ?string { return $this->get('reserve_available_at'); }
    public function hasReserveAvailableAt(): bool { return $this->has('reserve_available_at'); }
    /** The share of the fee Flint held in your reserve when it posted the fee to your ledger. Absent until then. A snapshot: loss coverage draws on the reserve as a whole, so read PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getReserveHoldMoney(): ?MoneyValue { return $this->get('reserve_hold_money'); }
    public function hasReserveHoldMoney(): bool { return $this->has('reserve_hold_money'); }
    /** Where the fee stands. canceled is final. Value enum: "pending", "succeeded", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the fee last changed. Format: date-time.
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
