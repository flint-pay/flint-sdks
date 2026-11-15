<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryRateCallbackConfigurationPatchRequestInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read string $name
 * @property-read list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass> $signing_methods
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateDeliveryRateCallbackRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateDeliveryRateCallbackRequestInput')); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: 1.
     * @return DeliveryRateCallbackConfigurationPatchRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Current resource version. Required when the request carries a revision field: configuration, signing_methods. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Merchant-facing name. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Replaces the signing methods. Adding hmac when the callback has no shared secret issues one and returns it once in this response. Removing hmac deletes all shared secrets. Omit to leave unchanged. Requires expected_version. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@see WebhookSigningMethodInput}. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * @return list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When signing_methods is omitted; use hasSigningMethods() or valueOrDefault().
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Whether the resource is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Value enum: "inactive", "active".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
