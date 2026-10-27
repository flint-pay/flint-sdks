<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryLocationSetConfigurationInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read string $external_reference_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliveryLocationSetRequestInput extends Model {
    /** @param array{'configuration': DeliveryLocationSetConfigurationInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryLocationSetRequestInput')); }
    /** Shape $ (Value): {@see DeliveryLocationSetConfigurationInput}. The location IDs in a delivery location set.
     * @return DeliveryLocationSetConfigurationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
