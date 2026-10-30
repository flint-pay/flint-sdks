<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string $description
 * @property-read list<string> $enabled_events
 * @property-read list<string> $event_sources
 * @property-read list<string> $installed_merchant_modes
 * @property-read string $partner_app_id
 * @property-read list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass> $signing_methods
 * @property-read string $status
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateWebhookEndpointRequestInput extends Model {
    /** @param array{'api_version'?: string, 'description'?: string, 'enabled_events': list<string>, 'event_sources'?: list<string>, 'installed_merchant_modes'?: list<string>, 'partner_app_id'?: string, 'signing_methods'?: list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>, 'status'?: string, 'url': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateWebhookEndpointRequestInput')); }
    /** Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this endpoint. Omission follows the merchant default. Null is not accepted. minLength: 1.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver, including types added later; * must be the only entry and is not available with installed_merchants. At least one entry is required. Use only current event type names; previous and removed names are rejected. Stored subscriptions map previous names permanently and drop removed names on read. See the [changelog](/docs/changelog). minItems: 1. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When enabled_events is omitted; use hasEnabledEvents() or valueOrDefault().
     */
    public function getEnabledEvents(): array { return $this->get('enabled_events'); }
    public function hasEnabledEvents(): bool { return $this->has('enabled_events'); }
    /** Event sources this endpoint receives. Defaults to merchant. Use partner_app for app lifecycle events and installed_merchants for events from merchants that installed the partner app. [] enum: "merchant", "partner_app", "installed_merchants". [] (Value): string.  Value enum: "merchant", "partner_app", "installed_merchants".
     * @return list<string>
     * @throws SdkError When event_sources is omitted; use hasEventSources() or valueOrDefault().
     */
    public function getEventSources(): array { return $this->get('event_sources'); }
    public function hasEventSources(): bool { return $this->has('event_sources'); }
    /** Modes of installed-merchant events this endpoint receives. Required when event_sources includes installed_merchants and omitted otherwise. Partner app lifecycle events are delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum: "test", "live". [] (Value): string.  Value enum: "test", "live".
     * @return list<string>
     * @throws SdkError When installed_merchant_modes is omitted; use hasInstalledMerchantModes() or valueOrDefault().
     */
    public function getInstalledMerchantModes(): array { return $this->get('installed_merchant_modes'); }
    public function hasInstalledMerchantModes(): bool { return $this->has('installed_merchant_modes'); }
    /** Partner app that owns partner_app or installed_merchants event sources. minLength: 1.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** minItems: 1. uniqueItems: true. Default: ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@see WebhookSigningMethodInput}. jwt uses Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt", "hmac".
     * @return list<WebhookSigningMethodInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When signing_methods is omitted; use hasSigningMethods() or valueOrDefault().
     */
    public function getSigningMethods(): array { return $this->get('signing_methods'); }
    public function hasSigningMethods(): bool { return $this->has('signing_methods'); }
    /** Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
