<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceManualPaymentReversedMerchantEventDataObject $object
 * @property-read ?InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceManualPaymentReversedMerchantEventData extends Model {
    /** @param array{'object': object{'amount_money': mixed, 'idempotency_key'?: string|null, 'invoice_id': string, 'invoice_manual_payment_id': string, 'note'?: string, 'payment_reference'?: string, 'received_at': string, 'reversal_note'?: string, 'reversed_at'?: string, 'status': string, 'supported_actions': list<string>}, 'previous_attributes'?: object{'amount_money'?: mixed, 'idempotency_key'?: mixed, 'invoice_id'?: mixed, 'invoice_manual_payment_id'?: mixed, 'note'?: mixed, 'payment_reference'?: mixed, 'received_at'?: mixed, 'reversal_note'?: mixed, 'reversed_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceManualPaymentReversedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return InvoiceManualPaymentReversedMerchantEventDataObject
     */
    public function getObject(): InvoiceManualPaymentReversedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
