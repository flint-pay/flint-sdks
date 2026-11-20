<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read DeliveryProfileArchivedInstalledMerchantsEventDataObject $object
 * @property-read ?DeliveryProfileArchivedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': \stdClass, 'previous_attributes'?: object{'configuration'?: mixed, 'created_at'?: mixed, 'current_delivery_profile_revision_id'?: mixed, 'delivery_profile_id'?: mixed, 'external_reference_id'?: mixed, 'is_default'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileArchivedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.
     * @return DeliveryProfileArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryProfileArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?DeliveryProfileArchivedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?DeliveryProfileArchivedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
