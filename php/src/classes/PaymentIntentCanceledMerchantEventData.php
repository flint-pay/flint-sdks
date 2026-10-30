<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentIntentCanceledMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentIntentCanceledMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentCanceledMerchantEventData')); }
    /** One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money always equals the sum of those three. Reconcile revenue from captured_money.
     * @return PaymentIntentCanceledMerchantEventDataObject
     */
    public function getObject(): PaymentIntentCanceledMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
