<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentIntentSucceededMerchantEventDataObject $object
 * @property-read ?PaymentIntentSucceededMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PaymentIntentSucceededMerchantEventData extends Model {
    /** @param array{'object': \stdClass, 'previous_attributes'?: object{'amount_money'?: mixed, 'authorization_expires_at'?: mixed, 'authorized_at'?: mixed, 'authorized_money'?: mixed, 'cancellation_reason'?: mixed, 'capturable_money'?: mixed, 'capture_method'?: mixed, 'captured_at'?: mixed, 'captured_money'?: mixed, 'captured_tip_money'?: mixed, 'checkout_session_id'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'customer_presence'?: mixed, 'dispute_status'?: mixed, 'external_reference_id'?: mixed, 'failed_attempt_count'?: mixed, 'failed_attempts'?: mixed, 'fulfillment_hold'?: mixed, 'invoice'?: mixed, 'invoice_id'?: mixed, 'invoice_schedule_entry_id'?: mixed, 'last_payment_error'?: mixed, 'latest_order_payment_attempt_id'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_edit_id'?: mixed, 'order_id'?: mixed, 'overcapture'?: mixed, 'payment_flow'?: mixed, 'payment_intent_id'?: mixed, 'payment_options'?: mixed, 'payment_source'?: mixed, 'platform_fee'?: mixed, 'reader_id'?: mixed, 'receipt_email'?: mixed, 'refund_expires_at'?: mixed, 'refund_status'?: mixed, 'refunded_money'?: mixed, 'released_money'?: mixed, 'request_overcapture'?: mixed, 'return_id'?: mixed, 'return_resolution_id'?: mixed, 'risk'?: mixed, 'selected_payment_option'?: mixed, 'splits'?: mixed, 'statement_descriptor'?: mixed, 'status'?: mixed, 'subscription_id'?: mixed, 'support_reference'?: mixed, 'supported_actions'?: mixed, 'tip_money'?: mixed, 'transaction_purpose'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentSucceededMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `processing_fee_money`, `processing_fee_details`, `add_on_fees`, `merchant_net_money`, `payment_collection`.
     * @return PaymentIntentSucceededMerchantEventDataObject
     */
    public function getObject(): PaymentIntentSucceededMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PaymentIntentSucceededMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PaymentIntentSucceededMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
