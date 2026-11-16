<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_component_id
 * @property-read string|null $delivery_configuration_reason
 * @property-read string|null $delivery_configuration_status
 * @property-read string|null $delivery_profile_id
 * @property-read int|null $position
 * @property-read string|null $product_id
 * @property-read int|null $quantity
 * @property-read mixed $variant
 * @property-read string|null $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class BundleComponentPreviousAttributes extends Model {
    /** @param array{'bundle_component_id'?: mixed, 'delivery_configuration_reason'?: mixed, 'delivery_configuration_status'?: mixed, 'delivery_profile_id'?: mixed, 'position'?: mixed, 'product_id'?: mixed, 'quantity'?: mixed, 'variant'?: mixed, 'variant_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleComponentPreviousAttributes')); }
    /** Stable identifier of this component within its bundle. anyOf[1] (Value): string. Stable identifier of this component within its bundle. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleComponentId(): string|null { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Reason the component's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive". anyOf[1] (Value): string. Reason the component's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryConfigurationReason(): string|null { return $this->get('delivery_configuration_reason'); }
    public function hasDeliveryConfigurationReason(): bool { return $this->has('delivery_configuration_reason'); }
    /** Whether the component's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable". anyOf[1] (Value): string. Whether the component's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryConfigurationStatus(): string|null { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Delivery profile used for this component, including any component override. anyOf[1] (Value): string. Delivery profile used for this component, including any component override. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryProfileId(): string|null { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Display order among the bundle's components, starting at zero. anyOf[1] (Value): integer. Display order among the bundle's components, starting at zero. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPosition(): int|null { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Identifier of the product the component's variant belongs to. anyOf[1] (Value): string. Identifier of the product the component's variant belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Summary of the component's variant and its selected options. anyOf[1] (Value): {@see BundleComponentVariantSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getVariant(): mixed { return $this->get('variant'); }
    public function hasVariant(): bool { return $this->has('variant'); }
    /** Identifier of the product variant included in the bundle. anyOf[1] (Value): string. Identifier of the product variant included in the bundle. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
