<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantUpdatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class MerchantUpdatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantUpdatedEventData')); }
    /** The business accepting payments.
     * @return MerchantUpdatedEventDataObject
     */
    public function getObject(): MerchantUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
