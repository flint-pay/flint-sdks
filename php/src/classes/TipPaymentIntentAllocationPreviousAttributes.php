<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $amount_money
 * @property-read string|null $payment_intent_id
 * Presence-aware response; omitted optional fields return null. */
final class TipPaymentIntentAllocationPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'payment_intent_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TipPaymentIntentAllocationPreviousAttributes')); }
    /** The part of the tip this payment intent paid. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of the payment intent that paid this part of the tip. anyOf[1] (Value): string. ID of the payment intent that paid this part of the tip. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
}
