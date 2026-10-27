<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'buyer_note'?: string, 'customer_id'?: string, 'delivery_destination'?: mixed, 'discounts'?: list<mixed>, 'external_reference_id'?: string, 'internal_note'?: string, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'metadata'?: array<array-key, string>|\stdClass, 'requested_tip'?: mixed, 'tax'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'buyer_note'?: string, 'customer_id'?: string, 'delivery_destination'?: mixed, 'discounts'?: list<mixed>, 'external_reference_id'?: string, 'internal_note'?: string, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'metadata'?: array<array-key, string>|\stdClass, 'requested_tip'?: mixed, 'tax'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create order.
     * @return array{'buyer_note'?: string, 'customer_id'?: string, 'delivery_destination'?: mixed, 'discounts'?: list<mixed>, 'external_reference_id'?: string, 'internal_note'?: string, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'metadata'?: array<array-key, string>|\stdClass, 'requested_tip'?: mixed, 'tax'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
