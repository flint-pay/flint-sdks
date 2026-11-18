<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $bundle_component_id
 * @property-read string $order_line_item_id
 * @property-read string $package_item_id
 * @property-read int $quantity
 * Presence-aware response; omitted optional fields return null. */
final class BuyerPackageItem extends Model {
    /** @param array{'bundle_component_id'?: string, 'order_line_item_id': string, 'package_item_id': string, 'quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPackageItem')); }
    /** Bundle component packed in this package. Look it up in the order line's bundle_components.
     * @return ?string
     */
    public function getBundleComponentId(): ?string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Order line packed in this package.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Flint ID for this package allocation.
     * @return string
     */
    public function getPackageItemId(): string { return $this->get('package_item_id'); }
    public function hasPackageItemId(): bool { return $this->has('package_item_id'); }
    /** Quantity in order line units, or in component units when bundle_component_id is present. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
