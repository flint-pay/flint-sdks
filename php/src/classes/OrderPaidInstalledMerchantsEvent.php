<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string $created_at
 * @property-read OrderPaidInstalledMerchantsEventData $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read OrderPaidInstalledMerchantsEventSource $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderPaidInstalledMerchantsEvent extends Model {
    /** @param array{'api_version': string, 'created_at': string, 'data': object{'object': object{'active_payment_attempt'?: mixed, 'authorization_amounts'?: mixed, 'buyer_contact'?: mixed, 'buyer_note'?: string, 'charges': list<mixed>, 'checkout_session_ids': list<string>, 'client_reference': string|null, 'closed_at'?: string, 'closed_reason'?: string, 'closed_reason_message'?: string, 'created_at': string, 'custom_field_answers': list<mixed>, 'customer'?: mixed, 'customer_id'?: string, 'deferred_promotions': list<mixed>, 'delivery_destination'?: mixed, 'discounts': list<mixed>, 'external_reference_id'?: string, 'fulfillment_status'?: string, 'fulfillments': list<mixed>, 'gift_card_estimate'?: mixed, 'gift_card_settlements': list<mixed>, 'gift_card_tender_enabled': bool, 'gift_cards': list<mixed>, 'governing_delivery_selection_id': string|null, 'internal_note'?: string, 'inventory_exception_reason'?: string, 'inventory_exception_resolution_message'?: string, 'inventory_exception_status'?: string, 'inventory_reservation_id'?: string, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'merchant_id': string, 'metadata'?: mixed, 'order_id': string, 'order_number'?: string, 'origin'?: string, 'paid_at': string|null, 'payment_collection'?: mixed, 'payment_intent_ids': list<string>, 'payment_intents'?: list<mixed>, 'payment_link_id'?: string, 'payment_status': string, 'pricing_amounts': mixed, 'refund_ids': list<string>, 'refund_status': string, 'return_credit_settlements': list<mixed>, 'return_resolution_id'?: string, 'settlement_amounts': mixed, 'setup_collection'?: mixed, 'status': string, 'subscription'?: mixed, 'subscription_cycle'?: int, 'subscription_delivery_changed_at'?: string, 'subscription_id'?: string, 'subscription_plan'?: mixed, 'subscription_plan_id'?: string, 'supported_actions': list<string>, 'tax': mixed, 'ticketed_event'?: mixed, 'tips': list<mixed>, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass}, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': object{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaidInstalledMerchantsEvent')); }
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
     * @return OrderPaidInstalledMerchantsEventData
     */
    public function getData(): OrderPaidInstalledMerchantsEventData { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "installed_merchants".
     * @return string
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "order.paid".
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
     * @return OrderPaidInstalledMerchantsEventSource
     */
    public function getSource(): OrderPaidInstalledMerchantsEventSource { return $this->get('source'); }
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
