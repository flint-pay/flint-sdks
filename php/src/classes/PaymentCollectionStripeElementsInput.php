<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read list<string> $digital_wallets
 * @property-read string $mode
 * @property-read string $next_step
 * @property-read string $payment_method_creation
 * @property-read array<array-key, mixed>|\stdClass $payment_method_options
 * @property-read list<string> $payment_method_types
 * @property-read list<string> $payment_options
 * @property-read list<array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_collection'?: PaymentCollectionInput|array<array-key, mixed>|\stdClass, 'payment_intent_id': string, 'status': string, 'tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object> $selectable_payment_intents
 * @property-read string $submit_to
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentCollectionStripeElementsInput extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'digital_wallets'?: list<string>, 'mode': string, 'next_step': string, 'payment_method_creation': string, 'payment_method_options'?: array<array-key, mixed>|\stdClass, 'payment_method_types': list<string>, 'payment_options': list<string>, 'selectable_payment_intents'?: list<array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_collection'?: PaymentCollectionInput|array<array-key, mixed>|\stdClass, 'payment_intent_id': string, 'status': string, 'tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object>, 'submit_to': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentCollectionStripeElementsInput')); }
    /** Amount and currency used to initialize the payment form. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. [] (Value): string.
     * @return list<string>
     * @throws SdkError When digital_wallets is omitted; use hasDigitalWallets() or valueOrDefault().
     */
    public function getDigitalWallets(): array { return $this->get('digital_wallets'); }
    public function hasDigitalWallets(): bool { return $this->has('digital_wallets'); }
    /** Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Value enum: "payment", "setup".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Browser collection operation to perform before calling submit_to. Value enum: "collect_setup_payment_source", "create_confirmation_token".
     * @return string
     * @throws SdkError When next_step is omitted; use hasNextStep() or valueOrDefault().
     */
    public function getNextStep(): string { return $this->get('next_step'); }
    public function hasNextStep(): bool { return $this->has('next_step'); }
    /** Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Value enum: "manual".
     * @return string
     * @throws SdkError When payment_method_creation is omitted; use hasPaymentMethodCreation() or valueOrDefault().
     */
    public function getPaymentMethodCreation(): string { return $this->get('payment_method_creation'); }
    public function hasPaymentMethodCreation(): bool { return $this->has('payment_method_creation'); }
    /** Payment method settings passed to the payment form.
     * @return array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_method_options is omitted; use hasPaymentMethodOptions() or valueOrDefault().
     */
    public function getPaymentMethodOptions(): array|object { return $this->get('payment_method_options'); }
    public function hasPaymentMethodOptions(): bool { return $this->has('payment_method_options'); }
    /** Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. [] (Value): string.
     * @return list<string>
     * @throws SdkError When payment_method_types is omitted; use hasPaymentMethodTypes() or valueOrDefault().
     */
    public function getPaymentMethodTypes(): array { return $this->get('payment_method_types'); }
    public function hasPaymentMethodTypes(): bool { return $this->has('payment_method_types'); }
    /** Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return list<string>
     * @throws SdkError When payment_options is omitted; use hasPaymentOptions() or valueOrDefault().
     */
    public function getPaymentOptions(): array { return $this->get('payment_options'); }
    public function hasPaymentOptions(): bool { return $this->has('payment_options'); }
    /** Order payment intents that the buyer can select for collection. [] (Value): {@see SelectableOrderPaymentIntentInput}. A payment intent on an order the caller can pick, with its amount, status, and last payment error.
     * @return list<array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_collection'?: PaymentCollectionInput|array<array-key, mixed>|\stdClass, 'payment_intent_id': string, 'status': string, 'tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object>
     * @throws SdkError When selectable_payment_intents is omitted; use hasSelectablePaymentIntents() or valueOrDefault().
     */
    public function getSelectablePaymentIntents(): array { return $this->get('selectable_payment_intents'); }
    public function hasSelectablePaymentIntents(): bool { return $this->has('selectable_payment_intents'); }
    /** Flint operation that accepts the result of next_step. Value enum: "pay_order", "confirm_payment_intent".
     * @return string
     * @throws SdkError When submit_to is omitted; use hasSubmitTo() or valueOrDefault().
     */
    public function getSubmitTo(): string { return $this->get('submit_to'); }
    public function hasSubmitTo(): bool { return $this->has('submit_to'); }
}
