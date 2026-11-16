<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionCodeUpdatedMerchantEventDataObject $object
 * @property-read ?PromotionCodeUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCodeUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, 'previous_attributes'?: object{'available'?: mixed, 'code'?: mixed, 'created_at'?: mixed, 'customer_id'?: mixed, 'expires_at'?: mixed, 'max_uses'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'promotion_code_id'?: mixed, 'promotion_id'?: mixed, 'status'?: mixed, 'timezone'?: mixed, 'unavailable_reason'?: mixed, 'updated_at'?: mixed, 'uses_count'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodeUpdatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.
     * @return PromotionCodeUpdatedMerchantEventDataObject
     */
    public function getObject(): PromotionCodeUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PromotionCodeUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PromotionCodeUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
