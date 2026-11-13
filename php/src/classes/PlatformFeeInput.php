<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $canceled_reason
 * @property-read string $checkout_session_id
 * @property-read string|\DateTimeInterface $collected_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $merchant_id
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $payment_intent_id
 * @property-read string $platform_fee_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $requested_amount_money
 * @property-read string|\DateTimeInterface $reserve_available_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $reserve_hold_money
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeeInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'canceled_reason'?: string, 'checkout_session_id'?: string, 'collected_at'?: string|\DateTimeInterface, 'created_at': string|\DateTimeInterface, 'merchant_id': string, 'partner_app_id': string, 'partner_app_install_id': string, 'payment_intent_id': string, 'platform_fee_id': string, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reserve_available_at'?: string|\DateTimeInterface, 'reserve_hold_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeInput')); }
    /** The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Why Flint collected no fee. Present only when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "platform_capability_inactive", "uncollectible".
     * @return string
     * @throws SdkError When canceled_reason is omitted; use hasCanceledReason() or valueOrDefault().
     */
    public function getCanceledReason(): string { return $this->get('canceled_reason'); }
    public function hasCanceledReason(): bool { return $this->has('canceled_reason'); }
    /** The checkout session the payment came from. Absent when the fee was sent with the payment itself. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** When Flint collected the fee with the payment. Absent unless status is succeeded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When collected_at is omitted; use hasCollectedAt() or valueOrDefault().
     */
    public function getCollectedAt(): string|\DateTimeInterface { return $this->get('collected_at'); }
    public function hasCollectedAt(): bool { return $this->has('collected_at'); }
    /** When the payment's create recorded the fee. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The installed merchant charged the fee, as on the install. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** The partner app that charged the fee. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The install whose partner app token created the payment. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. Example: "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     * @return string
     * @throws SdkError When platform_fee_id is omitted; use hasPlatformFeeId() or valueOrDefault().
     */
    public function getPlatformFeeId(): string { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** The fee returned to the installed merchant so far, including opted-in payment refunds and returns of the whole application fee. A failed refund reverses its share of this total. 0 when nothing has been returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** The fee the request asked for. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requested_amount_money is omitted; use hasRequestedAmountMoney() or valueOrDefault().
     */
    public function getRequestedAmountMoney(): mixed { return $this->get('requested_amount_money'); }
    public function hasRequestedAmountMoney(): bool { return $this->has('requested_amount_money'); }
    /** When the held share is due to return to your available balance. Absent until the fee posts, and when nothing was held. Setting it sends no event. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When reserve_available_at is omitted; use hasReserveAvailableAt() or valueOrDefault().
     */
    public function getReserveAvailableAt(): string|\DateTimeInterface { return $this->get('reserve_available_at'); }
    public function hasReserveAvailableAt(): bool { return $this->has('reserve_available_at'); }
    /** The share of the fee Flint held in your reserve when it posted the fee to your ledger. Absent until then. A snapshot: loss coverage draws on the reserve as a whole, so read PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reserve_hold_money is omitted; use hasReserveHoldMoney() or valueOrDefault().
     */
    public function getReserveHoldMoney(): mixed { return $this->get('reserve_hold_money'); }
    public function hasReserveHoldMoney(): bool { return $this->has('reserve_hold_money'); }
    /** Where the fee stands. canceled is final. Value enum: "pending", "succeeded", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the fee last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
