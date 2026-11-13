<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryRateCallbackConfigurationRequestInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read string $external_reference_id
 * @property-read string $name
 * @property-read list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass> $signing_methods
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliveryRateCallbackRequestInput extends Model {
    /** @param array{'configuration': DeliveryRateCallbackConfigurationRequestInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'name': string, 'signing_methods'?: list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>, 'status'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryRateCallbackRequestInput')); }
    /** The settings that define this resource. Changing them publishes a new revision. Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it.
     * @return DeliveryRateCallbackConfigurationRequestInput|array<array-key, mixed>|\stdClass
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
    /** Merchant-facing name. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Signing methods for callback requests. Defaults to JWT verification with Flint's public JWKS. When hmac is included, the response returns the shared secret and its delivery_rate_callback_signing_key_id once. minItems: 1. uniqueItems: true. Default: ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@see WebhookSigningMethodInput}. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * @return list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When signing_methods is omitted; use hasSigningMethods() or valueOrDefault().
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Whether active delivery methods can price with this callback. Defaults to inactive. Default: "inactive". Value enum: "inactive", "active".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
