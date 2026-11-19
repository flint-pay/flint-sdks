<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RefundPartiallySucceededInstalledMerchantsEventDataObject $object
 * @property-read ?RefundPartiallySucceededInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class RefundPartiallySucceededInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'amount_money': mixed, 'charge_allocations'?: list<mixed>, 'created_at': string, 'credit_adjustment_money': mixed, 'credit_note_id'?: string, 'customer'?: mixed, 'customer_id'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'idempotency_key': string|null, 'initiated_by': string, 'invoice_id'?: string, 'line_item_allocations'?: list<mixed>, 'merchant_id': string, 'metadata'?: mixed, 'order'?: mixed, 'order_edit_id'?: string, 'order_id'?: string, 'payment_intent'?: mixed, 'payment_intent_id'?: string, 'payment_refunds'?: list<mixed>, 'payment_review_id'?: string, 'pending_reason': string|null, 'processed_by': string, 'reason': string|null, 'reason_message'?: string, 'refund_id': string, 'refund_platform_fee': bool, 'refund_reference'?: string, 'refunded_at'?: string, 'refunded_tip_money': mixed, 'return_id'?: string, 'return_resolution_id'?: string, 'status': string, 'succeeded_at'?: string, 'tax_breakdown_refunds'?: list<mixed>, 'tender_allocations'?: list<mixed>, 'unissued_gift_card_recoveries'?: list<mixed>, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'amount_money'?: mixed, 'charge_allocations'?: mixed, 'created_at'?: mixed, 'credit_adjustment_money'?: mixed, 'credit_note_id'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'external_reference_id'?: mixed, 'failure_reason'?: mixed, 'idempotency_key'?: mixed, 'initiated_by'?: mixed, 'invoice_id'?: mixed, 'line_item_allocations'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_edit_id'?: mixed, 'order_id'?: mixed, 'payment_intent'?: mixed, 'payment_intent_id'?: mixed, 'payment_refunds'?: mixed, 'payment_review_id'?: mixed, 'pending_reason'?: mixed, 'processed_by'?: mixed, 'reason'?: mixed, 'reason_message'?: mixed, 'refund_id'?: mixed, 'refund_platform_fee'?: mixed, 'refund_reference'?: mixed, 'refunded_at'?: mixed, 'refunded_tip_money'?: mixed, 'return_id'?: mixed, 'return_resolution_id'?: mixed, 'status'?: mixed, 'succeeded_at'?: mixed, 'tax_breakdown_refunds'?: mixed, 'tender_allocations'?: mixed, 'unissued_gift_card_recoveries'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundPartiallySucceededInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return RefundPartiallySucceededInstalledMerchantsEventDataObject
     */
    public function getObject(): RefundPartiallySucceededInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?RefundPartiallySucceededInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?RefundPartiallySucceededInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
