<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryMethodConfigurationPatchRequestInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read string|null $description
 * @property-read int $display_position
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $name
 * @property-read int|null $recommendation_priority
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateDeliveryMethodRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateDeliveryMethodRequestInput')); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPatchRequestInput}. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. minProperties: 1.
     * @return DeliveryMethodConfigurationPatchRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string or null. Delivery method description. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     * @throws SdkError When display_position is omitted; use hasDisplayPosition() or valueOrDefault().
     */
    public function getDisplayPosition(): int { return $this->get('display_position'); }
    public function hasDisplayPosition(): bool { return $this->has('display_position'); }
    /** Shape $ (Value): integer string. Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, name, description, display_position, recommendation_priority. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer or null. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     * @return int|null
     * @throws SdkError When recommendation_priority is omitted; use hasRecommendationPriority() or valueOrDefault().
     */
    public function getRecommendationPriority(): int|null { return $this->get('recommendation_priority'); }
    public function hasRecommendationPriority(): bool { return $this->has('recommendation_priority'); }
    /** Shape $ (Value): string.  Value enum: "inactive", "active".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
