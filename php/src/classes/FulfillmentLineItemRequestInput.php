<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_component_id
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentLineItemRequestInput extends Model {
    /** @param array{'bundle_component_id': string|null, 'order_line_item_id': string, 'quantity': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentLineItemRequestInput')); }
    /** Bundle component to fulfill, from the order line's bundle_components. `null` when the line isn't a bundle component. A bundle line requires its component ID. minLength: 1. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     * @return string|null
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): string|null { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Order line whose quantity is allocated. minLength: 1. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
