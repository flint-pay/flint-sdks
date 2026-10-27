<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $capture_mode
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $captured_money
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string $gift_card_id
 * @property-read string $gift_card_redemption_id
 * @property-read string|null $idempotency_key
 * @property-read string|null $order_id
 * @property-read string|null $order_payment_attempt_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $remaining_refundable_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $requested_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $reserved_money
 * @property-read string|null $sale_reference
 * @property-read string $source_type
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardRedemptionInput extends Model {
    /** @param array{'capture_mode': string, 'captured_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'gift_card_id': string, 'gift_card_redemption_id': string, 'idempotency_key': string|null, 'order_id': string|null, 'order_payment_attempt_id': string|null, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_refundable_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reserved_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'sale_reference': string|null, 'source_type': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemptionInput')); }
    /** Shape $ (Value): string.  Value enum: "automatic", "manual".
     * @return string
     * @throws SdkError When capture_mode is omitted; use hasCaptureMode() or valueOrDefault().
     */
    public function getCaptureMode(): string { return $this->get('capture_mode'); }
    public function hasCaptureMode(): bool { return $this->has('capture_mode'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When captured_money is omitted; use hasCapturedMoney() or valueOrDefault().
     */
    public function getCapturedMoney(): mixed { return $this->get('captured_money'); }
    public function hasCapturedMoney(): bool { return $this->has('captured_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string or null. When an uncaptured manual reservation expires. null for automatic capture, which posts immediately. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_redemption_id is omitted; use hasGiftCardRedemptionId() or valueOrDefault().
     */
    public function getGiftCardRedemptionId(): string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Shape $ (Value): string or null. Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent.
     * @return string|null
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string or null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string or null. The order payment attempt the redemption belongs to. Set for source_type flint_order; null for external.
     * @return string|null
     * @throws SdkError When order_payment_attempt_id is omitted; use hasOrderPaymentAttemptId() or valueOrDefault().
     */
    public function getOrderPaymentAttemptId(): string|null { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When remaining_refundable_money is omitted; use hasRemainingRefundableMoney() or valueOrDefault().
     */
    public function getRemainingRefundableMoney(): mixed { return $this->get('remaining_refundable_money'); }
    public function hasRemainingRefundableMoney(): bool { return $this->has('remaining_refundable_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requested_money is omitted; use hasRequestedMoney() or valueOrDefault().
     */
    public function getRequestedMoney(): mixed { return $this->get('requested_money'); }
    public function hasRequestedMoney(): bool { return $this->has('requested_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reserved_money is omitted; use hasReservedMoney() or valueOrDefault().
     */
    public function getReservedMoney(): mixed { return $this->get('reserved_money'); }
    public function hasReservedMoney(): bool { return $this->has('reserved_money'); }
    /** Shape $ (Value): string or null. Your reference for the sale the redemption pays for. Set for source_type external; null for flint_order. maxLength: 255.
     * @return string|null
     * @throws SdkError When sale_reference is omitted; use hasSaleReference() or valueOrDefault().
     */
    public function getSaleReference(): string|null { return $this->get('sale_reference'); }
    public function hasSaleReference(): bool { return $this->has('sale_reference'); }
    /** Shape $ (Value): string.  Value enum: "external", "flint_order".
     * @return string
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Shape $ (Value): string.  Value enum: "reserved", "captured", "canceled", "expired".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
