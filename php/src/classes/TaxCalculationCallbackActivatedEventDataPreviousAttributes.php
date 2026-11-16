<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $circuit_failure_count
 * @property-read string|null $circuit_state
 * @property-read TaxCalculationCallbackConfiguration|null $configuration
 * @property-read string|null $created_at
 * @property-read string|null $current_tax_calculation_callback_revision_id
 * @property-read string|null $external_reference_id
 * @property-read string|null $key_id
 * @property-read string|null $name
 * @property-read string|null $secret
 * @property-read list<string>|null $signing_methods
 * @property-read string|null $status
 * @property-read string|null $tax_calculation_callback_id
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class TaxCalculationCallbackActivatedEventDataPreviousAttributes extends Model {
    /** @param array{'circuit_failure_count'?: mixed, 'circuit_state'?: mixed, 'configuration'?: mixed, 'created_at'?: mixed, 'current_tax_calculation_callback_revision_id'?: mixed, 'external_reference_id'?: mixed, 'key_id'?: mixed, 'name'?: mixed, 'secret'?: mixed, 'signing_methods'?: mixed, 'status'?: mixed, 'tax_calculation_callback_id'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackActivatedEventDataPreviousAttributes')); }
    /** Consecutive failed requests to the endpoint for the current revision. A valid response resets it. anyOf[1] (Value): integer. Consecutive failed requests to the endpoint for the current revision. A valid response resets it. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCircuitFailureCount(): int|null { return $this->get('circuit_failure_count'); }
    public function hasCircuitFailureCount(): bool { return $this->has('circuit_failure_count'); }
    /** Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. Value enum: "closed", "open", "half_open". anyOf[1] (Value): string. Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. Value enum: "closed", "open", "half_open". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCircuitState(): string|null { return $this->get('circuit_state'); }
    public function hasCircuitState(): bool { return $this->has('circuit_state'); }
    /** The endpoint URL and request limits. anyOf[1] (Value): {@see TaxCalculationCallbackConfiguration}. The endpoint URL and request limits. anyOf[2] (Value): null.
     * @return TaxCalculationCallbackConfiguration|null
     */
    public function getConfiguration(): TaxCalculationCallbackConfiguration|null { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. anyOf[1] (Value): string. ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrentTaxCalculationCallbackRevisionId(): string|null { return $this->get('current_tax_calculation_callback_revision_id'); }
    public function hasCurrentTaxCalculationCallbackRevisionId(): bool { return $this->has('current_tax_calculation_callback_revision_id'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. anyOf[1] (Value): string. ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getKeyId(): string|null { return $this->get('key_id'); }
    public function hasKeyId(): bool { return $this->has('key_id'); }
    /** Your label for the callback. anyOf[1] (Value): string. Your label for the callback. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Initial HMAC shared secret, returned once when hmac is included in signing_methods. anyOf[1] (Value): string. Initial HMAC shared secret, returned once when hmac is included in signing_methods. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSecret(): string|null { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
    /** How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. [] enum: "jwt", "hmac". anyOf[1] (Value): Array of string. How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". anyOf[1][] (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSigningMethods(): array|null { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. Value enum: "inactive", "active", "archived". anyOf[1] (Value): string. Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. Value enum: "inactive", "active", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for this tax calculation callback, prefixed `tcb_`. anyOf[1] (Value): string. Unique identifier for this tax calculation callback, prefixed `tcb_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTaxCalculationCallbackId(): string|null { return $this->get('tax_calculation_callback_id'); }
    public function hasTaxCalculationCallbackId(): bool { return $this->has('tax_calculation_callback_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. anyOf[1] (Value): integer. Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
