<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $payment_intent_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PendingPaymentActionPaymentIntentSubjectPreviousAttributesInput extends Model {
    /** @param array{'payment_intent_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionPaymentIntentSubjectPreviousAttributesInput')); }
    /** ID of the payment intent that needs the buyer's action. anyOf[1] (Value): string. ID of the payment intent that needs the buyer's action. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): mixed { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
}
