<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'available_for_sale': bool, 'barcode'?: string, 'created_at'?: string|\DateTimeInterface, 'delivery_configuration_reason'?: string, 'delivery_configuration_status': string, 'delivery_profile_id'?: string, 'effective_images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'external_reference_id'?: string, 'gift_card_configuration'?: GiftCardProductConfigurationInput|array<array-key, mixed>|\stdClass, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'images_inherited': bool, 'inventory_item_id'?: string, 'inventory_tracking': string, 'line_item_tax_category'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_set'?: array{'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_groups': list<ModifierSetGroupInput|array<array-key, mixed>|\stdClass>, 'modifier_set_id': string, 'name': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'modifier_set_id': string|null, 'name'?: string, 'position': int, 'product_id': string, 'selected_options': list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'status': string, 'taxable'?: bool, 'unit_dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'unit_weight'?: WeightInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'variant_id': string, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_product_variant_created_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'available_for_sale': bool, 'barcode'?: string, 'created_at'?: string|\DateTimeInterface, 'delivery_configuration_reason'?: string, 'delivery_configuration_status': string, 'delivery_profile_id'?: string, 'effective_images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'external_reference_id'?: string, 'gift_card_configuration'?: GiftCardProductConfigurationInput|array<array-key, mixed>|\stdClass, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'images_inherited': bool, 'inventory_item_id'?: string, 'inventory_tracking': string, 'line_item_tax_category'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_set'?: array{'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_groups': list<ModifierSetGroupInput|array<array-key, mixed>|\stdClass>, 'modifier_set_id': string, 'name': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'modifier_set_id': string|null, 'name'?: string, 'position': int, 'product_id': string, 'selected_options': list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'status': string, 'taxable'?: bool, 'unit_dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'unit_weight'?: WeightInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'variant_id': string, 'version': string, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_product_variant_created_merchantInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see ProductVariantInput}. A specific purchasable version of a product. Shape $.object.available_for_sale (Required): boolean. Whether the variant and its product are both active. Shape $.object.barcode (Optional): string. Barcode assigned to this sellable item. Shape $.object.created_at (Optional): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Shape $.object.delivery_configuration_reason (Optional): string. Reason the variant's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive". Shape $.object.delivery_configuration_status (Required): string. Whether the variant's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable". Shape $.object.delivery_profile_id (Optional): string. Identifier of the delivery profile assigned to this variant. Shape $.object.effective_images (Required): Array of {@see ImageAttachmentInput}. Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. Shape $.object.effective_images[] (Value): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata. Shape $.object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Shape $.object.gift_card_configuration (Optional): {@see GiftCardProductConfigurationInput}. Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. Shape $.object.images (Required): Array of {@see ImageAttachmentInput}. The variant's own images in display order. An empty gallery inherits the product's images. Shape $.object.images[] (Value): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata. Shape $.object.images_inherited (Required): boolean. Whether effective_images comes from the product's gallery because this variant's gallery is empty. Shape $.object.inventory_item_id (Optional): string. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Shape $.object.inventory_tracking (Required): string. Whether sales of this variant consume an inventory item. Value enum: "not_tracked", "tracked". Shape $.object.line_item_tax_category (Optional): string. Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". Shape $.object.merchant_id (Optional): string. Identifier of the merchant that owns this resource. Shape $.object.metadata (Optional): Map of string. Caller-owned metadata stored on this resource. Shape $.object.metadata.* (Value): string. Shape $.object.modifier_set (Optional): {@see ModifierSetInput} or null. Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Shape $.object.modifier_set.anyOf[1] (Value): {@see ModifierSetInput}. A reusable collection of customization groups. Shape $.object.modifier_set.anyOf[2] (Value): null. Shape $.object.modifier_set_id (Required): string or null. Attached modifier set. Send null on update to remove it. Shape $.object.name (Optional): string. Variant name that distinguishes it from the product's other variants. Shape $.object.position (Required): integer. Display order among the product's variants, starting at zero. Format: int32. Shape $.object.product_id (Required): string. Identifier of the product this variant belongs to. Shape $.object.selected_options (Required): Array of {@see SelectedProductOptionInput}. Always present. Empty collections are returned as []. Shape $.object.selected_options[] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large. Shape $.object.sku (Optional): string. Stock keeping unit assigned to this sellable item. Shape $.object.status (Required): string. Variant lifecycle status. Archived variants remain readable and cannot be edited. Value enum: "active", "inactive", "archived". Shape $.object.taxable (Optional): boolean. Whether this item is subject to tax. Shape $.object.unit_dimensions (Optional): {@see DimensionsInput}. Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. Shape $.object.unit_price_money (Required): {@see MoneyValueInput}. Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.unit_weight (Optional): {@see WeightInput}. Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. Shape $.object.updated_at (Optional): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. Shape $.object.variant_id (Required): string. Stable identifier of the product variant. Shape $.object.version (Required): integer string. Current resource version. Send it as expected_version to reject a write if the resource has changed. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return array{'object': array{'available_for_sale': bool, 'barcode'?: string, 'created_at'?: string|\DateTimeInterface, 'delivery_configuration_reason'?: string, 'delivery_configuration_status': string, 'delivery_profile_id'?: string, 'effective_images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'external_reference_id'?: string, 'gift_card_configuration'?: GiftCardProductConfigurationInput|array<array-key, mixed>|\stdClass, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'images_inherited': bool, 'inventory_item_id'?: string, 'inventory_tracking': string, 'line_item_tax_category'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_set'?: array{'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_groups': list<ModifierSetGroupInput|array<array-key, mixed>|\stdClass>, 'modifier_set_id': string, 'name': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'modifier_set_id': string|null, 'name'?: string, 'position': int, 'product_id': string, 'selected_options': list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'status': string, 'taxable'?: bool, 'unit_dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'unit_weight'?: WeightInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'variant_id': string, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "product_variant.created".
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
