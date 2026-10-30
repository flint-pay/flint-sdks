<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?MoneyValue $amount_money
 * @property-read ?list<string> $digital_wallets
 * @property-read string $mode
 * @property-read string $next_step
 * @property-read string $payment_method_creation
 * @property-read ?array<array-key, mixed> $payment_method_options
 * @property-read list<string> $payment_method_types
 * @property-read ?list<SelectableOrderPaymentIntent> $selectable_payment_intents
 * @property-read string $submit_to
 * Presence-aware response; omitted optional fields return null. */
final class PaymentCollectionStripeElements extends Model {
    /** @param array{'amount_money'?: mixed, 'digital_wallets'?: list<string>, 'mode': string, 'next_step': string, 'payment_method_creation': string, 'payment_method_options'?: \stdClass, 'payment_method_types': list<string>, 'selectable_payment_intents'?: list<object{'amount_money': mixed, 'last_payment_error'?: mixed, 'payment_collection'?: mixed, 'payment_intent_id': string, 'status': string, 'tip_money': mixed}>, 'submit_to': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentCollectionStripeElements')); }
    /** Amount and currency used to initialize the payment form. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAmountMoney(): ?MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Digital wallets that the payment form can offer. [] (Value): string.
     * @return ?list<string>
     */
    public function getDigitalWallets(): ?array { return $this->get('digital_wallets'); }
    public function hasDigitalWallets(): bool { return $this->has('digital_wallets'); }
    /** Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Value enum: "payment", "setup".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Browser collection operation to perform before calling submit_to. Value enum: "collect_payment_source", "collect_setup_payment_source", "create_confirmation_token".
     * @return string
     */
    public function getNextStep(): string { return $this->get('next_step'); }
    public function hasNextStep(): bool { return $this->has('next_step'); }
    /** Stripe Elements payment method creation mode. Follow next_step: standalone PaymentIntents and checkout-authenticated order collection create a ConfirmationToken, while merchant-authenticated order collection and setup collection create a PaymentMethod. Value enum: "manual".
     * @return string
     */
    public function getPaymentMethodCreation(): string { return $this->get('payment_method_creation'); }
    public function hasPaymentMethodCreation(): bool { return $this->has('payment_method_creation'); }
    /** Payment method settings passed to the payment form.
     * @return ?array<array-key, mixed>
     */
    public function getPaymentMethodOptions(): ?array { return $this->get('payment_method_options'); }
    public function hasPaymentMethodOptions(): bool { return $this->has('payment_method_options'); }
    /** Payment method types that the payment form can offer. [] (Value): string.
     * @return list<string>
     */
    public function getPaymentMethodTypes(): array { return $this->get('payment_method_types'); }
    public function hasPaymentMethodTypes(): bool { return $this->has('payment_method_types'); }
    /** Order payment intents that the buyer can select for collection. [] (Value): {@see SelectableOrderPaymentIntent}. A payment intent on an order the caller can pick, with its amount, status, and last payment error.
     * @return ?list<SelectableOrderPaymentIntent>
     */
    public function getSelectablePaymentIntents(): ?array { return $this->get('selectable_payment_intents'); }
    public function hasSelectablePaymentIntents(): bool { return $this->has('selectable_payment_intents'); }
    /** Flint operation that accepts the result of next_step. Value enum: "pay_order", "confirm_payment_intent".
     * @return string
     */
    public function getSubmitTo(): string { return $this->get('submit_to'); }
    public function hasSubmitTo(): bool { return $this->has('submit_to'); }
}
