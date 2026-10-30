<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnResolutionCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnResolutionCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionCreatedInstalledMerchantsEventData')); }
    /** The refund, exchange, or other outcome of a return.
     * @return ReturnResolutionCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnResolutionCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
