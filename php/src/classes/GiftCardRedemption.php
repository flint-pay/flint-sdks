<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $capture_mode
 * @property-read MoneyValue $captured_money
 * @property-read string $created_at
 * @property-read string|null $expires_at
 * @property-read string $gift_card_id
 * @property-read string $gift_card_redemption_id
 * @property-read string|null $idempotency_key
 * @property-read string|null $order_id
 * @property-read string|null $order_payment_attempt_id
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $remaining_refundable_money
 * @property-read MoneyValue $requested_money
 * @property-read MoneyValue $reserved_money
 * @property-read string|null $sale_reference
 * @property-read string $source_type
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardRedemption extends Model {
    /** @param array{'capture_mode': string, 'captured_money': mixed, 'created_at': string, 'expires_at': string|null, 'gift_card_id': string, 'gift_card_redemption_id': string, 'idempotency_key': string|null, 'order_id': string|null, 'order_payment_attempt_id': string|null, 'refunded_money': mixed, 'remaining_refundable_money': mixed, 'requested_money': mixed, 'reserved_money': mixed, 'sale_reference': string|null, 'source_type': string, 'status': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemption')); }
    /** Value enum: "automatic", "manual".
     * @return string
     */
    public function getCaptureMode(): string { return $this->get('capture_mode'); }
    public function hasCaptureMode(): bool { return $this->has('capture_mode'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCapturedMoney(): MoneyValue { return $this->get('captured_money'); }
    public function hasCapturedMoney(): bool { return $this->has('captured_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When an uncaptured manual reservation expires. null for automatic capture, which posts immediately. Format: date-time.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** gift_card_id
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** gift_card_redemption_id
     * @return string
     */
    public function getGiftCardRedemptionId(): string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** order_id
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The order payment attempt the redemption belongs to. Set for source_type flint_order; null for external.
     * @return string|null
     */
    public function getOrderPaymentAttemptId(): string|null { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /** Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRemainingRefundableMoney(): MoneyValue { return $this->get('remaining_refundable_money'); }
    public function hasRemainingRefundableMoney(): bool { return $this->has('remaining_refundable_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRequestedMoney(): MoneyValue { return $this->get('requested_money'); }
    public function hasRequestedMoney(): bool { return $this->has('requested_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReservedMoney(): MoneyValue { return $this->get('reserved_money'); }
    public function hasReservedMoney(): bool { return $this->has('reserved_money'); }
    /** Your reference for the sale the redemption pays for. Set for source_type external; null for flint_order. maxLength: 255.
     * @return string|null
     */
    public function getSaleReference(): string|null { return $this->get('sale_reference'); }
    public function hasSaleReference(): bool { return $this->has('sale_reference'); }
    /** Value enum: "external", "flint_order".
     * @return string
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Value enum: "reserved", "captured", "canceled", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
