<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $circuit_failure_count
 * @property-read string|null $circuit_state
 * @property-read DeliveryRateCallbackConfiguration|null $configuration
 * @property-read string|null $created_at
 * @property-read string|null $current_delivery_rate_callback_revision_id
 * @property-read string|null $delivery_rate_callback_id
 * @property-read mixed $delivery_revocation_id
 * @property-read string|null $external_reference_id
 * @property-read string|null $name
 * @property-read list<string>|null $signing_methods
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRateCallbackDeactivatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'circuit_failure_count'?: mixed, 'circuit_state'?: mixed, 'configuration'?: mixed, 'created_at'?: mixed, 'current_delivery_rate_callback_revision_id'?: mixed, 'delivery_rate_callback_id'?: mixed, 'delivery_revocation_id'?: mixed, 'external_reference_id'?: mixed, 'name'?: mixed, 'signing_methods'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackDeactivatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Consecutive callback failures since the last successful response. anyOf[1] (Value): integer. Consecutive callback failures since the last successful response. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCircuitFailureCount(): int|null { return $this->get('circuit_failure_count'); }
    public function hasCircuitFailureCount(): bool { return $this->has('circuit_failure_count'); }
    /** Whether Flint is currently calling the callback, based on recent failures. Value enum: "closed", "open", "half_open". anyOf[1] (Value): string. Whether Flint is currently calling the callback, based on recent failures. Value enum: "closed", "open", "half_open". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCircuitState(): string|null { return $this->get('circuit_state'); }
    public function hasCircuitState(): bool { return $this->has('circuit_state'); }
    /** Current settings of the rate callback. anyOf[1] (Value): {@see DeliveryRateCallbackConfiguration}. Current settings of the rate callback. anyOf[2] (Value): null.
     * @return DeliveryRateCallbackConfiguration|null
     */
    public function getConfiguration(): DeliveryRateCallbackConfiguration|null { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the current revision. New quotes use it. anyOf[1] (Value): string. ID of the current revision. New quotes use it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrentDeliveryRateCallbackRevisionId(): string|null { return $this->get('current_delivery_rate_callback_revision_id'); }
    public function hasCurrentDeliveryRateCallbackRevisionId(): bool { return $this->has('current_delivery_rate_callback_revision_id'); }
    /** Unique identifier for this delivery rate callback, prefixed `dcb_`. anyOf[1] (Value): string. Unique identifier for this delivery rate callback, prefixed `dcb_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryRateCallbackId(): string|null { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. anyOf[1] (Value): string or null. The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDeliveryRevocationId(): mixed { return $this->get('delivery_revocation_id'); }
    public function hasDeliveryRevocationId(): bool { return $this->has('delivery_revocation_id'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Merchant-facing name of the rate callback. anyOf[1] (Value): string. Merchant-facing name of the rate callback. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. [] enum: "jwt", "hmac". anyOf[1] (Value): Array of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". anyOf[1][] (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSigningMethods(): array|null { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Whether the rate callback is in use. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Whether the rate callback is in use. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
