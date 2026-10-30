<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionCodeUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCodeUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodeUpdatedMerchantEventData')); }
    /** A code a buyer enters to claim a promotion.
     * @return PromotionCodeUpdatedMerchantEventDataObject
     */
    public function getObject(): PromotionCodeUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
