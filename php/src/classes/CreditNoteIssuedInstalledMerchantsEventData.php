<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteIssuedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteIssuedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'allocated_money': mixed, 'available_money': mixed, 'buyer_tax_identity': mixed, 'created_at': string, 'credit_note_id': string, 'credit_note_number'?: string, 'external_reference_id': string|null, 'invoice'?: mixed, 'invoice_id': string, 'issued_at'?: string, 'latest_refund_status'?: string, 'line_items': list<mixed>, 'memo': string|null, 'merchant_id': string, 'pending_refund_money': mixed, 'reason': string, 'refunded_money': mixed, 'seller_tax_identity': mixed, 'status': string, 'supported_actions': list<string>, 'tax_currency_conversions': list<mixed>, 'total_money': mixed, 'updated_at': string, 'version': int, 'voided_at'?: string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteIssuedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return CreditNoteIssuedInstalledMerchantsEventDataObject
     */
    public function getObject(): CreditNoteIssuedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
