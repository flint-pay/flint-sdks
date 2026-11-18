<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LicenseKeyPoolUpdatedMerchantEventDataObject $object
 * @property-read ?LicenseKeyPoolUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyPoolUpdatedMerchantEventData extends Model {
    /** @param array{'object': object{'available_quantity': int, 'created_at': string, 'held_quantity': int, 'issued_quantity': int, 'license_key_pool_id': string, 'low_stock_threshold': int|null, 'metadata': mixed, 'name': string, 'pending_quantity': int, 'public_validation_enabled': bool, 'removed_quantity': int, 'status': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'available_quantity'?: mixed, 'created_at'?: mixed, 'held_quantity'?: mixed, 'issued_quantity'?: mixed, 'license_key_pool_id'?: mixed, 'low_stock_threshold'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'pending_quantity'?: mixed, 'public_validation_enabled'?: mixed, 'removed_quantity'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolUpdatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return LicenseKeyPoolUpdatedMerchantEventDataObject
     */
    public function getObject(): LicenseKeyPoolUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?LicenseKeyPoolUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?LicenseKeyPoolUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
