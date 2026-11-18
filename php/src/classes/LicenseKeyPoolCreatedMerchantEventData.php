<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LicenseKeyPoolCreatedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyPoolCreatedMerchantEventData extends Model {
    /** @param array{'object': object{'available_quantity': int, 'created_at': string, 'held_quantity': int, 'issued_quantity': int, 'license_key_pool_id': string, 'low_stock_threshold': int|null, 'metadata': mixed, 'name': string, 'pending_quantity': int, 'public_validation_enabled': bool, 'removed_quantity': int, 'status': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolCreatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return LicenseKeyPoolCreatedMerchantEventDataObject
     */
    public function getObject(): LicenseKeyPoolCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
