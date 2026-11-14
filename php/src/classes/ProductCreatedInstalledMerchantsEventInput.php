<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'active_variant_count'?: int, 'categories': list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'default_variant'?: ProductVariantInput|array<array-key, mixed>|\stdClass, 'default_variant_id'?: string, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'is_available_for_sale'?: bool, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_set_id': string|null, 'name': string, 'option_count'?: int, 'options': list<ProductOptionInput|array<array-key, mixed>|\stdClass>, 'price_range'?: ProductPriceRangeInput|array<array-key, mixed>|\stdClass, 'product_id': string, 'product_type': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'variant_count'?: int, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductCreatedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'active_variant_count'?: int, 'categories': list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'default_variant'?: ProductVariantInput|array<array-key, mixed>|\stdClass, 'default_variant_id'?: string, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'is_available_for_sale'?: bool, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_set_id': string|null, 'name': string, 'option_count'?: int, 'options': list<ProductOptionInput|array<array-key, mixed>|\stdClass>, 'price_range'?: ProductPriceRangeInput|array<array-key, mixed>|\stdClass, 'product_id': string, 'product_type': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'variant_count'?: int, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductCreatedInstalledMerchantsEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object and {@see WebhookProductInput}. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count (Optional): integer. Number of active variants belonging to the product. Format: int32. object.categories (Required): Array of {@see CategoryReferenceInput}. Always present. Empty collections are returned as []. object.categories[] (Value): {@see CategoryReferenceInput}. A reference to a product category by ID, handle, and name. object.created_at (Optional): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.default_variant (Optional): {@see ProductVariantInput}. The product's default variant, when one is set. A specific purchasable version of a product. object.default_variant_id (Optional): string. Identifier of the variant chosen as this product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". object.delivery_configuration_status (Required): string. Delivery readiness aggregated across the product's non-archived variants. Value enum: "configured", "action_required", "not_applicable". object.description (Optional): string. Description of the product shown to buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images (Required): Array of {@see ImageAttachmentInput}. Images attached to this resource, in display order. The first image is primary. object.images[] (Value): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata. object.is_available_for_sale (Optional): boolean. Whether the product is active and has at least one active variant. object.merchant_id (Optional): string. Identifier of the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@see MetadataMapInput}. Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.modifier_set_id (Required): string or null. Attached modifier set. Null when no modifier set is assigned. Send null on update to remove it. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown to buyers. object.option_count (Optional): integer. Number of active options belonging to the product. Format: int32. object.options (Required): Array of {@see ProductOptionInput}. Product options and their non-archived values. Empty when the product has no options. object.options[] (Value): {@see ProductOptionInput}. A choice that defines a product's variants. object.price_range (Optional): {@see ProductPriceRangeInput}. Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ. The lowest and highest unit prices across a product's variants. object.product_id (Required): string. Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required): string. Product lifecycle status. Archived products remain readable and cannot be edited. Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived variants belonging to the product. Format: int32. object.version (Required): integer. Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'active_variant_count'?: int, 'categories': list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'default_variant'?: ProductVariantInput|array<array-key, mixed>|\stdClass, 'default_variant_id'?: string, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'is_available_for_sale'?: bool, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_set_id': string|null, 'name': string, 'option_count'?: int, 'options': list<ProductOptionInput|array<array-key, mixed>|\stdClass>, 'price_range'?: ProductPriceRangeInput|array<array-key, mixed>|\stdClass, 'product_id': string, 'product_type': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'variant_count'?: int, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "installed_merchants".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "product.created".
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
    /** The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. environment_grant_id (Required): string. The grant authorizing delivery from this merchant environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required): string. Whether the installed merchant event came from live mode or a sandbox. Value enum: "test", "live". partner_app_install_id (Required): string. The install connecting the merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id (Optional): string. The sandbox the event came from, present only in test mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object
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
