<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryProfileConfiguration $configuration
 * @property-read string $created_at
 * @property-read string $current_delivery_profile_revision_id
 * @property-read string $delivery_profile_id
 * @property-read DeliveryProfileDiagnostics $diagnostics
 * @property-read string $external_reference_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryProfile extends Model {
    /** @param array{'configuration': object{'allowed_types'?: list<string>, 'combination_policy'?: string, 'dimensions'?: object{'height': string, 'length': string, 'unit': string, 'width': string}, 'origin_policy'?: object{'location_id'?: string, 'type': string}, 'requirement': string, 'resolution_mode'?: string, 'splitting_policy'?: string, 'weight'?: object{'unit': string, 'value': string}}, 'created_at': string, 'current_delivery_profile_revision_id': string, 'delivery_profile_id': string, 'diagnostics'?: object{'active_method_definitions_count': int, 'covers_all_items': bool, 'locations_without_rates_count': int, 'unassigned_locations': list<string>, 'unassigned_locations_truncated': bool, 'zone_country_count': int}, 'external_reference_id'?: string, 'metadata'?: \stdClass, 'name': string, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfile')); }
    /** @return DeliveryProfileConfiguration
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): DeliveryProfileConfiguration { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
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
    /** @return DeliveryProfileDiagnostics
     * @throws SdkError When diagnostics is omitted; use hasDiagnostics() or valueOrDefault().
     */
    public function getDiagnostics(): DeliveryProfileDiagnostics { return $this->get('diagnostics'); }
    public function hasDiagnostics(): bool { return $this->has('diagnostics'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
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
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
