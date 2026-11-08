<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationCallbackConfigurationRequestInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read string $external_reference_id
 * @property-read string $name
 * @property-read list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass> $signing_methods
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateTaxCalculationCallbackRequestInput extends Model {
    /** @param array{'configuration': TaxCalculationCallbackConfigurationRequestInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'name': string, 'signing_methods'?: list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateTaxCalculationCallbackRequestInput')); }
    /** The endpoint URL and request limits. Only `url` is required. Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout, request and response size limits, and redirect policy.
     * @return TaxCalculationCallbackConfigurationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Your label for the callback, from 1 to 255 characters. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Defaults to `jwt`. minItems: 1. uniqueItems: true. Default: ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@see WebhookSigningMethodInput}. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * @return list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When signing_methods is omitted; use hasSigningMethods() or valueOrDefault().
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
}
