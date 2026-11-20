<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read CreditNoteVoidedMerchantEventDataObject $object
 * @property-read ?CreditNoteVoidedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteVoidedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'allocated_money': mixed, 'available_money': mixed, 'buyer_tax_identity': mixed, 'created_at': string, 'credit_note_id': string, 'credit_note_number'?: string, 'external_reference_id': string|null, 'invoice'?: mixed, 'invoice_id': string, 'issued_at'?: string, 'latest_refund_status'?: string, 'line_items': list<mixed>, 'memo': string|null, 'merchant_id': string, 'pending_refund_money': mixed, 'reason': string, 'refunded_money': mixed, 'seller_tax_identity': mixed, 'status': string, 'supported_actions': list<string>, 'tax_currency_conversions': list<mixed>, 'total_money': mixed, 'updated_at': string, 'version': int, 'voided_at'?: string}, 'previous_attributes'?: object{'allocated_money'?: mixed, 'available_money'?: mixed, 'buyer_tax_identity'?: mixed, 'created_at'?: mixed, 'credit_note_id'?: mixed, 'credit_note_number'?: mixed, 'external_reference_id'?: mixed, 'invoice'?: mixed, 'invoice_id'?: mixed, 'issued_at'?: mixed, 'latest_refund_status'?: mixed, 'line_items'?: mixed, 'memo'?: mixed, 'merchant_id'?: mixed, 'pending_refund_money'?: mixed, 'reason'?: mixed, 'refunded_money'?: mixed, 'seller_tax_identity'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'tax_currency_conversions'?: mixed, 'total_money'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'voided_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteVoidedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return CreditNoteVoidedMerchantEventDataObject
     */
    public function getObject(): CreditNoteVoidedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?CreditNoteVoidedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?CreditNoteVoidedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
