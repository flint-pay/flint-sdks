<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_component_id
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read int|null $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryQuoteLineItemResourcePreviousAttributesInput extends Model {
    /** @param array{'bundle_component_id'?: string|null, 'order_id'?: string|null, 'order_line_item_id'?: string|null, 'quantity'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteLineItemResourcePreviousAttributesInput')); }
    /** ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. anyOf[1] (Value): string. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): mixed { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. anyOf[1] (Value): string. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item. anyOf[1] (Value): string. ID of the order line item. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): mixed { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
