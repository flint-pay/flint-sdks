<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read array{'gift_card_code': string, 'order_revision': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersApplyGiftCardInput extends Model {
    /** @param array{'order_id': string, 'X-Request-Id'?: string, 'Idempotency-Key'?: string, 'Flint-Gift-Card-Challenge'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'gift_card_code': string, 'order_revision': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersApplyGiftCardInput')); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When Flint-Gift-Card-Challenge is omitted; use hasFlintGiftCardChallenge() or valueOrDefault().
     */
    public function getFlintGiftCardChallenge(): string { return $this->get('Flint-Gift-Card-Challenge'); }
    public function hasFlintGiftCardChallenge(): bool { return $this->has('Flint-Gift-Card-Challenge'); }
    /** @return string
     * @throws SdkError When X-Checkout-Session-ID is omitted; use hasXCheckoutSessionId() or valueOrDefault().
     */
    public function getXCheckoutSessionId(): string { return $this->get('X-Checkout-Session-ID'); }
    public function hasXCheckoutSessionId(): bool { return $this->has('X-Checkout-Session-ID'); }
    /** @return string
     * @throws SdkError When X-Checkout-Session-Secret is omitted; use hasXCheckoutSessionSecret() or valueOrDefault().
     */
    public function getXCheckoutSessionSecret(): string { return $this->get('X-Checkout-Session-Secret'); }
    public function hasXCheckoutSessionSecret(): bool { return $this->has('X-Checkout-Session-Secret'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'gift_card_code': string, 'order_revision': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
