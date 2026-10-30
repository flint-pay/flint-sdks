<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FraudWarningUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FraudWarningUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningUpdatedMerchantEventData')); }
    /** A notice that a payment may be fraudulent.
     * @return FraudWarningUpdatedMerchantEventDataObject
     */
    public function getObject(): FraudWarningUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
