<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'created_at': string|\DateTimeInterface, 'environment_grant_id': string, 'granted_permissions': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'granted_scopes': list<string>, 'merchant_readiness'?: PartnerAppMerchantReadinessInput|array<array-key, mixed>|\stdClass, 'mode': string, 'partner_app_install_id': string, 'payment_splits'?: PartnerEnvironmentGrantPaymentSplitsInput|array<array-key, mixed>|\stdClass, 'platform_fee_cap'?: PlatformFeeCapInput|array<array-key, mixed>|\stdClass, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by_user_id'?: string, 'sandbox_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id'?: string, 'merchant_id': string, 'mode'?: string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class EnvironmentGrantUpdatedEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'created_at': string|\DateTimeInterface, 'environment_grant_id': string, 'granted_permissions': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'granted_scopes': list<string>, 'merchant_readiness'?: PartnerAppMerchantReadinessInput|array<array-key, mixed>|\stdClass, 'mode': string, 'partner_app_install_id': string, 'payment_splits'?: PartnerEnvironmentGrantPaymentSplitsInput|array<array-key, mixed>|\stdClass, 'platform_fee_cap'?: PlatformFeeCapInput|array<array-key, mixed>|\stdClass, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by_user_id'?: string, 'sandbox_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id'?: string, 'merchant_id': string, 'mode'?: string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EnvironmentGrantUpdatedEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.environment_grant_id (Required): string. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". object.granted_permissions (Required): Array of {@see PartnerAppPermissionManifestEntryInput}. The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. object.granted_permissions[] (Value): {@see PartnerAppPermissionManifestEntryInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants. object.granted_scopes (Required): Array of string. object.granted_scopes[] (Value): string. object.merchant_readiness (Optional): {@see PartnerAppMerchantReadinessInput}. The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. An installed merchant's payments and payouts readiness in one environment, summarized for the partner app's owner. object.mode (Required): string. Environment used for this resource or request. Value enum: "test", "live". object.partner_app_install_id (Required): string. ID of the install this grant belongs to. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". object.payment_splits (Optional): {@see PartnerEnvironmentGrantPaymentSplitsInput}. The merchant's approval to receive split funds from the app in this mode, present while it lasts. A merchant approves by authorizing an app that declares payment_splits. The approval ends when the app removes payment_splits, or when the merchant or you revoke this grant or the install; authorizing again approves again. A payment's splits to this seller need the approval in the payment's mode. The merchant's approval to receive split funds from the app in this grant's mode. object.platform_fee_cap (Optional): {@see PlatformFeeCapInput}. The platform fee cap the merchant approved for this mode: what the app's cap was when the merchant approved it, lowered at once whenever the app lowers its cap. Absent when the merchant approved none. A higher app cap applies only after the merchant authorizes again. No request accepts a platform fee yet. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee. object.revoked_at (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.revoked_by_user_id (Optional): string. Example: "usr_01KEZF7C00YC8757ZYP9727JM0". object.sandbox_id (Optional): string. ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". object.status (Required): string.  Value enum: "pending_exchange", "active", "revoked". object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. [] enum: "revoke". object.supported_actions[] (Value): string.  Value enum: "revoke". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'created_at': string|\DateTimeInterface, 'environment_grant_id': string, 'granted_permissions': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'granted_scopes': list<string>, 'merchant_readiness'?: PartnerAppMerchantReadinessInput|array<array-key, mixed>|\stdClass, 'mode': string, 'partner_app_install_id': string, 'payment_splits'?: PartnerEnvironmentGrantPaymentSplitsInput|array<array-key, mixed>|\stdClass, 'platform_fee_cap'?: PlatformFeeCapInput|array<array-key, mixed>|\stdClass, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by_user_id'?: string, 'sandbox_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "partner_app".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "environment_grant.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the partner app that owns the receiving endpoint. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
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
    /** The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. environment_grant_id (Optional): string. The grant authorizing delivery from this merchant environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Optional): string. Whether the installed merchant event came from live mode or a sandbox. Value enum: "test", "live". partner_app_install_id (Required): string. The install connecting the merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id (Optional): string. The sandbox the event came from, present only in test mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return array{'environment_grant_id'?: string, 'merchant_id': string, 'mode'?: string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object
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
    /** Stable ID of the recorded webhook event, shared by its delivery attempts. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
