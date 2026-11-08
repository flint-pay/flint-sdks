<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TicketUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class TicketUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'admission_code'?: string, 'admission_code_last4': string, 'attendee_name': string|null, 'check_in_method': mixed, 'checked_in_at': string|null, 'created_at': string, 'order'?: mixed, 'order_id': string, 'order_line_item_id': string, 'payment_link_id': string, 'status': string, 'supported_actions': list<string>, 'ticket_id': string, 'ticket_number': string, 'updated_at': string, 'version': int, 'voided_at': string|null}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return TicketUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): TicketUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
