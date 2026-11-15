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
 * @property-read string|null $delivery_revocation_id
 * @property-read string $external_reference_id
 * @property-read string $name
 * @property-read list<string> $signing_methods
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * @property-read string $delivery_rate_callback_signing_key_id
 * @property-read string $secret
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateCallbackWithSecretInput extends Model {
    /** @param array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_rate_callback_revision_id': string, 'delivery_rate_callback_id': string, 'delivery_revocation_id': string|null, 'external_reference_id'?: string, 'name': string, 'signing_methods': list<string>, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, 'delivery_rate_callback_signing_key_id'?: string, 'secret'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackWithSecretInput')); }
    /** Consecutive callback failures since the last successful response. minimum: 0.
     * @return int
     * @throws SdkError When circuit_failure_count is omitted; use hasCircuitFailureCount() or valueOrDefault().
     */
    public function getCircuitFailureCount(): int { return $this->get('circuit_failure_count'); }
    public function hasCircuitFailureCount(): bool { return $this->has('circuit_failure_count'); }
    /** Whether Flint is currently calling the callback, based on recent failures. Value enum: "closed", "open", "half_open".
     * @return string
     * @throws SdkError When circuit_state is omitted; use hasCircuitState() or valueOrDefault().
     */
    public function getCircuitState(): string { return $this->get('circuit_state'); }
    public function hasCircuitState(): bool { return $this->has('circuit_state'); }
    /** Current settings of the rate callback. Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it.
     * @return DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the current revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * @return string
     * @throws SdkError When current_delivery_rate_callback_revision_id is omitted; use hasCurrentDeliveryRateCallbackRevisionId() or valueOrDefault().
     */
    public function getCurrentDeliveryRateCallbackRevisionId(): string { return $this->get('current_delivery_rate_callback_revision_id'); }
    public function hasCurrentDeliveryRateCallbackRevisionId(): bool { return $this->has('current_delivery_rate_callback_revision_id'); }
    /** Unique identifier for this delivery rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * @return string
     * @throws SdkError When delivery_rate_callback_id is omitted; use hasDeliveryRateCallbackId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * @return string|null
     * @throws SdkError When delivery_revocation_id is omitted; use hasDeliveryRevocationId() or valueOrDefault().
     */
    public function getDeliveryRevocationId(): string|null { return $this->get('delivery_revocation_id'); }
    public function hasDeliveryRevocationId(): bool { return $this->has('delivery_revocation_id'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Merchant-facing name of the rate callback.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * @return list<string>
     * @throws SdkError When signing_methods is omitted; use hasSigningMethods() or valueOrDefault().
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** ID of the HMAC signing key for secret, sent in the Flint-Signing-Key-Ids request header. Present exactly when secret is present. Example: "cbkey_00112233445566778899aabb".
     * @return string
     * @throws SdkError When delivery_rate_callback_signing_key_id is omitted; use hasDeliveryRateCallbackSigningKeyId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackSigningKeyId(): string { return $this->get('delivery_rate_callback_signing_key_id'); }
    public function hasDeliveryRateCallbackSigningKeyId(): bool { return $this->has('delivery_rate_callback_signing_key_id'); }
    /** One-time HMAC shared secret. Present on create when signing_methods includes hmac, on the PATCH that first adds hmac, and on rotate-secret; omitted on an idempotent replay after the secret retention period and on every other response. Flint never returns it again.
     * @return string
     * @throws SdkError When secret is omitted; use hasSecret() or valueOrDefault().
     */
    public function getSecret(): string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
}
