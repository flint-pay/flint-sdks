<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionCodeArchivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCodeArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodeArchivedInstalledMerchantsEventData')); }
    /** A code a buyer enters to claim a promotion.
     * @return PromotionCodeArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): PromotionCodeArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
