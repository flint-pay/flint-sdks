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
final class PartnerAppInstallCreatedEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'created_at'?: string|\DateTimeInterface, 'environment_grants'?: list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>, 'installed_by_user_id'?: string, 'merchant_id': string, 'partner_app_id': string, 'partner_app_install_id': string, 'partner_app_name': string, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by'?: string, 'revoked_by_user_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallCreatedEventInput')); }
    /** Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /**  object (Required): object and {@see PartnerAppInstallInput}. A merchant's authorization of a partner application. object.created_at (Optional): string. RFC3339 timestamp. Format: date-time. object.environment_grants (Optional): Array of {@see PartnerEnvironmentGrantInput}. object.environment_grants[] (Value): {@see PartnerEnvironmentGrantInput}. A partner application's authorization to access an environment. object.installed_by_user_id (Optional): string. object.merchant_id (Required): string. object.partner_app_id (Required): string. object.partner_app_install_id (Required): string. object.partner_app_name (Required): string. The app’s current name. object.revoked_at (Optional): string. RFC3339 timestamp. Format: date-time. object.revoked_by (Optional): string.  Value enum: "merchant", "partner_app". object.revoked_by_user_id (Optional): string. object.status (Required): string.  Value enum: "pending_exchange", "active", "revoked". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * @return array{'object': array{'created_at'?: string|\DateTimeInterface, 'environment_grants'?: list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>, 'installed_by_user_id'?: string, 'merchant_id': string, 'partner_app_id': string, 'partner_app_install_id': string, 'partner_app_name': string, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by'?: string, 'revoked_by_user_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "partner_app_install.created".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** partner_app_id
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The source of a partner webhook event, selected by type. merchant_id (Required): string. partner_app_install_id (Required): string. type (Required): string.  Value enum: "partner_app". oneOf[1] (Value): {@see PartnerWebhookEnvelopeSourcePartnerAppInput}. The partner_app source of a partner webhook event. oneOf[2] (Value): {@see PartnerWebhookEnvelopeSourceInstalledMerchantsInput}. The installed_merchants source of a partner webhook event.
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** webhook_event_id
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
