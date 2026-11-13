<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RefundCreatedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class RefundCreatedMerchantEventData extends Model {
    /** @param array{'object': object{'amount_money': mixed, 'created_at': string, 'credit_note_id'?: string, 'customer'?: mixed, 'customer_id'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'idempotency_key'?: string, 'initiated_by': string, 'invoice_id'?: string, 'line_item_allocations'?: list<mixed>, 'merchant_id': string, 'metadata'?: mixed, 'order'?: mixed, 'order_edit_id'?: string, 'order_id'?: string, 'payment_intent'?: mixed, 'payment_intent_id'?: string, 'payment_refunds'?: list<mixed>, 'payment_review_id'?: string, 'pending_reason': string|null, 'processed_by': string, 'reason': string|null, 'reason_message'?: string, 'refund_id': string, 'refund_platform_fee': bool, 'refund_reference'?: string, 'refunded_at'?: string, 'refunded_tip_money': mixed, 'return_id'?: string, 'return_resolution_id'?: string, 'status': string, 'succeeded_at'?: string, 'tax_breakdown_refunds'?: list<mixed>, 'tender_allocations'?: list<mixed>, 'unissued_gift_card_recoveries'?: list<mixed>, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundCreatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return RefundCreatedMerchantEventDataObject
     */
    public function getObject(): RefundCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
