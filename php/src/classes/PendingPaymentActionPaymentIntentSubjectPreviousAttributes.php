<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $payment_intent_id
 * Presence-aware response; omitted optional fields return null. */
final class PendingPaymentActionPaymentIntentSubjectPreviousAttributes extends Model {
    /** @param array{'payment_intent_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionPaymentIntentSubjectPreviousAttributes')); }
    /** ID of the payment intent that needs the buyer's action. anyOf[1] (Value): string. ID of the payment intent that needs the buyer's action. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
}
