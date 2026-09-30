<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentCollectionInput|array<array-key, mixed>|\stdClass $payment_collection
 * @property-read PaymentIntentInput|array<array-key, mixed>|\stdClass $payment_intent
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateOrderPaymentIntentResultInput extends Model {
    /** @param array{'payment_collection': PaymentCollectionInput|array<array-key, mixed>|\stdClass, 'payment_intent': PaymentIntentInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateOrderPaymentIntentResultInput')); }
    /** @return PaymentCollectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_collection is omitted; use hasPaymentCollection() or valueOrDefault().
     */
    public function getPaymentCollection(): mixed { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** @return PaymentIntentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
}
