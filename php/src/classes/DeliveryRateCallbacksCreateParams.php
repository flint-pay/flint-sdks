<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryRateCallbackConfigurationRequestInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read string $external_reference_id
 * @property-read string $name
 * @property-read list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass> $signing_methods
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateCallbacksCreateParams extends Model {
    /** @param array{'configuration': DeliveryRateCallbackConfigurationRequestInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'name': string, 'signing_methods'?: list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbacksCreateParams')); }
    /** Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it.
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
    /** minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Signing methods for callback requests. Defaults to JWT verification with Flint's public JWKS. A shared secret and key_id are returned only when hmac is included. minItems: 1. uniqueItems: true. Default: ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@see WebhookSigningMethodInput}. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * @return list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When signing_methods is omitted; use hasSigningMethods() or valueOrDefault().
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
