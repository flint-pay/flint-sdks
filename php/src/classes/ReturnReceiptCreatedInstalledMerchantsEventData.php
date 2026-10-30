<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnReceiptCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReceiptCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptCreatedInstalledMerchantsEventData')); }
    /** A record of returned items arriving at a location.
     * @return ReturnReceiptCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnReceiptCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
