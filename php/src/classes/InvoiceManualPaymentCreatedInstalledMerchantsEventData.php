<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read InvoiceManualPaymentCreatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceManualPaymentCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'amount_money': mixed, 'idempotency_key'?: string|null, 'invoice_id': string, 'invoice_manual_payment_id': string, 'note'?: string, 'payment_reference'?: string, 'received_at': string, 'reversal_note'?: string, 'reversed_at'?: string, 'status': string, 'supported_actions': list<string>}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceManualPaymentCreatedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return InvoiceManualPaymentCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoiceManualPaymentCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
