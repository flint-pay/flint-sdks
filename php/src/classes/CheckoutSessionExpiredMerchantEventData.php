<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutSessionExpiredMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionExpiredMerchantEventData extends Model {
    /** @param array{'object': object{'active_payment_attempt'?: mixed, 'buyer_contact'?: mixed, 'buyer_fields'?: mixed, 'can_apply_promotion_code': bool, 'can_save_payment_method'?: bool, 'can_save_payment_method_with_phone'?: bool, 'checkout_session_id': string, 'client_reference': string|null, 'closed_reason_message'?: string, 'created_at': string, 'custom_field_answers': list<mixed>, 'custom_text'?: mixed, 'customer'?: mixed, 'customer_id'?: string, 'customer_prefill'?: mixed, 'delivery'?: mixed, 'delivery_method_ids': list<string>, 'delivery_selection_required': bool, 'expires_at'?: string, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'gift_card_challenge'?: mixed, 'inventory_reservation_ids'?: list<string>, 'invoice'?: mixed, 'invoice_id'?: string, 'is_in_recovery': bool, 'legal'?: mixed, 'merchant_icon'?: mixed, 'merchant_id': string, 'merchant_logo'?: mixed, 'merchant_name'?: string, 'merchant_support'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: string, 'page_origin'?: string, 'pay_to_new_address_requires_verification'?: bool, 'payment_collection'?: mixed, 'payment_intent_ids'?: list<string>, 'payment_intents'?: list<mixed>, 'payment_link'?: mixed, 'payment_link_id'?: string, 'payment_link_image'?: mixed, 'payment_method_save'?: mixed, 'payment_return_url'?: string, 'payments'?: mixed, 'platform_fee'?: mixed, 'prefill'?: mixed, 'problems': list<mixed>, 'promotion_config'?: mixed, 'recovery_expires_at'?: string|null, 'recovery_payment_attempt_id'?: string, 'redirects'?: mixed, 'refunds'?: list<mixed>, 'save_payment_method_requires_verification'?: bool, 'save_payment_method_types'?: list<string>, 'setup_collection'?: mixed, 'show_flint_mark'?: bool, 'status': string, 'subscription_plan_id'?: string, 'subscription_terms'?: mixed, 'superseding_checkout_session_id'?: string, 'supported_actions': list<string>, 'surface': string, 'tax'?: mixed, 'terminal_reason'?: string, 'theme'?: mixed, 'tip'?: mixed, 'type': string, 'updated_at': string, 'url'?: string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionExpiredMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`, `save_payment_method_types`, `save_payment_method_requires_verification`, `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`.
     * @return CheckoutSessionExpiredMerchantEventDataObject
     */
    public function getObject(): CheckoutSessionExpiredMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
