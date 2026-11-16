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
    /** @param array{'api_version': string, 'created_at': string, 'data': object{'object': \stdClass, 'previous_attributes'?: object{'active_payment_review_id'?: mixed, 'authorization_amounts'?: mixed, 'buyer_contact'?: mixed, 'buyer_note'?: mixed, 'charges'?: mixed, 'checkout_session_ids'?: mixed, 'client_reference'?: mixed, 'closed_at'?: mixed, 'closed_reason'?: mixed, 'closed_reason_message'?: mixed, 'created_at'?: mixed, 'custom_field_answers'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'deferred_promotions'?: mixed, 'delivery'?: mixed, 'delivery_destination'?: mixed, 'discounts'?: mixed, 'dispute_status'?: mixed, 'external_reference_id'?: mixed, 'fulfillment_status'?: mixed, 'fulfillments'?: mixed, 'gift_card_estimate'?: mixed, 'gift_card_settlements'?: mixed, 'gift_card_tender_enabled'?: mixed, 'gift_cards'?: mixed, 'governing_delivery_selection_id'?: mixed, 'handover'?: mixed, 'internal_note'?: mixed, 'inventory_exception_reason'?: mixed, 'inventory_exception_resolution_message'?: mixed, 'inventory_exception_status'?: mixed, 'inventory_reservation_id'?: mixed, 'inventory_routing_source'?: mixed, 'invoice_id'?: mixed, 'line_items'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'order_id'?: mixed, 'order_number'?: mixed, 'origin'?: mixed, 'paid_at'?: mixed, 'payment_intent_ids'?: mixed, 'payment_intents'?: mixed, 'payment_link_id'?: mixed, 'payment_status'?: mixed, 'pending_order_edit_id'?: mixed, 'prepayment_order_id'?: mixed, 'pricing_amounts'?: mixed, 'refund_ids'?: mixed, 'refund_status'?: mixed, 'return_credit_settlements'?: mixed, 'return_resolution_id'?: mixed, 'settlement_amounts'?: mixed, 'status'?: mixed, 'subscription'?: mixed, 'subscription_cycle'?: mixed, 'subscription_delivery_changed_at'?: mixed, 'subscription_delivery_number'?: mixed, 'subscription_id'?: mixed, 'subscription_plan'?: mixed, 'subscription_plan_id'?: mixed, 'supported_actions'?: mixed, 'tax'?: mixed, 'ticketed_event'?: mixed, 'tips'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}}, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': object{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}, 'test': bool, 'webhook_event_id': string, ...}|object $values */
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
