<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_component_id
 * @property-read string|null $delivery_profile_id
 * @property-read int $position
 * @property-read int $quantity
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateBundleComponentRequestInput extends Model {
    /** @param array{'bundle_component_id'?: string, 'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateBundleComponentRequestInput')); }
    /** Shape $ (Value): string. Identifier of an existing component to retain. Omit it to add a new component. minLength: 1. pattern: ^bunc_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Shape $ (Value): string or null. Component delivery profile override. Omit to inherit the variant's profile. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string|null { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Shape $ (Value): integer. Display order among the bundle's components, starting at zero. Format: int32. minimum: 0.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. Default: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string. Identifier of the product variant included in the bundle. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
