<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read CustomDomainArchivedEventDataObject $object
 * @property-read ?CustomDomainArchivedEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class CustomDomainArchivedEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'active_payment_attempt_count': int|null, 'created_at': string, 'custom_domain_id': string, 'dns_records': list<mixed>, 'hostname': string, 'last_checked_at': string|null, 'payment_method_domain_id': string|null, 'redirect_expires_at': string|null, 'status': string, 'status_reason': string|null, 'type': string, 'updated_at': string}, 'previous_attributes'?: object{'active_payment_attempt_count'?: mixed, 'created_at'?: mixed, 'custom_domain_id'?: mixed, 'dns_records'?: mixed, 'hostname'?: mixed, 'last_checked_at'?: mixed, 'payment_method_domain_id'?: mixed, 'redirect_expires_at'?: mixed, 'status'?: mixed, 'status_reason'?: mixed, 'type'?: mixed, 'updated_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainArchivedEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return CustomDomainArchivedEventDataObject
     */
    public function getObject(): CustomDomainArchivedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?CustomDomainArchivedEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?CustomDomainArchivedEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
