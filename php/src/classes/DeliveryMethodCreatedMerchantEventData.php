<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryMethodCreatedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodCreatedMerchantEventData extends Model {
    /** @param array{'object': object{'configuration': mixed, 'created_at': string, 'current_delivery_method_revision_id': string, 'delivery_method_id': string, 'delivery_revocation_id': string|null, 'description'?: string, 'display_position': int, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'recommendation_priority'?: int, 'status': string, 'subscription_counts': mixed, 'type': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodCreatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return DeliveryMethodCreatedMerchantEventDataObject
     */
    public function getObject(): DeliveryMethodCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
