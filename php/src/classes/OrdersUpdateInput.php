<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read array{'buyer_note'?: string|null, 'customer_id'?: string, 'delivery_destination'?: array{'address': mixed, 'recipient'?: mixed}|object|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'inventory_routing_source'?: mixed, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'requested_tip'?: array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent': int|float}|object|null, 'tax'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersUpdateInput extends Model {
    /** @param array{'order_id': string, 'Idempotency-Key'?: string, 'body': array{'buyer_note'?: string|null, 'customer_id'?: string, 'delivery_destination'?: array{'address': mixed, 'recipient'?: mixed}|object|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'inventory_routing_source'?: mixed, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'requested_tip'?: array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent': int|float}|object|null, 'tax'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersUpdateInput')); }
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
    /** Shape $ (Value): object. The request body for: Update order. minProperties: 1.
     * @return array{'buyer_note'?: string|null, 'customer_id'?: string, 'delivery_destination'?: array{'address': mixed, 'recipient'?: mixed}|object|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'inventory_routing_source'?: mixed, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'requested_tip'?: array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent': int|float}|object|null, 'tax'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
