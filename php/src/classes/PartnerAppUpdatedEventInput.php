<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'allowed_scopes': list<string>, 'api_version': string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'client_id': string, 'client_secret_enabled': bool, 'client_secret_last_used_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'default_requested_permissions': list<string>, 'merchant_action_routing'?: PartnerAppMerchantActionRoutingInput|array<array-key, mixed>|\stdClass, 'merchant_action_url'?: string, 'name': string, 'partner_app_id': string, 'payment_splits'?: PartnerAppPaymentSplitsInput|array<array-key, mixed>|\stdClass, 'permission_manifest': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'platform': PartnerAppPlatformInput|array<array-key, mixed>|\stdClass, 'platform_fee_cap'?: PlatformFeeCapInput|array<array-key, mixed>|\stdClass, 'platform_profile'?: PartnerAppPlatformProfileInput|array<array-key, mixed>|\stdClass, 'previous_secret_expires_at'?: string|\DateTimeInterface, 'redirect_uris': list<string>, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read string $sandbox_id
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppUpdatedEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'allowed_scopes': list<string>, 'api_version': string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'client_id': string, 'client_secret_enabled': bool, 'client_secret_last_used_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'default_requested_permissions': list<string>, 'merchant_action_routing'?: PartnerAppMerchantActionRoutingInput|array<array-key, mixed>|\stdClass, 'merchant_action_url'?: string, 'name': string, 'partner_app_id': string, 'payment_splits'?: PartnerAppPaymentSplitsInput|array<array-key, mixed>|\stdClass, 'permission_manifest': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'platform': PartnerAppPlatformInput|array<array-key, mixed>|\stdClass, 'platform_fee_cap'?: PlatformFeeCapInput|array<array-key, mixed>|\stdClass, 'platform_profile'?: PartnerAppPlatformProfileInput|array<array-key, mixed>|\stdClass, 'previous_secret_expires_at'?: string|\DateTimeInterface, 'redirect_uris': list<string>, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppUpdatedEventInput')); }
    /** API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.allowed_scopes (Required): Array of string. Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. object.allowed_scopes[] (Value): string. object.api_version (Required): string. Default API version for requests without a Flint-Version header. Shared across live and test environments. object.api_version_changed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.api_version_previous (Optional): string. Previous API version, present while a supported rollback is available. object.api_version_rollback_expires_at (Optional): string. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z". object.client_id (Required): string. Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. Example: "fpc_00112233445566778899aabbccddeeff". object.client_secret_enabled (Required): boolean. Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. object.client_secret_last_used_at (Required): string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.default_requested_permissions (Required): Array of string. IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. object.default_requested_permissions[] (Value): string. object.merchant_action_routing (Optional): {@see PartnerAppMerchantActionRoutingInput}. Present only while a change to merchant_action_url or platform_profile.website_url is waiting to move routing to another registrable domain; omitted otherwise. url is the previous destination emails still use, and expires_at is when routing switches to the current merchant_action_url. While the app had no merchant action URL before the change, this is Flint's own page. The destination merchant emails keep using while a move to another registrable domain is pending. object.merchant_action_url (Optional): string. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. Format: uri. minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt". object.name (Required): string. The app's name, shown to merchants on the consent screen. object.partner_app_id (Required): string. Unique identifier for this partner app, prefixed `papp_`. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". object.payment_splits (Optional): {@see PartnerAppPaymentSplitsInput}. The app's declaration that its owner sends splits of the payments it collects to sellers that install the app. Every authorization of the app asks the merchant to approve receiving split funds under these seller terms, and the environment grant records the approval. Declaring it requests the payment_splits platform capability, which live splits need. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen. object.permission_manifest (Required): Array of {@see PartnerAppPermissionManifestEntryInput}. Permissions the app can request from merchants. Each lists the Flint scopes it grants. object.permission_manifest[] (Value): {@see PartnerAppPermissionManifestEntryInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants. object.platform (Required): {@see PartnerAppPlatformInput}. The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. The app's platform onboarding. Platform capabilities apply in live mode only; test mode never checks them. requirements and capability readiness that depend on the owning merchant's live onboarding are read when Flint serves the app, so a change there alone doesn't advance the app's version or send a partner_app event. object.platform_fee_cap (Optional): {@see PlatformFeeCapInput}. The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it for each mode they install. Absent when the app charges no platform fees. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee. object.platform_profile (Optional): {@see PartnerAppPlatformProfileInput}. What the app told Flint for its platform review. Absent until set. What the platform tells Flint for its review. It is one value: a write replaces it whole. object.previous_secret_expires_at (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.redirect_uris (Required): Array of string. Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. object.redirect_uris[] (Value): string. object.status (Required): string.  Value enum: "active", "archived". object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. [] enum: "accept_platform_terms". object.supported_actions[] (Value): string.  Value enum: "accept_platform_terms". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'allowed_scopes': list<string>, 'api_version': string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'client_id': string, 'client_secret_enabled': bool, 'client_secret_last_used_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'default_requested_permissions': list<string>, 'merchant_action_routing'?: PartnerAppMerchantActionRoutingInput|array<array-key, mixed>|\stdClass, 'merchant_action_url'?: string, 'name': string, 'partner_app_id': string, 'payment_splits'?: PartnerAppPaymentSplitsInput|array<array-key, mixed>|\stdClass, 'permission_manifest': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'platform': PartnerAppPlatformInput|array<array-key, mixed>|\stdClass, 'platform_fee_cap'?: PlatformFeeCapInput|array<array-key, mixed>|\stdClass, 'platform_profile'?: PartnerAppPlatformProfileInput|array<array-key, mixed>|\stdClass, 'previous_secret_expires_at'?: string|\DateTimeInterface, 'redirect_uris': list<string>, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "merchant".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "partner_app.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The originating request. `null` when the event has no originating request ID. id (Required): string. Request ID of the request that caused the event. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Stable ID of the recorded webhook event, shared by its delivery attempts. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
