<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FraudWarningUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FraudWarningUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningUpdatedInstalledMerchantsEventData')); }
    /** A notice that a payment may be fraudulent.
     * @return FraudWarningUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): FraudWarningUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
