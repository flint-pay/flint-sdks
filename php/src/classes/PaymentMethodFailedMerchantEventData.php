<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentMethodFailedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodFailedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodFailedMerchantEventData')); }
    /** A customer's saved payment details.
     * @return PaymentMethodFailedMerchantEventDataObject
     */
    public function getObject(): PaymentMethodFailedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
