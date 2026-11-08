<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CategoryUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class CategoryUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'assigned_bundle_count': int, 'assigned_product_count': int, 'category_id': string, 'created_at': string, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'merchant_id': string, 'metadata'?: mixed, 'name': string, 'status': string, 'targeting_reference_count': int, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return CategoryUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): CategoryUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
