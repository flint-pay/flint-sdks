<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutSessionClosedMerchantEventDataObject $object
 * @property-read ?CheckoutSessionClosedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionClosedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, 'previous_attributes'?: object{'active_payment_attempt'?: mixed, 'buyer_contact'?: mixed, 'buyer_fields'?: mixed, 'can_apply_promotion_code'?: mixed, 'checkout_session_id'?: mixed, 'client_reference'?: mixed, 'closed_reason_message'?: mixed, 'created_at'?: mixed, 'custom_field_answers'?: mixed, 'custom_text'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'delivery'?: mixed, 'delivery_method_ids'?: mixed, 'delivery_selection_required'?: mixed, 'expires_at'?: mixed, 'expires_in_seconds'?: mixed, 'external_reference_id'?: mixed, 'gift_card_challenge'?: mixed, 'inventory_reservation_ids'?: mixed, 'invoice'?: mixed, 'invoice_id'?: mixed, 'is_in_recovery'?: mixed, 'legal'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'page_origin'?: mixed, 'payment_collection'?: mixed, 'payment_intent_ids'?: mixed, 'payment_intents'?: mixed, 'payment_link'?: mixed, 'payment_link_id'?: mixed, 'payment_return_url'?: mixed, 'payments'?: mixed, 'prefill'?: mixed, 'problems'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'refunds'?: mixed, 'setup_collection'?: mixed, 'status'?: mixed, 'subscription_plan_id'?: mixed, 'subscription_terms'?: mixed, 'superseding_checkout_session_id'?: mixed, 'supported_actions'?: mixed, 'surface'?: mixed, 'tax'?: mixed, 'terminal_reason'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionClosedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`, `save_payment_method_types`, `save_payment_method_requires_verification`, `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`.
     * @return CheckoutSessionClosedMerchantEventDataObject
     */
    public function getObject(): CheckoutSessionClosedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?CheckoutSessionClosedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?CheckoutSessionClosedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
