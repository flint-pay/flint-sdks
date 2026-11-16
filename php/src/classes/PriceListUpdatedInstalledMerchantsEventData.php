<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PriceListUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?PriceListUpdatedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PriceListUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'archived_at': string|null, 'created_at': string, 'currency': string, 'customer_segments': list<string>, 'external_reference_id': string|null, 'merchant_id': string, 'metadata': mixed, 'name': string, 'price_count': int, 'price_list_id': string, 'status': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'archived_at'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'customer_segments'?: mixed, 'external_reference_id'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'price_count'?: mixed, 'price_list_id'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceListUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PriceListUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): PriceListUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PriceListUpdatedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PriceListUpdatedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
