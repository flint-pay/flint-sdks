<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderPartiallyRefundedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class OrderPartiallyRefundedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'active_payment_attempt'?: mixed, 'active_payment_review_id': string|null, 'authorization_amounts'?: mixed, 'buyer_contact'?: mixed, 'buyer_note'?: string, 'charges': list<mixed>, 'checkout_session_ids': list<string>, 'client_reference': string|null, 'closed_at'?: string, 'closed_reason'?: string, 'closed_reason_message'?: string, 'created_at': string, 'custom_field_answers': list<mixed>, 'customer'?: mixed, 'customer_id'?: string, 'deferred_promotions': list<mixed>, 'delivery'?: mixed, 'delivery_destination'?: mixed, 'discounts': list<mixed>, 'dispute_status'?: string, 'external_reference_id'?: string, 'fulfillment_status'?: string, 'fulfillments': list<mixed>, 'gift_card_estimate'?: mixed, 'gift_card_settlements': list<mixed>, 'gift_card_tender_enabled': bool, 'gift_cards': list<mixed>, 'governing_delivery_selection_id': string|null, 'handover'?: mixed, 'internal_note'?: string, 'inventory_exception_reason'?: string, 'inventory_exception_resolution_message'?: string, 'inventory_exception_status'?: string, 'inventory_reservation_id'?: string, 'inventory_routing_source'?: mixed, 'invoice_id': string|null, 'line_items': list<mixed>, 'merchant_id': string, 'metadata'?: mixed, 'order_id': string, 'order_number'?: string, 'origin'?: string, 'paid_at': string|null, 'payment_collection'?: mixed, 'payment_intent_ids': list<string>, 'payment_intents'?: list<mixed>, 'payment_link_id'?: string, 'payment_status': string, 'prepayment_order_id': string|null, 'pricing_amounts': mixed, 'refund_ids': list<string>, 'refund_status': string, 'return_credit_settlements': list<mixed>, 'return_resolution_id'?: string, 'settlement_amounts': mixed, 'setup_collection'?: mixed, 'status': string, 'subscription'?: mixed, 'subscription_cycle'?: int, 'subscription_delivery_changed_at'?: string, 'subscription_delivery_number': int|null, 'subscription_id'?: string, 'subscription_plan'?: mixed, 'subscription_plan_id'?: string, 'supported_actions': list<string>, 'tax': mixed, 'ticketed_event'?: mixed, 'tips': list<mixed>, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPartiallyRefundedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_attempt`, `payment_collection`, `setup_collection`.
     * @return OrderPartiallyRefundedInstalledMerchantsEventDataObject
     */
    public function getObject(): OrderPartiallyRefundedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
