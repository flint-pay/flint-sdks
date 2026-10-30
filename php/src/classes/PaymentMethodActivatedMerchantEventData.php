<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentMethodActivatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodActivatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodActivatedMerchantEventData')); }
    /** A customer's saved payment details.
     * @return PaymentMethodActivatedMerchantEventDataObject
     */
    public function getObject(): PaymentMethodActivatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
