<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_dependency_id
 * @property-read string $delivery_dependency_role
 * @property-read string $delivery_dependency_type
 * @property-read string $geography_revision
 * @property-read string $revision_id
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutDeliveryPinnedDependency extends Model {
    /** @param array{'delivery_dependency_id': string, 'delivery_dependency_role': string, 'delivery_dependency_type': string, 'geography_revision'?: string, 'revision_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutDeliveryPinnedDependency')); }
    /** @return string
     * @throws SdkError When delivery_dependency_id is omitted; use hasDeliveryDependencyId() or valueOrDefault().
     */
    public function getDeliveryDependencyId(): string { return $this->get('delivery_dependency_id'); }
    public function hasDeliveryDependencyId(): bool { return $this->has('delivery_dependency_id'); }
    /** @return string
     * @throws SdkError When delivery_dependency_role is omitted; use hasDeliveryDependencyRole() or valueOrDefault().
     */
    public function getDeliveryDependencyRole(): string { return $this->get('delivery_dependency_role'); }
    public function hasDeliveryDependencyRole(): bool { return $this->has('delivery_dependency_role'); }
    /** @return string
     * @throws SdkError When delivery_dependency_type is omitted; use hasDeliveryDependencyType() or valueOrDefault().
     */
    public function getDeliveryDependencyType(): string { return $this->get('delivery_dependency_type'); }
    public function hasDeliveryDependencyType(): bool { return $this->has('delivery_dependency_type'); }
    /** @return string
     * @throws SdkError When geography_revision is omitted; use hasGeographyRevision() or valueOrDefault().
     */
    public function getGeographyRevision(): string { return $this->get('geography_revision'); }
    public function hasGeographyRevision(): bool { return $this->has('geography_revision'); }
    /** @return string
     * @throws SdkError When revision_id is omitted; use hasRevisionId() or valueOrDefault().
     */
    public function getRevisionId(): string { return $this->get('revision_id'); }
    public function hasRevisionId(): bool { return $this->has('revision_id'); }
}
