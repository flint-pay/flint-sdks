<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $order_id
 * @property-read array{'buyer_note'?: string|null, 'customer_id'?: string, 'delivery_destination'?: array{'address': mixed, 'recipient'?: mixed}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'inventory_routing_source'?: array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string}|object, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'requested_tip'?: array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent': int|float}|object|null, 'tax'?: array{'calculation'?: mixed, 'charge_calculations'?: list<array{'calculation': mixed, 'order_charge_id': string}|object>, 'enabled'?: bool, 'line_item_calculations'?: list<array{'calculation': mixed, 'order_line_item_id': string}|object>, 'location'?: mixed}|object}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersUpdateInput extends Model {
    /** @param array{'order_id': string, 'body': array{'buyer_note'?: string|null, 'customer_id'?: string, 'delivery_destination'?: array{'address': mixed, 'recipient'?: mixed}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'inventory_routing_source'?: array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string}|object, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'requested_tip'?: array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent': int|float}|object|null, 'tax'?: array{'calculation'?: mixed, 'charge_calculations'?: list<array{'calculation': mixed, 'order_charge_id': string}|object>, 'enabled'?: bool, 'line_item_calculations'?: list<array{'calculation': mixed, 'order_line_item_id': string}|object>, 'location'?: mixed}|object}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersUpdateInput')); }
    /** Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The request body for: Update order. minProperties: 1.
     * @return array{'buyer_note'?: string|null, 'customer_id'?: string, 'delivery_destination'?: array{'address': mixed, 'recipient'?: mixed}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'inventory_routing_source'?: array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string}|object, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'requested_tip'?: array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: mixed, 'name'?: string, 'percent': int|float}|object|null, 'tax'?: array{'calculation'?: mixed, 'charge_calculations'?: list<array{'calculation': mixed, 'order_charge_id': string}|object>, 'enabled'?: bool, 'line_item_calculations'?: list<array{'calculation': mixed, 'order_line_item_id': string}|object>, 'location'?: mixed}|object}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
