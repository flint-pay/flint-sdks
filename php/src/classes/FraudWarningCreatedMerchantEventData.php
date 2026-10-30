<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FraudWarningCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FraudWarningCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningCreatedMerchantEventData')); }
    /** A notice that a payment may be fraudulent.
     * @return FraudWarningCreatedMerchantEventDataObject
     */
    public function getObject(): FraudWarningCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
