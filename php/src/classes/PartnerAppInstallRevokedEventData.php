<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PartnerAppInstallRevokedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppInstallRevokedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallRevokedEventData')); }
    /** A merchant's authorization of a partner application.
     * @return PartnerAppInstallRevokedEventDataObject
     */
    public function getObject(): PartnerAppInstallRevokedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
