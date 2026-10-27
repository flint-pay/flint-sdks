<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $circuit_failure_count
 * @property-read string $circuit_state
 * @property-read DeliveryRateCallbackConfiguration $configuration
 * @property-read string $created_at
 * @property-read string $current_delivery_rate_callback_revision_id
 * @property-read string $delivery_rate_callback_id
 * @property-read ?string $external_reference_id
 * @property-read ?string $key_id
 * @property-read string $name
 * @property-read ?string $secret
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRateCallback extends Model {
    /** @param array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': mixed, 'created_at': string, 'current_delivery_rate_callback_revision_id': string, 'delivery_rate_callback_id': string, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallback')); }
    /** Shape $ (Value): integer. Consecutive callback failures since the last successful response. minimum: 0.
     * @return int
     */
    public function getCircuitFailureCount(): int { return $this->get('circuit_failure_count'); }
    public function hasCircuitFailureCount(): bool { return $this->has('circuit_failure_count'); }
    /** Shape $ (Value): string.  Value enum: "closed", "open", "half_open".
     * @return string
     */
    public function getCircuitState(): string { return $this->get('circuit_state'); }
    public function hasCircuitState(): bool { return $this->has('circuit_state'); }
    /** Shape $ (Value): {@see DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it.
     * @return DeliveryRateCallbackConfiguration
     */
    public function getConfiguration(): DeliveryRateCallbackConfiguration { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getCurrentDeliveryRateCallbackRevisionId(): string { return $this->get('current_delivery_rate_callback_revision_id'); }
    public function hasCurrentDeliveryRateCallbackRevisionId(): bool { return $this->has('current_delivery_rate_callback_revision_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getKeyId(): ?string { return $this->get('key_id'); }
    public function hasKeyId(): bool { return $this->has('key_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Initial signing secret. Returned only by the create response.
     * @return ?string
     */
    public function getSecret(): ?string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
