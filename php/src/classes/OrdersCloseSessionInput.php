<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read array{'collected_money_behavior'?: string, 'expected_version'?: string, 'reason_message'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersCloseSessionInput extends Model {
    /** @param array{'order_id': string, 'Idempotency-Key'?: string, 'body'?: array{'collected_money_behavior'?: string, 'expected_version'?: string, 'reason_message'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersCloseSessionInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Close order.
     * @return array{'collected_money_behavior'?: string, 'expected_version'?: string, 'reason_message'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
