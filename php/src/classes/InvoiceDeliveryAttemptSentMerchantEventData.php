<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read InvoiceDeliveryAttemptSentMerchantEventDataObject $object
 * @property-read ?InvoiceDeliveryAttemptSentMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceDeliveryAttemptSentMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'cc_emails'?: list<string>, 'channel': string, 'created_at': string, 'delivery_type': string, 'failure_reason'?: string, 'invoice_delivery_attempt_id': string, 'invoice_id': string, 'sent_at'?: string, 'status': string, 'suppression_reason'?: string, 'to_email': string|null}, 'previous_attributes'?: object{'cc_emails'?: mixed, 'channel'?: mixed, 'created_at'?: mixed, 'delivery_type'?: mixed, 'failure_reason'?: mixed, 'invoice_delivery_attempt_id'?: mixed, 'invoice_id'?: mixed, 'sent_at'?: mixed, 'status'?: mixed, 'suppression_reason'?: mixed, 'to_email'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptSentMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return InvoiceDeliveryAttemptSentMerchantEventDataObject
     */
    public function getObject(): InvoiceDeliveryAttemptSentMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?InvoiceDeliveryAttemptSentMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?InvoiceDeliveryAttemptSentMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
