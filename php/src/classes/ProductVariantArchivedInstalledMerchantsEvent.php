<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string $created_at
 * @property-read ProductVariantArchivedInstalledMerchantsEventData $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read ProductVariantArchivedInstalledMerchantsEventSource $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantArchivedInstalledMerchantsEvent extends Model {
    /** @param array{'api_version': string, 'created_at': string, 'data': object{'object': object{'barcode'?: string, 'created_at'?: string, 'delivery_configuration_reason'?: string, 'delivery_configuration_status': string, 'delivery_profile_id'?: string, 'effective_images': list<mixed>, 'external_reference_id'?: string, 'gift_card_configuration'?: mixed, 'images': list<mixed>, 'inventory_availability'?: mixed, 'inventory_item_id'?: string, 'inventory_tracking': string, 'is_available_for_sale': bool, 'is_inheriting_product_images': bool, 'line_item_tax_category'?: string, 'merchant_id'?: string, 'metadata'?: mixed, 'modifier_set'?: mixed, 'modifier_set_id': string|null, 'name'?: string, 'position': int, 'product_id': string, 'quantity_price_breaks': list<mixed>, 'release_date': string|null, 'selected_options': list<mixed>, 'sku'?: string, 'status': string, 'taxable'?: bool, 'unit_dimensions'?: mixed, 'unit_price_money': mixed, 'unit_weight'?: mixed, 'updated_at'?: string, 'variant_id': string, 'version': int}, 'previous_attributes'?: \stdClass}, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': object{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantArchivedInstalledMerchantsEvent')); }
    /** API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: date.
     * @return string
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When Flint recorded the event. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The resource snapshot recorded for this event and rendered at the delivery API version.
     * @return ProductVariantArchivedInstalledMerchantsEventData
     */
    public function getData(): ProductVariantArchivedInstalledMerchantsEventData { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "installed_merchants".
     * @return string
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "product_variant.archived".
     * @return string
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the partner app that owns the receiving endpoint.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.
     * @return ProductVariantArchivedInstalledMerchantsEventSource
     */
    public function getSource(): ProductVariantArchivedInstalledMerchantsEventSource { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Stable ID of the recorded webhook event, shared by its delivery attempts.
     * @return string
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
