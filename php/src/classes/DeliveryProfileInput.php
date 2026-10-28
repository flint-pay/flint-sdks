<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryProfileConfigurationInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $current_delivery_profile_revision_id
 * @property-read string $delivery_profile_id
 * @property-read DeliveryProfileDiagnosticsInput|array<array-key, mixed>|\stdClass $diagnostics
 * @property-read string $external_reference_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfileInput extends Model {
    /** @param array{'configuration': DeliveryProfileConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_profile_revision_id': string, 'delivery_profile_id': string, 'diagnostics'?: DeliveryProfileDiagnosticsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileInput')); }
    /** Shape $ (Value): {@see DeliveryProfileConfigurationInput}. Current delivery requirement and grouping policy. Whether delivery planning applies to items under a delivery profile, and if so the allowed delivery types, resolution mode, origin policy, packing rules, weight, and dimensions.
     * @return DeliveryProfileConfigurationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string. Time the profile was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Immutable revision used for new line-item snapshots.
     * @return string
     * @throws SdkError When current_delivery_profile_revision_id is omitted; use hasCurrentDeliveryProfileRevisionId() or valueOrDefault().
     */
    public function getCurrentDeliveryProfileRevisionId(): string { return $this->get('current_delivery_profile_revision_id'); }
    public function hasCurrentDeliveryProfileRevisionId(): bool { return $this->has('current_delivery_profile_revision_id'); }
    /** Shape $ (Value): string. Stable delivery profile ID.
     * @return string
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Shape $ (Value): {@see DeliveryProfileDiagnosticsInput}. Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how many active Locations have no compatible delivery method and how many countries its zones name.
     * @return DeliveryProfileDiagnosticsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When diagnostics is omitted; use hasDiagnostics() or valueOrDefault().
     */
    public function getDiagnostics(): mixed { return $this->get('diagnostics'); }
    public function hasDiagnostics(): bool { return $this->has('diagnostics'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see MetadataMapInput}. Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Merchant-facing profile name.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Current profile lifecycle status. Value enum: "active", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Time the profile last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Optimistic-concurrency version for profile writes. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
