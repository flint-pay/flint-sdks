<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read string $gift_card_id
 * @property-read array{'order_revision': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersRemoveGiftCardInput extends Model {
    /** @param array{'order_id': string, 'X-Request-Id'?: string, 'Idempotency-Key'?: string, 'gift_card_id': string, 'body': array{'order_revision': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersRemoveGiftCardInput')); }
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
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return array{'order_revision': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
