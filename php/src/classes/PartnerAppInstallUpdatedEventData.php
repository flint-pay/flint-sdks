<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PartnerAppInstallUpdatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppInstallUpdatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallUpdatedEventData')); }
    /** A merchant's authorization of a partner application.
     * @return PartnerAppInstallUpdatedEventDataObject
     */
    public function getObject(): PartnerAppInstallUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
