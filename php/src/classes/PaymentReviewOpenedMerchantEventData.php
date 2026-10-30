<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentReviewOpenedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewOpenedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewOpenedMerchantEventData')); }
    /** A payment review requiring a merchant decision.
     * @return PaymentReviewOpenedMerchantEventDataObject
     */
    public function getObject(): PaymentReviewOpenedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
