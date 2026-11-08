<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationCallbackConfigurationPatchRequestInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read string $name
 * @property-read list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass> $signing_methods
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCalculationCallbacksUpdateParams extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbacksUpdateParams')); }
    /** Changes to the callback's configuration. Requires expected_version. Changes to a tax calculation callback's configuration. Only the keys you send change; keys you leave out keep their current values. Null restores an optional key's default. Requires expected_version. minProperties: 1.
     * @return TaxCalculationCallbackConfigurationPatchRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** The `version` you last read. A stale value is refused with a version conflict. Required with `configuration` and `signing_methods`. Format: uint64. minimum: 1.
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
    /** New label for the callback. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires expected_version. Removing hmac deletes the current and previous secrets. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@see WebhookSigningMethodInput}. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * @return list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When signing_methods is omitted; use hasSigningMethods() or valueOrDefault().
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Activates or deactivates the callback. Send it alone, with at most `expected_version`. - `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`: Stops the callback from being selected. Refused while your settings select it. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
