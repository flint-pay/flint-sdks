<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_component_id
 * @property-read ?string $delivery_configuration_reason
 * @property-read string $delivery_configuration_status
 * @property-read ?string $delivery_profile_id
 * @property-read int $position
 * @property-read ?string $product_id
 * @property-read int $quantity
 * @property-read ?ExpandedSubscriptionPlanSummaryLineItemsItemCustomBundleComponentsItemVariant $variant
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedSubscriptionPlanSummaryLineItemsItemCustomBundleComponentsItem extends Model {
    /** @param array{'bundle_component_id': string, 'delivery_configuration_reason'?: string, 'delivery_configuration_status': string, 'delivery_profile_id'?: string, 'position': int, 'product_id'?: string, 'quantity': int, 'variant'?: mixed, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionPlanSummaryLineItemsItemCustomBundleComponentsItem')); }
    /** Shape $ (Value): string. Stable identifier of this component within its bundle.
     * @return string
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Shape $ (Value): string. Reason the component's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive".
     * @return ?string
     */
    public function getDeliveryConfigurationReason(): ?string { return $this->get('delivery_configuration_reason'); }
    public function hasDeliveryConfigurationReason(): bool { return $this->has('delivery_configuration_reason'); }
    /** Shape $ (Value): string. Whether the component's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable".
     * @return string
     */
    public function getDeliveryConfigurationStatus(): string { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Shape $ (Value): string. Delivery profile used for this component, including any component override.
     * @return ?string
     */
    public function getDeliveryProfileId(): ?string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Shape $ (Value): integer. Display order among the bundle's components, starting at zero. Format: int32.
     * @return int
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Shape $ (Value): string. Identifier of the product the component's variant belongs to.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemCustomBundleComponentsItemVariant}. Summary of the component's variant and its selected options. A summary of the variant that fills a bundle component: its names, SKU, selected options, and whether it is available for sale.
     * @return ?ExpandedSubscriptionPlanSummaryLineItemsItemCustomBundleComponentsItemVariant
     */
    public function getVariant(): ?ExpandedSubscriptionPlanSummaryLineItemsItemCustomBundleComponentsItemVariant { return $this->get('variant'); }
    public function hasVariant(): bool { return $this->has('variant'); }
    /** Shape $ (Value): string. Identifier of the product variant included in the bundle.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
