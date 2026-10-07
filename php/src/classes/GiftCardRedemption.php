<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $capture_mode
 * @property-read MoneyValue $captured_money
 * @property-read string $created_at
 * @property-read string $expires_at
 * @property-read string $external_reference_id
 * @property-read string $gift_card_id
 * @property-read string $gift_card_redemption_id
 * @property-read string $idempotency_key
 * @property-read string|null $order_id
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $remaining_refundable_money
 * @property-read MoneyValue $requested_money
 * @property-read MoneyValue $reserved_money
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardRedemption extends Model {
    /** @param array{'capture_mode': string, 'captured_money': mixed, 'created_at': string, 'expires_at': string, 'external_reference_id': string, 'gift_card_id': string, 'gift_card_redemption_id': string, 'idempotency_key': string, 'order_id': string|null, 'refunded_money': mixed, 'remaining_refundable_money': mixed, 'requested_money': mixed, 'reserved_money': mixed, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemption')); }
    /** @return string
     * @throws SdkError When capture_mode is omitted; use hasCaptureMode() or valueOrDefault().
     */
    public function getCaptureMode(): string { return $this->get('capture_mode'); }
    public function hasCaptureMode(): bool { return $this->has('capture_mode'); }
    /** @return MoneyValue
     * @throws SdkError When captured_money is omitted; use hasCapturedMoney() or valueOrDefault().
     */
    public function getCapturedMoney(): MoneyValue { return $this->get('captured_money'); }
    public function hasCapturedMoney(): bool { return $this->has('captured_money'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return string
     * @throws SdkError When gift_card_redemption_id is omitted; use hasGiftCardRedemptionId() or valueOrDefault().
     */
    public function getGiftCardRedemptionId(): string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return MoneyValue
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return MoneyValue
     * @throws SdkError When remaining_refundable_money is omitted; use hasRemainingRefundableMoney() or valueOrDefault().
     */
    public function getRemainingRefundableMoney(): MoneyValue { return $this->get('remaining_refundable_money'); }
    public function hasRemainingRefundableMoney(): bool { return $this->has('remaining_refundable_money'); }
    /** @return MoneyValue
     * @throws SdkError When requested_money is omitted; use hasRequestedMoney() or valueOrDefault().
     */
    public function getRequestedMoney(): MoneyValue { return $this->get('requested_money'); }
    public function hasRequestedMoney(): bool { return $this->has('requested_money'); }
    /** @return MoneyValue
     * @throws SdkError When reserved_money is omitted; use hasReservedMoney() or valueOrDefault().
     */
    public function getReservedMoney(): MoneyValue { return $this->get('reserved_money'); }
    public function hasReservedMoney(): bool { return $this->has('reserved_money'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
