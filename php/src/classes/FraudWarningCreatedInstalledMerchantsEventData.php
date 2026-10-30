<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FraudWarningCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FraudWarningCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningCreatedInstalledMerchantsEventData')); }
    /** A notice that a payment may be fraudulent.
     * @return FraudWarningCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): FraudWarningCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
