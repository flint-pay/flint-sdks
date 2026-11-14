<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_intent_id
 * @property-read PaymentSourceCredentialInput|array<array-key, mixed>|\stdClass $payment_source
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderPaymentIntentSelectionInput extends Model {
    /** @param array{'payment_intent_id': string, 'payment_source'?: PaymentSourceCredentialInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentIntentSelectionInput')); }
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Credential to confirm this payment intent. Omit it to use the source already attached. The credential you provide to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation token.
     * @return PaymentSourceCredentialInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_source is omitted; use hasPaymentSource() or valueOrDefault().
     */
    public function getPaymentSource(): mixed { return $this->get('payment_source'); }
    public function hasPaymentSource(): bool { return $this->has('payment_source'); }
}
