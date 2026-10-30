<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PartnerAppInstallPermissionsUpdatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppInstallPermissionsUpdatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallPermissionsUpdatedEventData')); }
    /** A merchant's authorization of a partner application.
     * @return PartnerAppInstallPermissionsUpdatedEventDataObject
     */
    public function getObject(): PartnerAppInstallPermissionsUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
