<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $bundle_components_unconfigured
 * @property-read string $delivery_profile_id
 * @property-read int $product_variants_unconfigured
 * @property-read DeliveryProfileUnconfiguredAssignmentInput|array<array-key, mixed>|\stdClass $unconfigured_assignment
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfileAssignmentInput extends Model {
    /** @param array{'bundle_components_unconfigured': int, 'delivery_profile_id': string, 'product_variants_unconfigured': int, 'unconfigured_assignment': DeliveryProfileUnconfiguredAssignmentInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileAssignmentInput')); }
    /** Bundle components of physical products without a delivery profile when Flint accepted the request. Flint assigns the profile to each one that still has none when the assignment reaches it. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When bundle_components_unconfigured is omitted; use hasBundleComponentsUnconfigured() or valueOrDefault().
     */
    public function getBundleComponentsUnconfigured(): int { return $this->get('bundle_components_unconfigured'); }
    public function hasBundleComponentsUnconfigured(): bool { return $this->has('bundle_components_unconfigured'); }
    /** Delivery profile Flint assigns to each unconfigured catalog item. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     * @return string
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Physical product variants without a delivery profile when Flint accepted the request. Flint assigns the profile to each one that still has none when the assignment reaches it. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When product_variants_unconfigured is omitted; use hasProductVariantsUnconfigured() or valueOrDefault().
     */
    public function getProductVariantsUnconfigured(): int { return $this->get('product_variants_unconfigured'); }
    public function hasProductVariantsUnconfigured(): bool { return $this->has('product_variants_unconfigured'); }
    /** The accepted assignment, `processing`. Poll `GET /v1/delivery-profiles/{delivery_profile_id}` until its `unconfigured_assignment.status` is no longer `processing`. Progress of a delivery profile's latest bulk assignment to catalog items that have no delivery profile. It moves from `processing` to `completed`, to `canceled` when it stops early, or to `failed` when Flint can't finish it.
     * @return DeliveryProfileUnconfiguredAssignmentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unconfigured_assignment is omitted; use hasUnconfiguredAssignment() or valueOrDefault().
     */
    public function getUnconfiguredAssignment(): mixed { return $this->get('unconfigured_assignment'); }
    public function hasUnconfiguredAssignment(): bool { return $this->has('unconfigured_assignment'); }
}
