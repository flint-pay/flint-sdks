<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentAttemptProcessingInstalledMerchantsEventDataObject $object
 * @property-read ?InvoicePaymentAttemptProcessingInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentAttemptProcessingInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'canceled_at'?: string, 'cancellation_requested_at'?: string, 'checkout_session_id'?: string, 'expected_amount_money': mixed, 'expires_at'?: string, 'idempotency_key'?: string|null, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: mixed, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string, 'started_at'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string}, 'previous_attributes'?: object{'canceled_at'?: mixed, 'cancellation_requested_at'?: mixed, 'checkout_session_id'?: mixed, 'expected_amount_money'?: mixed, 'expires_at'?: mixed, 'idempotency_key'?: mixed, 'invoice_id'?: mixed, 'invoice_payment_attempt_id'?: mixed, 'invoice_schedule_entry_id'?: mixed, 'last_payment_error'?: mixed, 'payment_intent_id'?: mixed, 'rail'?: mixed, 'settled_at'?: mixed, 'started_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptProcessingInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return InvoicePaymentAttemptProcessingInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoicePaymentAttemptProcessingInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?InvoicePaymentAttemptProcessingInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?InvoicePaymentAttemptProcessingInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
