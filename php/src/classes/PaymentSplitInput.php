<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $canceled_reason
 * @property-read string $collecting_merchant_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read string $failure_reason
 * @property-read string|\DateTimeInterface|null $funds_available_at
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $payment_intent_id
 * @property-read string $payment_split_id
 * @property-read string $pending_reason
 * @property-read list<PaymentSplitReversalInput|array<array-key, mixed>|\stdClass> $reversals
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $reversed_money
 * @property-read string $seller_merchant_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $shortfall_money
 * @property-read string $status
 * @property-read string|\DateTimeInterface $succeeded_at
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSplitInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'canceled_reason'?: string, 'collecting_merchant_id': string, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'funds_available_at': string|\DateTimeInterface|null, 'partner_app_id': string, 'partner_app_install_id': string, 'payment_intent_id': string, 'payment_split_id': string, 'pending_reason'?: string, 'reversals': list<PaymentSplitReversalInput|array<array-key, mixed>|\stdClass>, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'seller_merchant_id': string, 'shortfall_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitInput')); }
    /** The admitted amount, or its final amount set at capture. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Present when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "fully_reversed".
     * @return string
     * @throws SdkError When canceled_reason is omitted; use hasCanceledReason() or valueOrDefault().
     */
    public function getCanceledReason(): string { return $this->get('canceled_reason'); }
    public function hasCanceledReason(): bool { return $this->has('canceled_reason'); }
    /** The merchant of record that collected the payment. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When collecting_merchant_id is omitted; use hasCollectingMerchantId() or valueOrDefault().
     */
    public function getCollectingMerchantId(): string { return $this->get('collecting_merchant_id'); }
    public function hasCollectingMerchantId(): bool { return $this->has('collecting_merchant_id'); }
    /** When the payment's create recorded the split. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The collecting merchant's description, shown to the seller.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Present when status is failed. Can gain values; unknown reasons use split_failed. Value enum: "seller_cannot_receive", "split_failed".
     * @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When funds_available_at is omitted; use hasFundsAvailableAt() or valueOrDefault().
     */
    public function getFundsAvailableAt(): string|\DateTimeInterface|null { return $this->get('funds_available_at'); }
    public function hasFundsAvailableAt(): bool { return $this->has('funds_available_at'); }
    /** The collecting merchant's partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The seller's install of the app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The collecting merchant's payment. Sellers can read the split, but not the payment. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Unique identifier for the split. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8".
     * @return string
     * @throws SdkError When payment_split_id is omitted; use hasPaymentSplitId() or valueOrDefault().
     */
    public function getPaymentSplitId(): string { return $this->get('payment_split_id'); }
    public function hasPaymentSplitId(): bool { return $this->has('payment_split_id'); }
    /** Present when status is pending. Can gain values. Value enum: "awaiting_payment", "dispute_open", "reversals_pending", "awaiting_funds".
     * @return string
     * @throws SdkError When pending_reason is omitted; use hasPendingReason() or valueOrDefault().
     */
    public function getPendingReason(): string { return $this->get('pending_reason'); }
    public function hasPendingReason(): bool { return $this->has('pending_reason'); }
    /** Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. [] (Value): {@see PaymentSplitReversalInput}. A read-only nested child of a payment split, created by Flint for a refund or dispute. Embedded whole in PaymentSplit.reversals; no routes of its own.
     * @return list<PaymentSplitReversalInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When reversals is omitted; use hasReversals() or valueOrDefault().
     */
    public function getReversals(): array { return $this->get('reversals'); }
    public function hasReversals(): bool { return $this->has('reversals'); }
    /** Reversals' total amount minus their reinstated amounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reversed_money is omitted; use hasReversedMoney() or valueOrDefault().
     */
    public function getReversedMoney(): mixed { return $this->get('reversed_money'); }
    public function hasReversedMoney(): bool { return $this->has('reversed_money'); }
    /** The merchant receiving the split. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When seller_merchant_id is omitted; use hasSellerMerchantId() or valueOrDefault().
     */
    public function getSellerMerchantId(): string { return $this->get('seller_merchant_id'); }
    public function hasSellerMerchantId(): bool { return $this->has('seller_merchant_id'); }
    /** Reversed funds the collecting merchant covered for the seller, less reinstatements. The seller's net is amount_money minus reversed_money plus shortfall_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shortfall_money is omitted; use hasShortfallMoney() or valueOrDefault().
     */
    public function getShortfallMoney(): mixed { return $this->get('shortfall_money'); }
    public function hasShortfallMoney(): bool { return $this->has('shortfall_money'); }
    /** The split lifecycle status. Value enum: "pending", "processing", "succeeded", "failed", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the split reached the seller's balance. Present when succeeded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When succeeded_at is omitted; use hasSucceededAt() or valueOrDefault().
     */
    public function getSucceededAt(): string|\DateTimeInterface { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** When the split last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
