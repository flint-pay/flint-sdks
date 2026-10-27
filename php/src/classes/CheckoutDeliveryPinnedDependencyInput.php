<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_dependency_role
 * @property-read array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null $dependency
 * @property-read string $location_geography_version
 * @property-read string $revision_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutDeliveryPinnedDependencyInput extends Model {
    /** @param array{'delivery_dependency_role': string, 'dependency': array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null, 'location_geography_version'?: string, 'revision_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutDeliveryPinnedDependencyInput')); }
    /** Shape $ (Value): string.  Value enum: "assigned_method", "eligibility", "method_origin", "pickup_collection", "pricing_callback", "origin".
     * @return string
     * @throws SdkError When delivery_dependency_role is omitted; use hasDeliveryDependencyRole() or valueOrDefault().
     */
    public function getDeliveryDependencyRole(): string { return $this->get('delivery_dependency_role'); }
    public function hasDeliveryDependencyRole(): bool { return $this->has('delivery_dependency_role'); }
    /** Shape $ (Value): {@see ResourceReferenceInput} or null. Shape $.anyOf[1] (Value): {@see ResourceReferenceInput}. A reference to another resource by `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     * @return array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null
     * @throws SdkError When dependency is omitted; use hasDependency() or valueOrDefault().
     */
    public function getDependency(): mixed { return $this->get('dependency'); }
    public function hasDependency(): bool { return $this->has('dependency'); }
    /** Shape $ (Value): integer string. Version of the Location geography used by this assignment or dependency. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When location_geography_version is omitted; use hasLocationGeographyVersion() or valueOrDefault().
     */
    public function getLocationGeographyVersion(): string { return $this->get('location_geography_version'); }
    public function hasLocationGeographyVersion(): bool { return $this->has('location_geography_version'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When revision_id is omitted; use hasRevisionId() or valueOrDefault().
     */
    public function getRevisionId(): string { return $this->get('revision_id'); }
    public function hasRevisionId(): bool { return $this->has('revision_id'); }
}
