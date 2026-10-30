<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PayoutSettingsUpdatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PayoutSettingsUpdatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsUpdatedEventData')); }
    /** The merchant's payout schedule and preferences.
     * @return PayoutSettingsUpdatedEventDataObject
     */
    public function getObject(): PayoutSettingsUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
