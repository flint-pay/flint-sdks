<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read PromotionArchivedMerchantEventDataObject $object
 * @property-read ?PromotionArchivedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PromotionArchivedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': \stdClass, 'previous_attributes'?: object{'application_method'?: mixed, 'available'?: mixed, 'codes_summary'?: mixed, 'combines_with'?: mixed, 'created_at'?: mixed, 'description'?: mixed, 'discount_class'?: mixed, 'display_name'?: mixed, 'eligibility_rules'?: mixed, 'exclusivity'?: mixed, 'external_reference_id'?: mixed, 'max_uses'?: mixed, 'max_uses_per_customer'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'promotion_id'?: mixed, 'redemption_type'?: mixed, 'schedule'?: mixed, 'status'?: mixed, 'unavailable_reason'?: mixed, 'updated_at'?: mixed, 'uses_count'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionArchivedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`.
     * @return PromotionArchivedMerchantEventDataObject
     */
    public function getObject(): PromotionArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PromotionArchivedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PromotionArchivedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
