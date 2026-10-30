<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read string $external_reference_id
 * @property-read string $name
 * @property-read list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass> $signing_methods
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateCallbacksCreateParams extends Model {
    /** @param array{'configuration': DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'name': string, 'signing_methods'?: list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbacksCreateParams')); }
    /** Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it.
     * @return DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Signing methods for callback requests. Defaults to JWT verification with Flint's public JWKS. A shared secret and key_id are returned only when hmac is included. minItems: 1. uniqueItems: true. Default: ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@see WebhookSigningMethodInput}. jwt uses Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt", "hmac".
     * @return list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When signing_methods is omitted; use hasSigningMethods() or valueOrDefault().
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
}
