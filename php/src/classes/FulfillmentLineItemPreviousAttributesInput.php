<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null|null $bundle_component_id
 * @property-read list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $modifiers
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read int|null $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentLineItemPreviousAttributesInput extends Model {
    /** @param array{'bundle_component_id'?: string|null|null, 'modifiers'?: list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'order_id'?: string|null, 'order_line_item_id'?: string|null, 'quantity'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentLineItemPreviousAttributesInput')); }
    /** Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. anyOf[1] (Value): string or null. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): mixed { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Modifier selections snapshotted from the order line for fulfillment. anyOf[1] (Value): Array of {@see OrderLineItemModifierPreviousAttributesInput}. Modifier selections snapshotted from the order line for fulfillment. anyOf[1][] (Value): {@see OrderLineItemModifierPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): mixed { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Order that owns the referenced line item. anyOf[1] (Value): string. Order that owns the referenced line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Order line whose quantity is allocated to the fulfillment. anyOf[1] (Value): string. Order line whose quantity is allocated to the fulfillment. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): mixed { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
