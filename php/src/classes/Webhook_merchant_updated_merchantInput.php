<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'address'?: AddressInput|array<array-key, mixed>|\stdClass, 'api_version'?: string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_pinned_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'business_name'?: string, 'business_type'?: string, 'created_at'?: string|\DateTimeInterface, 'email': string|null, 'icon'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'logo'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'metadata'?: array<array-key, string>|\stdClass, 'organization'?: array{'created_at'?: string|\DateTimeInterface, 'name': string, 'organization_id': string, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'organization_id': string, 'phone'?: string, 'readiness': MerchantReadinessInput|array<array-key, mixed>|\stdClass, 'reporting_timezone'?: string, 'status': string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'updated_at'?: string|\DateTimeInterface, 'version': string, 'website_url'?: string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_merchant_updated_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'address'?: AddressInput|array<array-key, mixed>|\stdClass, 'api_version'?: string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_pinned_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'business_name'?: string, 'business_type'?: string, 'created_at'?: string|\DateTimeInterface, 'email': string|null, 'icon'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'logo'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'metadata'?: array<array-key, string>|\stdClass, 'organization'?: array{'created_at'?: string|\DateTimeInterface, 'name': string, 'organization_id': string, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'organization_id': string, 'phone'?: string, 'readiness': MerchantReadinessInput|array<array-key, mixed>|\stdClass, 'reporting_timezone'?: string, 'status': string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'updated_at'?: string|\DateTimeInterface, 'version': string, 'website_url'?: string, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_merchant_updated_merchantInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see MerchantInput}. The business accepting payments. Shape $.object.address (Optional): {@see AddressInput}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. Shape $.object.api_version (Optional): string. Default API version for requests without a Flint-Version header. Shared across live and test environments. Shape $.object.api_version_changed_at (Optional): string. When the merchant's default API version last changed. Format: date-time. Shape $.object.api_version_pinned_at (Optional): string. When the merchant's default API version was first set. Format: date-time. Shape $.object.api_version_previous (Optional): string. Previous API version, present while a supported rollback is available. Shape $.object.api_version_rollback_expires_at (Optional): string. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: date-time. Shape $.object.business_name (Optional): string. Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. Shape $.object.business_type (Optional): string. Merchant's business type. - `other`: A business type Flint does not map yet. Value enum: "individual", "company", "non_profit", "government_entity", "other". Shape $.object.created_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.email (Required): string or null. Shape $.object.icon (Optional): {@see ImageAttachmentInput}. A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. An image attached to a resource, with its display properties and attachment metadata. Shape $.object.logo (Optional): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata. Shape $.object.merchant_id (Required): string. Shape $.object.metadata (Optional): Map of string. Shape $.object.metadata.* (Value): string. Shape $.object.organization (Optional): {@see ExpandedOrganizationSummaryInput} or null. Shape $.object.organization.anyOf[1] (Value): {@see ExpandedOrganizationSummaryInput}. An organization's summary fields, such as its name, status, and parent, returned when the organization is expanded. Shape $.object.organization.anyOf[2] (Value): null. Shape $.object.organization_id (Required): string. The organization this merchant belongs to. Flint creates it with the merchant, and it can't be changed through the API. Shape $.object.phone (Optional): string. Shape $.object.readiness (Required): {@see MerchantReadinessInput}. A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements. Shape $.object.reporting_timezone (Optional): string. Shape $.object.status (Required): string.  Value enum: "active", "suspended", "restricted", "closed". Shape $.object.support_email (Optional): string. Shape $.object.support_phone (Optional): string. Shape $.object.support_url (Optional): string. Shape $.object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.version (Required): integer string. Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Shape $.object.website_url (Optional): string.
     * @return array{'object': array{'address'?: AddressInput|array<array-key, mixed>|\stdClass, 'api_version'?: string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_pinned_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'business_name'?: string, 'business_type'?: string, 'created_at'?: string|\DateTimeInterface, 'email': string|null, 'icon'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'logo'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'metadata'?: array<array-key, string>|\stdClass, 'organization'?: array{'created_at'?: string|\DateTimeInterface, 'name': string, 'organization_id': string, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'organization_id': string, 'phone'?: string, 'readiness': MerchantReadinessInput|array<array-key, mixed>|\stdClass, 'reporting_timezone'?: string, 'status': string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'updated_at'?: string|\DateTimeInterface, 'version': string, 'website_url'?: string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "merchant.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.  Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): object or null. Shape $.id (Required): string. Shape $.idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
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
