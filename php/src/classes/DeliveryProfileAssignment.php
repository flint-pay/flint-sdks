<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_components_updated
 * @property-read string $delivery_profile_id
 * @property-read string $product_variants_updated
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileAssignment extends Model {
    /** @param array{'bundle_components_updated': string, 'delivery_profile_id': string, 'product_variants_updated': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileAssignment')); }
    /** Shape $ (Value): integer string. Number of previously unconfigured catalog records updated. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     */
    public function getBundleComponentsUpdated(): string { return $this->get('bundle_components_updated'); }
    public function hasBundleComponentsUpdated(): bool { return $this->has('bundle_components_updated'); }
    /** Shape $ (Value): string. Delivery profile assigned to each updated catalog item.
     * @return string
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Shape $ (Value): integer string. Number of previously unconfigured catalog records updated. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     */
    public function getProductVariantsUpdated(): string { return $this->get('product_variants_updated'); }
    public function hasProductVariantsUpdated(): bool { return $this->has('product_variants_updated'); }
}
