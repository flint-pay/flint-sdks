<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionCodeArchivedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCodeArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodeArchivedMerchantEventData')); }
    /** A code a buyer enters to claim a promotion.
     * @return PromotionCodeArchivedMerchantEventDataObject
     */
    public function getObject(): PromotionCodeArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
