<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentMethodArchivedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodArchivedMerchantEventData')); }
    /** A customer's saved payment details.
     * @return PaymentMethodArchivedMerchantEventDataObject
     */
    public function getObject(): PaymentMethodArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
