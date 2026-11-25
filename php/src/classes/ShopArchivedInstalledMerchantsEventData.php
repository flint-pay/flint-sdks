<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read ShopArchivedInstalledMerchantsEventDataObject $object
 * @property-read ?ShopArchivedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ShopArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds': int|null, 'created_at': string, 'currency': string|null, 'custom_text'?: mixed, 'delivery_method_ids': list<string>, 'description': string|null, 'external_reference_id': string|null, 'handle': string|null, 'image': mixed, 'inactive_message': string|null, 'inventory_routing_source': mixed, 'legal'?: mixed, 'listing_count': int, 'merchant_id': string, 'metadata': mixed, 'name': string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects': mixed, 'shop_id': string, 'status': string, 'tax'?: mixed, 'tip'?: mixed, 'updated_at': string, 'url': string, 'version': int}, 'previous_attributes'?: object{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'custom_text'?: mixed, 'delivery_method_ids'?: mixed, 'description'?: mixed, 'external_reference_id'?: mixed, 'handle'?: mixed, 'image'?: mixed, 'inactive_message'?: mixed, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'listing_count'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'shop_id'?: mixed, 'status'?: mixed, 'tax'?: mixed, 'tip'?: mixed, 'updated_at'?: mixed, 'url'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopArchivedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return ShopArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): ShopArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?ShopArchivedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?ShopArchivedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
