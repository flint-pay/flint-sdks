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
 * @property-read list<string> $signing_methods
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRateCallbackActivatedMerchantEventDataObject extends Model {
    /** @param array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': mixed, 'created_at': string, 'current_delivery_rate_callback_revision_id': string, 'delivery_rate_callback_id': string, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackActivatedMerchantEventDataObject')); }
    /** Consecutive callback failures since the last successful response. minimum: 0.
     * @return int
     */
    public function getCircuitFailureCount(): int { return $this->get('circuit_failure_count'); }
    public function hasCircuitFailureCount(): bool { return $this->has('circuit_failure_count'); }
    /** Value enum: "closed", "open", "half_open".
     * @return string
     */
    public function getCircuitState(): string { return $this->get('circuit_state'); }
    public function hasCircuitState(): bool { return $this->has('circuit_state'); }
    /** Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it.
     * @return DeliveryRateCallbackConfiguration
     */
    public function getConfiguration(): DeliveryRateCallbackConfiguration { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** current_delivery_rate_callback_revision_id
     * @return string
     */
    public function getCurrentDeliveryRateCallbackRevisionId(): string { return $this->get('current_delivery_rate_callback_revision_id'); }
    public function hasCurrentDeliveryRateCallbackRevisionId(): bool { return $this->has('current_delivery_rate_callback_revision_id'); }
    /** delivery_rate_callback_id
     * @return string
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Initial HMAC signing key ID. Returned only by create when hmac is included.
     * @return ?string
     */
    public function getKeyId(): ?string { return $this->get('key_id'); }
    public function hasKeyId(): bool { return $this->has('key_id'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Initial HMAC shared secret. Returned only by the create response when signing_methods includes hmac.
     * @return ?string
     */
    public function getSecret(): ?string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
    /** Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): string. jwt uses Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt", "hmac".
     * @return list<string>
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
