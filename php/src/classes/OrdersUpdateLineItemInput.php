<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read array{'description'?: string|null, 'expected_version'?: int, 'gift_card_face_value_money'?: array{'amount': string, 'currency': string}|object, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<array{'metadata'?: mixed, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object|array{'metadata'?: mixed, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object>, 'name'?: string, 'quantity'?: int, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: mixed, 'unit_price_money'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersUpdateLineItemInput extends Model {
    /** @param array{'order_id': string, 'order_line_item_id': string, 'body': array{'description'?: string|null, 'expected_version'?: int, 'gift_card_face_value_money'?: array{'amount': string, 'currency': string}|object, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<array{'metadata'?: mixed, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object|array{'metadata'?: mixed, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object>, 'name'?: string, 'quantity'?: int, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: mixed, 'unit_price_money'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersUpdateLineItemInput')); }
    /** Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Flint order line item ID. Example: "li_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The request body for: Update line item.
     * @return array{'description'?: string|null, 'expected_version'?: int, 'gift_card_face_value_money'?: array{'amount': string, 'currency': string}|object, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<array{'metadata'?: mixed, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object|array{'metadata'?: mixed, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object>, 'name'?: string, 'quantity'?: int, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: mixed, 'unit_price_money'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
