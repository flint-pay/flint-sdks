<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentAttemptSucceededMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentAttemptSucceededMerchantEventData extends Model {
    /** @param array{'object': object{'canceled_at'?: string, 'cancellation_requested_at'?: string, 'checkout_session_id'?: string, 'expected_amount_money': mixed, 'expires_at'?: string, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: mixed, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string, 'started_at'?: string, 'status': string, 'updated_at': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptSucceededMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return InvoicePaymentAttemptSucceededMerchantEventDataObject
     */
    public function getObject(): InvoicePaymentAttemptSucceededMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
