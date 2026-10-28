<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'created_at'?: string|\DateTimeInterface, 'environment_grants'?: list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>, 'installed_by_user_id'?: string, 'merchant_id': string, 'partner_app_id': string, 'partner_app_install_id': string, 'partner_app_name': string, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by'?: string, 'revoked_by_user_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class IncomingWebhookbfd0f4b7922ePayloadInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'created_at'?: string|\DateTimeInterface, 'environment_grants'?: list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>, 'installed_by_user_id'?: string, 'merchant_id': string, 'partner_app_id': string, 'partner_app_install_id': string, 'partner_app_name': string, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by'?: string, 'revoked_by_user_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IncomingWebhookbfd0f4b7922ePayloadInput')); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see PartnerAppInstallInput}. A merchant's authorization of a partner application. Shape $.object.created_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.environment_grants (Optional): Array of {@see PartnerEnvironmentGrantInput}. Shape $.object.environment_grants[] (Value): {@see PartnerEnvironmentGrantInput}. A partner application's authorization to access an environment. Shape $.object.installed_by_user_id (Optional): string. Shape $.object.merchant_id (Required): string. Shape $.object.partner_app_id (Required): string. Shape $.object.partner_app_install_id (Required): string. Shape $.object.partner_app_name (Required): string. The app’s current name. Shape $.object.revoked_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.revoked_by (Optional): string.  Value enum: "merchant", "partner_app". Shape $.object.revoked_by_user_id (Optional): string. Shape $.object.status (Required): string.  Value enum: "pending_exchange", "active", "revoked". Shape $.object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * @return array{'object': array{'created_at'?: string|\DateTimeInterface, 'environment_grants'?: list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>, 'installed_by_user_id'?: string, 'merchant_id': string, 'partner_app_id': string, 'partner_app_install_id': string, 'partner_app_name': string, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by'?: string, 'revoked_by_user_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "partner_app_install.revoked".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): {@see PartnerWebhookEnvelopeSourceInput} and object. The source of a partner webhook event, selected by type. Shape $.merchant_id (Required): string. Shape $.partner_app_install_id (Required): string. Shape $.type (Required): string.  Value enum: "partner_app". Shape $.oneOf[1] (Value): {@see PartnerWebhookEnvelopeSourcePartnerAppInput}. The partner_app source of a partner webhook event. Shape $.oneOf[2] (Value): {@see PartnerWebhookEnvelopeSourceInstalledMerchantsInput}. The installed_merchants source of a partner webhook event.
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
