<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'address'?: AddressInput|array<array-key, mixed>|\stdClass, 'api_version'?: string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_pinned_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'business_name'?: string, 'business_type'?: string, 'created_at': string|\DateTimeInterface, 'email': string|null, 'icon'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'logo'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'phone'?: string, 'readiness': MerchantReadinessInput|array<array-key, mixed>|\stdClass, 'status': string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'timezone'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, 'website_url'?: string, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class MerchantUpdatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'address'?: AddressInput|array<array-key, mixed>|\stdClass, 'api_version'?: string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_pinned_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'business_name'?: string, 'business_type'?: string, 'created_at': string|\DateTimeInterface, 'email': string|null, 'icon'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'logo'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'phone'?: string, 'readiness': MerchantReadinessInput|array<array-key, mixed>|\stdClass, 'status': string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'timezone'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, 'website_url'?: string, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantUpdatedMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object and {@see WebhookMerchantInput}. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `banners`. object.address (Optional): {@see AddressInput}. The merchant's business address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. object.api_version (Optional): string. Default API version for requests without a Flint-Version header. Shared across live and test environments. object.api_version_changed_at (Optional): string. When the merchant's default API version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.api_version_pinned_at (Optional): string. When the merchant's default API version was first set. Format: date-time. Example: "2026-08-02T16:00:00Z". object.api_version_previous (Optional): string. Previous API version, present while a supported rollback is available. object.api_version_rollback_expires_at (Optional): string. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z". object.business_name (Optional): string. Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. object.business_type (Optional): string. Merchant's business type. - `other`: A business type Flint does not map yet. Value enum: "individual", "company", "non_profit", "government_entity", "other". object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.email (Required): string or null. The account's contact email address. A new account starts with the sign-up email. `null` when none is set. object.icon (Optional): {@see ImageAttachmentInput}. A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. An image attached to a resource, with its display properties and attachment metadata. object.logo (Optional): {@see ImageAttachmentInput}. The merchant's public brand mark. An image attached to a resource, with its display properties and attachment metadata. object.merchant_id (Required): string. Stable identifier of the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@see MetadataMapInput}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.phone (Optional): string. The account's contact phone number, in international format such as +12125551234. object.readiness (Required): {@see MerchantReadinessInput}. Whether the merchant can accept payments and receive payouts, and what is still needed. A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements. object.status (Required): string. Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Value enum: "active", "suspended", "restricted", "closed". object.support_email (Optional): string. Support email address shown to buyers, for example on receipts and checkout. object.support_phone (Optional): string. Support phone number shown to buyers, in international format such as +12125551234. object.support_url (Optional): string. Support page shown to buyers. object.timezone (Optional): string. Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time zone. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Format: int64. minimum: 1. object.website_url (Optional): string. The business's website. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'address'?: AddressInput|array<array-key, mixed>|\stdClass, 'api_version'?: string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_pinned_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'business_name'?: string, 'business_type'?: string, 'created_at': string|\DateTimeInterface, 'email': string|null, 'icon'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'logo'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'phone'?: string, 'readiness': MerchantReadinessInput|array<array-key, mixed>|\stdClass, 'status': string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'timezone'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, 'website_url'?: string, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "merchant.updated".
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
