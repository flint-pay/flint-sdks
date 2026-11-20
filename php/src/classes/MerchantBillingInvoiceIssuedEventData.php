<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read MerchantBillingInvoiceIssuedEventDataObject $object
 * @property-read ?MerchantBillingInvoiceIssuedEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingInvoiceIssuedEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'applied_credit_money': mixed, 'created_at': string, 'due_at': string, 'invoice_number': string, 'issued_at': string, 'line_items': list<mixed>, 'merchant_billing_invoice_id': string, 'outstanding_money': mixed, 'paid_at'?: string, 'period_end_at': string, 'period_start_at': string, 'status': string, 'subtotal_money': mixed, 'total_money': mixed, 'updated_at': string}, 'previous_attributes'?: object{'applied_credit_money'?: mixed, 'created_at'?: mixed, 'due_at'?: mixed, 'invoice_number'?: mixed, 'issued_at'?: mixed, 'line_items'?: mixed, 'merchant_billing_invoice_id'?: mixed, 'outstanding_money'?: mixed, 'paid_at'?: mixed, 'period_end_at'?: mixed, 'period_start_at'?: mixed, 'status'?: mixed, 'subtotal_money'?: mixed, 'total_money'?: mixed, 'updated_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoiceIssuedEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return MerchantBillingInvoiceIssuedEventDataObject
     */
    public function getObject(): MerchantBillingInvoiceIssuedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?MerchantBillingInvoiceIssuedEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?MerchantBillingInvoiceIssuedEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
