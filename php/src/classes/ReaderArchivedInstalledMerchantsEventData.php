<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read ReaderArchivedInstalledMerchantsEventDataObject $object
 * @property-read ?ReaderArchivedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ReaderArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': \stdClass, 'previous_attributes'?: object{'connectivity'?: mixed, 'created_at'?: mixed, 'device_id'?: mixed, 'is_simulated'?: mixed, 'location_id'?: mixed, 'metadata'?: mixed, 'model'?: mixed, 'name'?: mixed, 'reader_id'?: mixed, 'serial_number'?: mixed, 'status'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderArchivedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_intent_id`.
     * @return ReaderArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReaderArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?ReaderArchivedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?ReaderArchivedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
