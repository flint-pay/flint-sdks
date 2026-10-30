<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardLoadCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardLoadCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoadCreatedMerchantEventData')); }
    /** Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.
     * @return GiftCardLoadCreatedMerchantEventDataObject
     */
    public function getObject(): GiftCardLoadCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
