<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_dependency_role
 * @property-read ResourceReference|null $dependency
 * @property-read ?int $location_geography_version
 * @property-read ?string $revision_id
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutDeliveryPinnedDependency extends Model {
    /** @param array{'delivery_dependency_role': string, 'dependency': mixed, 'location_geography_version'?: int, 'revision_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutDeliveryPinnedDependency')); }
    /** Value enum: "assigned_method", "eligibility", "method_origin", "pickup_collection", "pricing_callback", "origin".
     * @return string
     */
    public function getDeliveryDependencyRole(): string { return $this->get('delivery_dependency_role'); }
    public function hasDeliveryDependencyRole(): bool { return $this->has('delivery_dependency_role'); }
    /**  anyOf[1] (Value): {@see ResourceReference}. A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     * @return ResourceReference|null
     */
    public function getDependency(): ResourceReference|null { return $this->get('dependency'); }
    public function hasDependency(): bool { return $this->has('dependency'); }
    /** Version of the Location geography used by this assignment or dependency. Format: int64.
     * @return ?int
     */
    public function getLocationGeographyVersion(): ?int { return $this->get('location_geography_version'); }
    public function hasLocationGeographyVersion(): bool { return $this->has('location_geography_version'); }
    /** revision_id
     * @return ?string
     */
    public function getRevisionId(): ?string { return $this->get('revision_id'); }
    public function hasRevisionId(): bool { return $this->has('revision_id'); }
}
