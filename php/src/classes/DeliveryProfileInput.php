<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'allowed_types'?: list<string>, 'combination_policy'?: string, 'dimensions'?: array{'height': string, 'length': string, 'unit': string, 'width': string, ...}|object, 'origin_policy'?: array{'location_id'?: string, 'type': string, ...}|object, 'requirement': string, 'resolution_mode'?: string, 'splitting_policy'?: string, 'weight'?: array{'unit': string, 'value': string, ...}|object, ...}|object $configuration
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $current_delivery_profile_revision_id
 * @property-read string $delivery_profile_id
 * @property-read string $external_reference_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfileInput extends Model {
    /** @param array{'configuration': array{'allowed_types'?: list<string>, 'combination_policy'?: string, 'dimensions'?: array{'height': string, 'length': string, 'unit': string, 'width': string, ...}|object, 'origin_policy'?: array{'location_id'?: string, 'type': string, ...}|object, 'requirement': string, 'resolution_mode'?: string, 'splitting_policy'?: string, 'weight'?: array{'unit': string, 'value': string, ...}|object, ...}|object, 'created_at': string|\DateTimeInterface, 'current_delivery_profile_revision_id': string, 'delivery_profile_id': string, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileInput')); }
    /** @return array{'allowed_types'?: list<string>, 'combination_policy'?: string, 'dimensions'?: array{'height': string, 'length': string, 'unit': string, 'width': string, ...}|object, 'origin_policy'?: array{'location_id'?: string, 'type': string, ...}|object, 'requirement': string, 'resolution_mode'?: string, 'splitting_policy'?: string, 'weight'?: array{'unit': string, 'value': string, ...}|object, ...}|object
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): array|object { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When current_delivery_profile_revision_id is omitted; use hasCurrentDeliveryProfileRevisionId() or valueOrDefault().
     */
    public function getCurrentDeliveryProfileRevisionId(): string { return $this->get('current_delivery_profile_revision_id'); }
    public function hasCurrentDeliveryProfileRevisionId(): bool { return $this->has('current_delivery_profile_revision_id'); }
    /** @return string
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
