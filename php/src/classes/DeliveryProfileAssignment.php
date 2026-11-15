<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $bundle_components_unconfigured
 * @property-read string $delivery_profile_id
 * @property-read int $product_variants_unconfigured
 * @property-read DeliveryProfileUnconfiguredAssignment $unconfigured_assignment
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileAssignment extends Model {
    /** @param array{'bundle_components_unconfigured': int, 'delivery_profile_id': string, 'product_variants_unconfigured': int, 'unconfigured_assignment': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileAssignment')); }
    /** Bundle components of physical products without a delivery profile when Flint accepted the request. Flint assigns the profile to each one that still has none when the assignment reaches it. Format: int64. minimum: 0.
     * @return int
     */
    public function getBundleComponentsUnconfigured(): int { return $this->get('bundle_components_unconfigured'); }
    public function hasBundleComponentsUnconfigured(): bool { return $this->has('bundle_components_unconfigured'); }
    /** Delivery profile Flint assigns to each unconfigured catalog item.
     * @return string
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Physical product variants without a delivery profile when Flint accepted the request. Flint assigns the profile to each one that still has none when the assignment reaches it. Format: int64. minimum: 0.
     * @return int
     */
    public function getProductVariantsUnconfigured(): int { return $this->get('product_variants_unconfigured'); }
    public function hasProductVariantsUnconfigured(): bool { return $this->has('product_variants_unconfigured'); }
    /** The accepted assignment, `processing`. Poll `GET /v1/delivery-profiles/{delivery_profile_id}` until its `unconfigured_assignment.status` is no longer `processing`. Progress of a delivery profile's latest bulk assignment to catalog items that have no delivery profile. It moves from `processing` to `completed`, to `canceled` when it stops early, or to `failed` when Flint can't finish it.
     * @return DeliveryProfileUnconfiguredAssignment
     */
    public function getUnconfiguredAssignment(): DeliveryProfileUnconfiguredAssignment { return $this->get('unconfigured_assignment'); }
    public function hasUnconfiguredAssignment(): bool { return $this->has('unconfigured_assignment'); }
}
