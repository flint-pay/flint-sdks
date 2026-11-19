<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_component_id
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string $package_id
 * @property-read string $package_item_id
 * @property-read int $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerPackageItemInput extends Model {
    /** @param array{'bundle_component_id'?: string, 'order_id': string, 'order_line_item_id': string, 'package_id': string, 'package_item_id': string, 'quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPackageItemInput')); }
    /** Bundle component packed in this package. Look it up in the order line's bundle_components. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     * @return string
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Order containing the allocated line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Order line packed in this package. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Package containing this item. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Flint ID for this package allocation. Example: "pki_01KEZF7C00CEFTYV5RD7XVYQ7B".
     * @return string
     * @throws SdkError When package_item_id is omitted; use hasPackageItemId() or valueOrDefault().
     */
    public function getPackageItemId(): string { return $this->get('package_item_id'); }
    public function hasPackageItemId(): bool { return $this->has('package_item_id'); }
    /** Quantity in order line units, or in component units when bundle_component_id is present; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
