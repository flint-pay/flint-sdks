<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentIntentCanceledMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PaymentIntentCanceledMerchantEventData extends Model {
    /** @param array{'object': object{'add_on_fees'?: list<mixed>, 'amount_money': mixed, 'authorization_expires_at'?: string, 'authorized_at'?: string, 'authorized_money'?: mixed, 'cancellation_reason'?: string, 'capturable_money'?: mixed, 'capture_method'?: string, 'captured_at'?: string, 'captured_money'?: mixed, 'captured_tip_money'?: mixed, 'checkout_session_id'?: string, 'created_at'?: string, 'customer'?: mixed, 'customer_id'?: string, 'customer_presence': string, 'dispute_status'?: string, 'external_reference_id'?: string|null, 'fulfillment_hold'?: mixed, 'invoice'?: mixed, 'invoice_id'?: string, 'last_payment_error': mixed, 'latest_order_payment_attempt_id'?: string|null, 'merchant_id'?: string, 'merchant_net_money'?: mixed, 'metadata': mixed, 'order'?: mixed, 'order_id'?: string, 'overcapture'?: mixed, 'payment_flow': string, 'payment_intent_id': string, 'payment_options': list<string>, 'payment_source'?: mixed, 'platform_fee'?: mixed, 'processing_fee_money'?: mixed, 'reader_id'?: string, 'receipt_email'?: string|null, 'refund_expires_at': string|null, 'refund_status'?: string, 'refunded_money'?: mixed, 'released_money'?: mixed, 'request_overcapture'?: bool, 'return_id'?: string, 'return_resolution_id'?: string, 'risk'?: mixed, 'selected_payment_option'?: string, 'splits'?: list<mixed>, 'statement_descriptor': string|null, 'status': string, 'subscription_id'?: string, 'support_reference': string, 'supported_actions': list<string>, 'tip_money'?: mixed, 'transaction_purpose'?: string, 'updated_at'?: string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentCanceledMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`.
     * @return PaymentIntentCanceledMerchantEventDataObject
     */
    public function getObject(): PaymentIntentCanceledMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
