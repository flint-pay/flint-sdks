<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $bundle_components_updated
 * @property-read string $delivery_profile_id
 * @property-read int $product_variants_updated
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileAssignment extends Model {
    /** @param array{'bundle_components_updated': int, 'delivery_profile_id': string, 'product_variants_updated': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileAssignment')); }
    /** Number of previously unconfigured catalog records updated. Format: int64. minimum: 0.
     * @return int
     */
    public function getBundleComponentsUpdated(): int { return $this->get('bundle_components_updated'); }
    public function hasBundleComponentsUpdated(): bool { return $this->has('bundle_components_updated'); }
    /** Delivery profile assigned to each updated catalog item.
     * @return string
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Number of previously unconfigured catalog records updated. Format: int64. minimum: 0.
     * @return int
     */
    public function getProductVariantsUpdated(): int { return $this->get('product_variants_updated'); }
    public function hasProductVariantsUpdated(): bool { return $this->has('product_variants_updated'); }
}
