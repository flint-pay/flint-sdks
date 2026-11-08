<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $circuit_failure_count
 * @property-read string $circuit_state
 * @property-read TaxCalculationCallbackConfiguration $configuration
 * @property-read string $created_at
 * @property-read string $current_tax_calculation_callback_revision_id
 * @property-read ?string $external_reference_id
 * @property-read ?string $key_id
 * @property-read string $name
 * @property-read ?string $secret
 * @property-read list<string> $signing_methods
 * @property-read string $status
 * @property-read string $tax_calculation_callback_id
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class TaxCalculationCallbackUpdatedEventDataObject extends Model {
    /** @param array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': mixed, 'created_at': string, 'current_tax_calculation_callback_revision_id': string, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'tax_calculation_callback_id': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackUpdatedEventDataObject')); }
    /** Consecutive failed requests to the endpoint for the current revision. A valid response resets it. minimum: 0.
     * @return int
     */
    public function getCircuitFailureCount(): int { return $this->get('circuit_failure_count'); }
    public function hasCircuitFailureCount(): bool { return $this->has('circuit_failure_count'); }
    /** Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. Value enum: "closed", "open", "half_open".
     * @return string
     */
    public function getCircuitState(): string { return $this->get('circuit_state'); }
    public function hasCircuitState(): bool { return $this->has('circuit_state'); }
    /** The endpoint URL and request limits. Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout, request and response size limits, and redirect policy.
     * @return TaxCalculationCallbackConfiguration
     */
    public function getConfiguration(): TaxCalculationCallbackConfiguration { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit.
     * @return string
     */
    public function getCurrentTaxCalculationCallbackRevisionId(): string { return $this->get('current_tax_calculation_callback_revision_id'); }
    public function hasCurrentTaxCalculationCallbackRevisionId(): bool { return $this->has('current_tax_calculation_callback_revision_id'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback.
     * @return ?string
     */
    public function getKeyId(): ?string { return $this->get('key_id'); }
    public function hasKeyId(): bool { return $this->has('key_id'); }
    /** Your label for the callback.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Initial HMAC shared secret, returned once when hmac is included in signing_methods.
     * @return ?string
     */
    public function getSecret(): ?string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
    /** How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * @return list<string>
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. Value enum: "inactive", "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for this tax calculation callback, prefixed `tcb_`.
     * @return string
     */
    public function getTaxCalculationCallbackId(): string { return $this->get('tax_calculation_callback_id'); }
    public function hasTaxCalculationCallbackId(): bool { return $this->has('tax_calculation_callback_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. Format: uint64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
