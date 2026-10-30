<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentReviewClosedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewClosedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewClosedMerchantEventData')); }
    /** A payment review requiring a merchant decision.
     * @return PaymentReviewClosedMerchantEventDataObject
     */
    public function getObject(): PaymentReviewClosedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
