<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'buyer_fields'?: CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass, 'checkout_session_expires_in_seconds': int|null, 'created_at': string|\DateTimeInterface, 'currency': string|null, 'custom_text'?: CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids': list<string>, 'description': string|null, 'external_reference_id': string|null, 'handle': string|null, 'image': array{'alt'?: string, 'file_id'?: string, 'height': int, 'source_reference'?: string, 'url': string, 'width': int, ...}|object|null, 'inactive_message': string|null, 'inventory_routing_source': array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null, 'legal'?: CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass, 'listing_count': int, 'merchant_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass, 'redirects': CheckoutRedirectsInput|array<array-key, mixed>|\stdClass, 'shop_id': string, 'status': string, 'tax'?: CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'url': string, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class ShopCreatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'buyer_fields'?: CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass, 'checkout_session_expires_in_seconds': int|null, 'created_at': string|\DateTimeInterface, 'currency': string|null, 'custom_text'?: CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids': list<string>, 'description': string|null, 'external_reference_id': string|null, 'handle': string|null, 'image': array{'alt'?: string, 'file_id'?: string, 'height': int, 'source_reference'?: string, 'url': string, 'width': int, ...}|object|null, 'inactive_message': string|null, 'inventory_routing_source': array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null, 'legal'?: CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass, 'listing_count': int, 'merchant_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass, 'redirects': CheckoutRedirectsInput|array<array-key, mixed>|\stdClass, 'shop_id': string, 'status': string, 'tax'?: CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'url': string, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopCreatedMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. actor (Optional): {@see ReturnActorInput}. Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.buyer_fields (Optional): {@see CheckoutBuyerFieldsInput}. Buyer information requested at checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each field you leave out uses your checkout settings. object.checkout_session_expires_in_seconds (Required): integer or null. Checkout lifetime in seconds. Null when checkout settings apply. Format: int64. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string or null. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". object.custom_text (Optional): {@see CheckoutCustomTextConfigInput}. Merchant text shown in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order summary message and a shipping address label. object.delivery_method_ids (Required): Array of string. An empty array follows checkout settings. object.delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.description (Required): string or null. Shop description. Null when unset. object.external_reference_id (Required): string or null. Caller-owned identifier for this resource in an external system. Null when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842". object.handle (Required): string or null. Readable address. Null when a handle has not been assigned. object.image (Required): {@see ImageAttachmentInput} or null. Cover image. Null when unset. object.image.anyOf[1] (Value): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata. object.image.anyOf[2] (Value): null. object.inactive_message (Required): string or null. Inactive message. Null when unset. object.inventory_routing_source (Required): {@see InventoryRoutingSourceInput} or null. Explicit inventory routing. Null when checkout settings apply. object.inventory_routing_source.anyOf[1] (Value): {@see InventoryRoutingSourceInput}. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. object.inventory_routing_source.anyOf[2] (Value): null. object.legal (Optional): {@see CheckoutLegalConfigInput}. Legal policies shown to buyers. Omitted when the shop has no override. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. object.listing_count (Required): integer. The number of listings on the shop, including unavailable entries. Format: int32. object.merchant_id (Required): string. ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required): {@see MetadataMapInput}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.name (Required): string. The title buyers see on the shop. object.payments (Optional): {@see CheckoutPaymentConfigInput}. Payment options for the shop. Omitted when the shop has no override. Payment settings for a checkout: the enabled payment options and a note shown with payment. object.promotion_config (Optional): {@see CheckoutPromotionConfigInput}. Promotion settings for shop checkouts. Omitted when the shop has no override. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. object.redirects (Required): {@see CheckoutRedirectsInput}. Redirects configured for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. object.shop_id (Required): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE". object.status (Required): string. Availability or retirement status. Value enum: "active", "inactive", "archived". object.tax (Optional): {@see CheckoutTaxConfigInput}. Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax is collected for a checkout session or payment link. object.tip (Optional): {@see CheckoutTipConfigInput}. Tipping options for the shop. Omitted when the shop has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url (Required): string. The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. object.version (Required): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'buyer_fields'?: CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass, 'checkout_session_expires_in_seconds': int|null, 'created_at': string|\DateTimeInterface, 'currency': string|null, 'custom_text'?: CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids': list<string>, 'description': string|null, 'external_reference_id': string|null, 'handle': string|null, 'image': array{'alt'?: string, 'file_id'?: string, 'height': int, 'source_reference'?: string, 'url': string, 'width': int, ...}|object|null, 'inactive_message': string|null, 'inventory_routing_source': array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null, 'legal'?: CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass, 'listing_count': int, 'merchant_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass, 'redirects': CheckoutRedirectsInput|array<array-key, mixed>|\stdClass, 'shop_id': string, 'status': string, 'tax'?: CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'url': string, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "shop.created".
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
