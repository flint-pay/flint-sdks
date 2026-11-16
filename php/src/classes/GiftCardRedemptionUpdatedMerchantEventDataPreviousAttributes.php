<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $capture_mode
 * @property-read mixed $captured_money
 * @property-read string|null $created_at
 * @property-read mixed $expires_at
 * @property-read string|null $gift_card_id
 * @property-read string|null $gift_card_redemption_id
 * @property-read mixed $idempotency_key
 * @property-read mixed $order_id
 * @property-read mixed $order_payment_attempt_id
 * @property-read mixed $refunded_money
 * @property-read mixed $remaining_refundable_money
 * @property-read mixed $requested_money
 * @property-read mixed $reserved_money
 * @property-read mixed $sale_reference
 * @property-read string|null $source_type
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'capture_mode'?: mixed, 'captured_money'?: mixed, 'created_at'?: mixed, 'expires_at'?: mixed, 'gift_card_id'?: mixed, 'gift_card_redemption_id'?: mixed, 'idempotency_key'?: mixed, 'order_id'?: mixed, 'order_payment_attempt_id'?: mixed, 'refunded_money'?: mixed, 'remaining_refundable_money'?: mixed, 'requested_money'?: mixed, 'reserved_money'?: mixed, 'sale_reference'?: mixed, 'source_type'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes')); }
    /** Whether the redemption spends the value now or reserves it to capture later. Value enum: "automatic", "manual". anyOf[1] (Value): string. Whether the redemption spends the value now or reserves it to capture later. Value enum: "automatic", "manual". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCaptureMode(): string|null { return $this->get('capture_mode'); }
    public function hasCaptureMode(): bool { return $this->has('capture_mode'); }
    /** The value captured from the card so far. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getCapturedMoney(): mixed { return $this->get('captured_money'); }
    public function hasCapturedMoney(): bool { return $this->has('captured_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. anyOf[1] (Value): string or null. When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. Format: date-time. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getExpiresAt(): mixed { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** ID of the gift card the value is spent from. anyOf[1] (Value): string. ID of the gift card the value is spent from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardId(): string|null { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Unique identifier for this gift card redemption, prefixed `gcr_`. anyOf[1] (Value): string. Unique identifier for this gift card redemption, prefixed `gcr_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardRedemptionId(): string|null { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. anyOf[1] (Value): string or null. Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getIdempotencyKey(): mixed { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. anyOf[1] (Value): string or null. ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. anyOf[1] (Value): string or null. The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getOrderPaymentAttemptId(): mixed { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /** Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRemainingRefundableMoney(): mixed { return $this->get('remaining_refundable_money'); }
    public function hasRemainingRefundableMoney(): bool { return $this->has('remaining_refundable_money'); }
    /** The amount requested when the redemption was created. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRequestedMoney(): mixed { return $this->get('requested_money'); }
    public function hasRequestedMoney(): bool { return $this->has('requested_money'); }
    /** The value held on the card for this redemption while it is reserved. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReservedMoney(): mixed { return $this->get('reserved_money'); }
    public function hasReservedMoney(): bool { return $this->has('reserved_money'); }
    /** Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. anyOf[1] (Value): string or null. Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. maxLength: 255. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSaleReference(): mixed { return $this->get('sale_reference'); }
    public function hasSaleReference(): bool { return $this->has('sale_reference'); }
    /** What the redemption pays for: a sale you record, or a Flint order's payment. Value enum: "external", "flint_order". anyOf[1] (Value): string. What the redemption pays for: a sale you record, or a Flint order's payment. Value enum: "external", "flint_order". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSourceType(): string|null { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Where the redemption is in its lifecycle. Value enum: "reserved", "succeeded", "canceled", "expired". anyOf[1] (Value): string. Where the redemption is in its lifecycle. Value enum: "reserved", "succeeded", "canceled", "expired". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. [] enum: "capture", "cancel". anyOf[1] (Value): Array of string. Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. [] enum: "capture", "cancel". anyOf[1][] (Value): string.  Value enum: "capture", "cancel". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
