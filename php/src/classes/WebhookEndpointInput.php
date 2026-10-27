<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $api_version_changed_at
 * @property-read string $api_version_previous
 * @property-read string|\DateTimeInterface $api_version_rollback_expires_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read list<string> $enabled_events
 * @property-read list<string> $event_sources
 * @property-read list<string> $installed_merchant_modes
 * @property-read string $partner_app_id
 * @property-read string|\DateTimeInterface $previous_secret_expires_at
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $url
 * @property-read string $version
 * @property-read string $webhook_endpoint_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEndpointInput extends Model {
    /** @param array{'api_version': string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'enabled_events': list<string>, 'event_sources'?: list<string>, 'installed_merchant_modes'?: list<string>, 'partner_app_id'?: string, 'previous_secret_expires_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'url': string, 'version': string, 'webhook_endpoint_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointInput')); }
    /** Shape $ (Value): string. A dated API version pins this endpoint. The value default follows the endpoint owner's merchant default at delivery time, including retries. Deliveries never use a newer version than the event's recorded version.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. When api_version last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When api_version_changed_at is omitted; use hasApiVersionChangedAt() or valueOrDefault().
     */
    public function getApiVersionChangedAt(): string|\DateTimeInterface { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** Shape $ (Value): string. Version this endpoint used before its last upgrade. Present while a rollback is available. To roll back, send it as api_version.
     * @return string
     * @throws SdkError When api_version_previous is omitted; use hasApiVersionPrevious() or valueOrDefault().
     */
    public function getApiVersionPrevious(): string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** Shape $ (Value): string. When the rollback offer for api_version_previous ends. You can still set any supported version afterward. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When api_version_rollback_expires_at is omitted; use hasApiVersionRollbackExpiresAt() or valueOrDefault().
     */
    public function getApiVersionRollbackExpiresAt(): string|\DateTimeInterface { return $this->get('api_version_rollback_expires_at'); }
    public function hasApiVersionRollbackExpiresAt(): bool { return $this->has('api_version_rollback_expires_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): Array of string. Subscribed event types. ["*"] includes every type the endpoint's event_sources deliver, including types added later; * is not available with installed_merchants. Stored subscriptions map previous names permanently and drop removed names on read. Empty when no current subscriptions remain. See the [changelog](/docs/changelog). Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When enabled_events is omitted; use hasEnabledEvents() or valueOrDefault().
     */
    public function getEnabledEvents(): array { return $this->get('enabled_events'); }
    public function hasEnabledEvents(): bool { return $this->has('enabled_events'); }
    /** Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to merchant. Use partner_app for app lifecycle events and installed_merchants for events from merchants that installed the partner app. [] enum: "merchant", "partner_app", "installed_merchants". Shape $[] (Value): string.  Value enum: "merchant", "partner_app", "installed_merchants".
     * @return list<string>
     * @throws SdkError When event_sources is omitted; use hasEventSources() or valueOrDefault().
     */
    public function getEventSources(): array { return $this->get('event_sources'); }
    public function hasEventSources(): bool { return $this->has('event_sources'); }
    /** Shape $ (Value): Array of string. Modes of installed-merchant events this endpoint receives. Required when event_sources includes installed_merchants and omitted otherwise. Partner app lifecycle events are delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum: "test", "live". Shape $[] (Value): string.  Value enum: "test", "live".
     * @return list<string>
     * @throws SdkError When installed_merchant_modes is omitted; use hasInstalledMerchantModes() or valueOrDefault().
     */
    public function getInstalledMerchantModes(): array { return $this->get('installed_merchant_modes'); }
    public function hasInstalledMerchantModes(): bool { return $this->has('installed_merchant_modes'); }
    /** Shape $ (Value): string. Partner app that owns partner_app or installed_merchants event sources.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): string. When the replaced signing secret stops signing deliveries. Present only during a rotation overlap. Until then each delivery carries a signature from both secrets. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When previous_secret_expires_at is omitted; use hasPreviousSecretExpiresAt() or valueOrDefault().
     */
    public function getPreviousSecretExpiresAt(): string|\DateTimeInterface { return $this->get('previous_secret_expires_at'); }
    public function hasPreviousSecretExpiresAt(): bool { return $this->has('previous_secret_expires_at'); }
    /** Shape $ (Value): string. Availability of this endpoint. Deleted is returned only by DELETE. Value enum: "active", "inactive", "deleted".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
}
