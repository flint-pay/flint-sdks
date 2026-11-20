<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read PackageUpdatedMerchantEventDataObject $object
 * @property-read ?PackageUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PackageUpdatedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'carrier'?: string, 'created_at': string, 'delivered_at'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|null, 'external_reference_id'?: string, 'external_system'?: string, 'fulfillment_id': string, 'label_url'?: string, 'metadata'?: mixed, 'order'?: mixed, 'order_id': string, 'package_id': string, 'return_id'?: string, 'return_line_items'?: list<mixed>, 'service_code'?: string, 'shipment_id': string, 'shipped_at'?: string, 'status': string, 'status_reason'?: string, 'supported_actions': list<string>, 'tracking_number'?: string, 'tracking_url'?: string, 'updated_at': string, 'version': int, 'weight'?: mixed}, 'previous_attributes'?: object{'carrier'?: mixed, 'created_at'?: mixed, 'delivered_at'?: mixed, 'dimensions'?: mixed, 'expected_delivery_at'?: mixed, 'external_reference_id'?: mixed, 'external_system'?: mixed, 'fulfillment_id'?: mixed, 'label_url'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'package_id'?: mixed, 'return_id'?: mixed, 'return_line_items'?: mixed, 'service_code'?: mixed, 'shipment_id'?: mixed, 'shipped_at'?: mixed, 'status'?: mixed, 'status_reason'?: mixed, 'supported_actions'?: mixed, 'tracking_number'?: mixed, 'tracking_url'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'weight'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageUpdatedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PackageUpdatedMerchantEventDataObject
     */
    public function getObject(): PackageUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PackageUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PackageUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
