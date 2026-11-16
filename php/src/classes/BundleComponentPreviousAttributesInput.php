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
 * @property-read BundleComponentVariantSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $variant
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BundleComponentPreviousAttributesInput extends Model {
    /** @param array{'bundle_component_id'?: string|null, 'delivery_configuration_reason'?: string|null, 'delivery_configuration_status'?: string|null, 'delivery_profile_id'?: string|null, 'position'?: int|null, 'product_id'?: string|null, 'quantity'?: int|null, 'variant'?: BundleComponentVariantSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'variant_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleComponentPreviousAttributesInput')); }
    /** Stable identifier of this component within its bundle. anyOf[1] (Value): string. Stable identifier of this component within its bundle. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): mixed { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Reason the component's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive". anyOf[1] (Value): string. Reason the component's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_configuration_reason is omitted; use hasDeliveryConfigurationReason() or valueOrDefault().
     */
    public function getDeliveryConfigurationReason(): mixed { return $this->get('delivery_configuration_reason'); }
    public function hasDeliveryConfigurationReason(): bool { return $this->has('delivery_configuration_reason'); }
    /** Whether the component's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable". anyOf[1] (Value): string. Whether the component's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_configuration_status is omitted; use hasDeliveryConfigurationStatus() or valueOrDefault().
     */
    public function getDeliveryConfigurationStatus(): mixed { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Delivery profile used for this component, including any component override. anyOf[1] (Value): string. Delivery profile used for this component, including any component override. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): mixed { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Display order among the bundle's components, starting at zero. anyOf[1] (Value): integer. Display order among the bundle's components, starting at zero. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): mixed { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Identifier of the product the component's variant belongs to. anyOf[1] (Value): string. Identifier of the product the component's variant belongs to. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Summary of the component's variant and its selected options. anyOf[1] (Value): {@see BundleComponentVariantSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return BundleComponentVariantSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When variant is omitted; use hasVariant() or valueOrDefault().
     */
    public function getVariant(): mixed { return $this->get('variant'); }
    public function hasVariant(): bool { return $this->has('variant'); }
    /** Identifier of the product variant included in the bundle. anyOf[1] (Value): string. Identifier of the product variant included in the bundle. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
