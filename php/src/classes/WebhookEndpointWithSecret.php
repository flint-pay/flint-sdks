<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read ?string $api_version_changed_at
 * @property-read ?string $api_version_previous
 * @property-read ?string $api_version_rollback_expires_at
 * @property-read ?string $created_at
 * @property-read ?string $description
 * @property-read list<string> $enabled_events
 * @property-read ?list<string> $event_sources
 * @property-read ?list<string> $installed_merchant_modes
 * @property-read ?string $partner_app_id
 * @property-read ?string $previous_secret_expires_at
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read string $url
 * @property-read string $version
 * @property-read string $webhook_endpoint_id
 * @property-read ?string $secret
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEndpointWithSecret extends Model {
    /** @param array{'api_version': string, 'api_version_changed_at'?: string, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string, 'created_at'?: string, 'description'?: string, 'enabled_events': list<string>, 'event_sources'?: list<string>, 'installed_merchant_modes'?: list<string>, 'partner_app_id'?: string, 'previous_secret_expires_at'?: string, 'status': string, 'updated_at'?: string, 'url': string, 'version': string, 'webhook_endpoint_id': string, 'secret'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointWithSecret')); }
    /** Shape $ (Value): string. A dated API version pins this endpoint. The value default follows the endpoint owner's merchant default at delivery time, including retries. Deliveries never use a newer version than the event's recorded version.
     * @return string
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. When api_version last changed. Format: date-time.
     * @return ?string
     */
    public function getApiVersionChangedAt(): ?string { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** Shape $ (Value): string. Version this endpoint used before its last upgrade. Present while a rollback is available. To roll back, send it as api_version.
     * @return ?string
     */
    public function getApiVersionPrevious(): ?string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** Shape $ (Value): string. When the rollback offer for api_version_previous ends. You can still set any supported version afterward. Format: date-time.
     * @return ?string
     */
    public function getApiVersionRollbackExpiresAt(): ?string { return $this->get('api_version_rollback_expires_at'); }
    public function hasApiVersionRollbackExpiresAt(): bool { return $this->has('api_version_rollback_expires_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): Array of string. Subscribed event types. ["*"] includes every type the endpoint's event_sources deliver, including types added later; * is not available with installed_merchants. Stored subscriptions map previous names permanently and drop removed names on read. Empty when no current subscriptions remain. See the [changelog](/docs/changelog). Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     */
    public function getEnabledEvents(): array { return $this->get('enabled_events'); }
    public function hasEnabledEvents(): bool { return $this->has('enabled_events'); }
    /** Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to merchant. Use partner_app for app lifecycle events and installed_merchants for events from merchants that installed the partner app. [] enum: "merchant", "partner_app", "installed_merchants". Shape $[] (Value): string.  Value enum: "merchant", "partner_app", "installed_merchants".
     * @return ?list<string>
     */
    public function getEventSources(): ?array { return $this->get('event_sources'); }
    public function hasEventSources(): bool { return $this->has('event_sources'); }
    /** Shape $ (Value): Array of string. Modes of installed-merchant events this endpoint receives. Required when event_sources includes installed_merchants and omitted otherwise. Partner app lifecycle events are delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum: "test", "live". Shape $[] (Value): string.  Value enum: "test", "live".
     * @return ?list<string>
     */
    public function getInstalledMerchantModes(): ?array { return $this->get('installed_merchant_modes'); }
    public function hasInstalledMerchantModes(): bool { return $this->has('installed_merchant_modes'); }
    /** Shape $ (Value): string. Partner app that owns partner_app or installed_merchants event sources.
     * @return ?string
     */
    public function getPartnerAppId(): ?string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): string. When the replaced signing secret stops signing deliveries. Present only during a rotation overlap. Until then each delivery carries a signature from both secrets. Format: date-time.
     * @return ?string
     */
    public function getPreviousSecretExpiresAt(): ?string { return $this->get('previous_secret_expires_at'); }
    public function hasPreviousSecretExpiresAt(): bool { return $this->has('previous_secret_expires_at'); }
    /** Shape $ (Value): string. Availability of this endpoint. Deleted is returned only by DELETE. Value enum: "active", "inactive", "deleted".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** Shape $ (Value): string. One-time signing secret. Present on create and rotation; omitted on an idempotent replay after the secret retention period.
     * @return ?string
     */
    public function getSecret(): ?string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
}
