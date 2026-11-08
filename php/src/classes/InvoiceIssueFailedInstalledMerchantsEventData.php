<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceIssueFailedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceIssueFailedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'cc_emails': list<string>, 'closed_at'?: string, 'collection': mixed, 'collection_block_status': string, 'created_at': string, 'credit_money': mixed, 'currently_due_money': mixed, 'customer'?: mixed, 'customer_id'?: string, 'delivery_mode'?: string, 'due_date'?: string, 'external_reference_id': string|null, 'footer': string|null, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'issued_at'?: string, 'late_fee_money': mixed, 'late_fees': list<mixed>, 'memo': string|null, 'merchant_id': string, 'metadata'?: mixed, 'order'?: mixed, 'order_id': string, 'outstanding_money': mixed, 'paid_at'?: string, 'paid_money': mixed, 'payment_due': mixed, 'payment_terms_snapshot'?: mixed, 'po_number': string|null, 'public_url'?: string, 'recipient_email': string|null, 'reference': string|null, 'refund_status': string, 'refunded_money': mixed, 'reminders_paused': bool, 'reminders_paused_at'?: string, 'remit_to_address'?: mixed, 'schedule_entries': list<mixed>, 'scheduled_issue_at': string|null, 'service_date': string|null, 'snapshot'?: mixed, 'status': string, 'subscription_id': string|null, 'supported_actions': list<string>, 'timezone'?: string, 'total_money': mixed, 'uncollectible_at'?: string, 'updated_at': string, 'version': int, 'viewed_at'?: string, 'voided_at'?: string, 'written_off_money': mixed}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceIssueFailedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
     * @return InvoiceIssueFailedInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoiceIssueFailedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
