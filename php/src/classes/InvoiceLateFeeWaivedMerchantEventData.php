<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read InvoiceLateFeeWaivedMerchantEventDataObject $object
 * @property-read ?InvoiceLateFeeWaivedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceLateFeeWaivedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': \stdClass, 'previous_attributes'?: object{'cc_emails'?: mixed, 'closed_at'?: mixed, 'collection'?: mixed, 'collection_block_status'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'delivery_mode'?: mixed, 'due_date'?: mixed, 'external_reference_id'?: mixed, 'footer'?: mixed, 'idempotency_key'?: mixed, 'invoice_id'?: mixed, 'invoice_number'?: mixed, 'is_overdue'?: mixed, 'issued_at'?: mixed, 'late_fees'?: mixed, 'memo'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'paid_at'?: mixed, 'payment_due'?: mixed, 'payment_terms_snapshot'?: mixed, 'platform_fee_rule'?: mixed, 'po_number'?: mixed, 'pricing_amounts'?: mixed, 'recipient_email'?: mixed, 'reference'?: mixed, 'refund_status'?: mixed, 'reminders_paused'?: mixed, 'reminders_paused_at'?: mixed, 'remit_to_address'?: mixed, 'schedule_entries'?: mixed, 'scheduled_issue_at'?: mixed, 'service_date'?: mixed, 'settlement_amounts'?: mixed, 'snapshot'?: mixed, 'status'?: mixed, 'subscription_id'?: mixed, 'supported_actions'?: mixed, 'timezone'?: mixed, 'uncollectible_at'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'viewed_at'?: mixed, 'voided_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLateFeeWaivedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
     * @return InvoiceLateFeeWaivedMerchantEventDataObject
     */
    public function getObject(): InvoiceLateFeeWaivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?InvoiceLateFeeWaivedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?InvoiceLateFeeWaivedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
