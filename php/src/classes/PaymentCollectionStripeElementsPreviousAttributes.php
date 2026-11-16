<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read list<string>|null $digital_wallets
 * @property-read string|null $mode
 * @property-read string|null $next_step
 * @property-read string|null $payment_method_creation
 * @property-read array<array-key, mixed>|null $payment_method_options
 * @property-read list<string>|null $payment_method_types
 * @property-read list<string>|null $payment_options
 * @property-read list<SelectableOrderPaymentIntentPreviousAttributes>|null $selectable_payment_intents
 * @property-read string|null $submit_to
 * Presence-aware response; omitted optional fields return null. */
final class PaymentCollectionStripeElementsPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'digital_wallets'?: mixed, 'mode'?: mixed, 'next_step'?: mixed, 'payment_method_creation'?: mixed, 'payment_method_options'?: mixed, 'payment_method_types'?: mixed, 'payment_options'?: mixed, 'selectable_payment_intents'?: mixed, 'submit_to'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentCollectionStripeElementsPreviousAttributes')); }
    /** Amount and currency used to initialize the payment form. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. anyOf[1] (Value): Array of string. Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getDigitalWallets(): array|null { return $this->get('digital_wallets'); }
    public function hasDigitalWallets(): bool { return $this->has('digital_wallets'); }
    /** Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Value enum: "payment", "setup". anyOf[1] (Value): string. Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Value enum: "payment", "setup". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMode(): string|null { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Browser collection operation to perform before calling submit_to. Value enum: "collect_setup_payment_source", "create_confirmation_token". anyOf[1] (Value): string. Browser collection operation to perform before calling submit_to. Value enum: "collect_setup_payment_source", "create_confirmation_token". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNextStep(): string|null { return $this->get('next_step'); }
    public function hasNextStep(): bool { return $this->has('next_step'); }
    /** Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Value enum: "manual". anyOf[1] (Value): string. Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Value enum: "manual". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentMethodCreation(): string|null { return $this->get('payment_method_creation'); }
    public function hasPaymentMethodCreation(): bool { return $this->has('payment_method_creation'); }
    /** Payment method settings passed to the payment form. anyOf[1] (Value): object. anyOf[2] (Value): null.
     * @return array<array-key, mixed>|null
     */
    public function getPaymentMethodOptions(): array|null { return $this->get('payment_method_options'); }
    public function hasPaymentMethodOptions(): bool { return $this->has('payment_method_options'); }
    /** Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. anyOf[1] (Value): Array of string. Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getPaymentMethodTypes(): array|null { return $this->get('payment_method_types'); }
    public function hasPaymentMethodTypes(): bool { return $this->has('payment_method_types'); }
    /** Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[1] (Value): Array of string. Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[1][] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getPaymentOptions(): array|null { return $this->get('payment_options'); }
    public function hasPaymentOptions(): bool { return $this->has('payment_options'); }
    /** Order payment intents that the buyer can select for collection. anyOf[1] (Value): Array of {@see SelectableOrderPaymentIntentPreviousAttributes}. Order payment intents that the buyer can select for collection. anyOf[1][] (Value): {@see SelectableOrderPaymentIntentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SelectableOrderPaymentIntentPreviousAttributes>|null
     */
    public function getSelectablePaymentIntents(): array|null { return $this->get('selectable_payment_intents'); }
    public function hasSelectablePaymentIntents(): bool { return $this->has('selectable_payment_intents'); }
    /** Flint operation that accepts the result of next_step. Value enum: "pay_order", "confirm_payment_intent". anyOf[1] (Value): string. Flint operation that accepts the result of next_step. Value enum: "pay_order", "confirm_payment_intent". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubmitTo(): string|null { return $this->get('submit_to'); }
    public function hasSubmitTo(): bool { return $this->has('submit_to'); }
}
