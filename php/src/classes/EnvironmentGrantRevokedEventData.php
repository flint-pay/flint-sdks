<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read EnvironmentGrantRevokedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class EnvironmentGrantRevokedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EnvironmentGrantRevokedEventData')); }
    /** A partner application's authorization to access an environment.
     * @return EnvironmentGrantRevokedEventDataObject
     */
    public function getObject(): EnvironmentGrantRevokedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
