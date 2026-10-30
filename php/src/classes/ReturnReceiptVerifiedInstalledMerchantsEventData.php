<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnReceiptVerifiedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReceiptVerifiedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptVerifiedInstalledMerchantsEventData')); }
    /** A record of returned items arriving at a location.
     * @return ReturnReceiptVerifiedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnReceiptVerifiedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
