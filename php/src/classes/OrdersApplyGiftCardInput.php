<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read array{'code': string, 'expected_version'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersApplyGiftCardInput extends Model {
    /** @param array{'order_id': string, 'Flint-Gift-Card-Challenge'?: string, 'Idempotency-Key'?: string, 'body': array{'code': string, 'expected_version'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersApplyGiftCardInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When Flint-Gift-Card-Challenge is omitted; use hasFlintGiftCardChallenge() or valueOrDefault().
     */
    public function getFlintGiftCardChallenge(): string { return $this->get('Flint-Gift-Card-Challenge'); }
    public function hasFlintGiftCardChallenge(): bool { return $this->has('Flint-Gift-Card-Challenge'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Apply a gift card to an order.
     * @return array{'code': string, 'expected_version'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
