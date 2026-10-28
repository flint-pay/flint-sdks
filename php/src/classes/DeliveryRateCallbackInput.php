<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $circuit_failure_count
 * @property-read string $circuit_state
 * @property-read DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $current_delivery_rate_callback_revision_id
 * @property-read string $delivery_rate_callback_id
 * @property-read string $external_reference_id
 * @property-read string $key_id
 * @property-read string $name
 * @property-read string $secret
 * @property-read list<string> $signing_methods
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateCallbackInput extends Model {
    /** @param array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_rate_callback_revision_id': string, 'delivery_rate_callback_id': string, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackInput')); }
    /** Shape $ (Value): integer. Consecutive callback failures since the last successful response. minimum: 0.
     * @return int
     * @throws SdkError When circuit_failure_count is omitted; use hasCircuitFailureCount() or valueOrDefault().
     */
    public function getCircuitFailureCount(): int { return $this->get('circuit_failure_count'); }
    public function hasCircuitFailureCount(): bool { return $this->has('circuit_failure_count'); }
    /** Shape $ (Value): string.  Value enum: "closed", "open", "half_open".
     * @return string
     * @throws SdkError When circuit_state is omitted; use hasCircuitState() or valueOrDefault().
     */
    public function getCircuitState(): string { return $this->get('circuit_state'); }
    public function hasCircuitState(): bool { return $this->has('circuit_state'); }
    /** Shape $ (Value): {@see DeliveryRateCallbackConfigurationInput}. Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it.
     * @return DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When current_delivery_rate_callback_revision_id is omitted; use hasCurrentDeliveryRateCallbackRevisionId() or valueOrDefault().
     */
    public function getCurrentDeliveryRateCallbackRevisionId(): string { return $this->get('current_delivery_rate_callback_revision_id'); }
    public function hasCurrentDeliveryRateCallbackRevisionId(): bool { return $this->has('current_delivery_rate_callback_revision_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When delivery_rate_callback_id is omitted; use hasDeliveryRateCallbackId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Initial HMAC signing key ID. Returned only by create when hmac is included.
     * @return string
     * @throws SdkError When key_id is omitted; use hasKeyId() or valueOrDefault().
     */
    public function getKeyId(): string { return $this->get('key_id'); }
    public function hasKeyId(): bool { return $this->has('key_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Initial HMAC shared secret. Returned only by the create response when signing_methods includes hmac.
     * @return string
     * @throws SdkError When secret is omitted; use hasSecret() or valueOrDefault().
     */
    public function getSecret(): string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
    /** Shape $ (Value): Array of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac". Shape $[] (Value): string. jwt uses Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt", "hmac".
     * @return list<string>
     * @throws SdkError When signing_methods is omitted; use hasSigningMethods() or valueOrDefault().
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
