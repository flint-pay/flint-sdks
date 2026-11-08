<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionCreatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'application_method': mixed, 'available': bool, 'codes'?: list<mixed>, 'codes_summary'?: mixed, 'combines_with': mixed, 'created_at'?: string, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: mixed, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: int, 'max_uses_per_customer': int|null, 'merchant_id'?: string, 'metadata'?: mixed, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: mixed, 'status': string, 'unavailable_reason'?: string, 'updated_at'?: string, 'uses_count': int, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCreatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`.
     * @return PromotionCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): PromotionCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
