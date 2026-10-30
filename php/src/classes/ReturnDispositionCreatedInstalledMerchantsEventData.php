<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnDispositionCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnDispositionCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnDispositionCreatedInstalledMerchantsEventData')); }
    /** A decision about how returned merchandise will be handled.
     * @return ReturnDispositionCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnDispositionCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
