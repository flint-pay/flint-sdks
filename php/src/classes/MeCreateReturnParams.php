<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<array{'buyer_note'?: string, 'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id': string}|object> $line_items
 * @property-read string $order_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateReturnParams extends Model {
    /** @param array{'line_items': list<array{'buyer_note'?: string, 'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id': string}|object>, 'order_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnParams')); }
    /** minItems: 1. maxItems: 100. [] (Value): {@see ReturnLineItemRequestInput}. An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants.
     * @return list<array{'buyer_note'?: string, 'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id': string}|object>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** minLength: 1. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
}
