<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderPaidMerchantEventDataObject $object
 * @property-read ?OrderPaidMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class OrderPaidMerchantEventData extends Model {
    /** @param array{'object': \stdClass, 'previous_attributes'?: object{'active_payment_review_id'?: mixed, 'authorization_amounts'?: mixed, 'buyer_contact'?: mixed, 'buyer_note'?: mixed, 'charges'?: mixed, 'checkout_billing_contact'?: mixed, 'checkout_session_ids'?: mixed, 'client_reference'?: mixed, 'closed_at'?: mixed, 'closed_reason'?: mixed, 'closed_reason_message'?: mixed, 'created_at'?: mixed, 'custom_field_answers'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'deferred_promotions'?: mixed, 'delivery'?: mixed, 'delivery_destination'?: mixed, 'discounts'?: mixed, 'dispute_status'?: mixed, 'external_reference_id'?: mixed, 'fulfillment_status'?: mixed, 'fulfillments'?: mixed, 'gift_card_estimate'?: mixed, 'gift_card_settlements'?: mixed, 'gift_card_tender_enabled'?: mixed, 'gift_cards'?: mixed, 'governing_delivery_selection_id'?: mixed, 'handover'?: mixed, 'internal_note'?: mixed, 'inventory_exception_reason'?: mixed, 'inventory_exception_resolution_message'?: mixed, 'inventory_exception_status'?: mixed, 'inventory_reservation_id'?: mixed, 'inventory_routing_source'?: mixed, 'invoice_id'?: mixed, 'line_items'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'order_id'?: mixed, 'order_number'?: mixed, 'origin'?: mixed, 'paid_at'?: mixed, 'payment_intent_ids'?: mixed, 'payment_intents'?: mixed, 'payment_link_id'?: mixed, 'payment_status'?: mixed, 'pending_order_edit_id'?: mixed, 'prepayment_order_id'?: mixed, 'pricing_amounts'?: mixed, 'refund_ids'?: mixed, 'refund_status'?: mixed, 'return_credit_settlements'?: mixed, 'return_resolution_id'?: mixed, 'settlement_amounts'?: mixed, 'status'?: mixed, 'subscription'?: mixed, 'subscription_cycle'?: mixed, 'subscription_delivery_changed_at'?: mixed, 'subscription_delivery_number'?: mixed, 'subscription_id'?: mixed, 'subscription_plan'?: mixed, 'subscription_plan_id'?: mixed, 'supported_actions'?: mixed, 'tax'?: mixed, 'ticketed_event'?: mixed, 'tips'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaidMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `buyer_actions`, `active_payment_attempt`, `payment_collection`, `setup_collection`.
     * @return OrderPaidMerchantEventDataObject
     */
    public function getObject(): OrderPaidMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?OrderPaidMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?OrderPaidMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
