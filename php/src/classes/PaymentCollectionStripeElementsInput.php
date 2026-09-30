<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read list<string> $digital_wallets
 * @property-read string $mode
 * @property-read string $next_step
 * @property-read string $payment_method_creation
 * @property-read array<array-key, string>|\stdClass $payment_method_options
 * @property-read list<string> $payment_method_types
 * @property-read list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass> $selectable_payment_intents
 * @property-read string $submit_to
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentCollectionStripeElementsInput extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'digital_wallets'?: list<string>, 'mode': string, 'next_step': string, 'payment_method_creation': string, 'payment_method_options'?: array<array-key, string>|\stdClass, 'payment_method_types': list<string>, 'selectable_payment_intents'?: list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'submit_to': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentCollectionStripeElementsInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return list<string>
     * @throws SdkError When digital_wallets is omitted; use hasDigitalWallets() or valueOrDefault().
     */
    public function getDigitalWallets(): array { return $this->get('digital_wallets'); }
    public function hasDigitalWallets(): bool { return $this->has('digital_wallets'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return string
     * @throws SdkError When next_step is omitted; use hasNextStep() or valueOrDefault().
     */
    public function getNextStep(): string { return $this->get('next_step'); }
    public function hasNextStep(): bool { return $this->has('next_step'); }
    /** @return string
     * @throws SdkError When payment_method_creation is omitted; use hasPaymentMethodCreation() or valueOrDefault().
     */
    public function getPaymentMethodCreation(): string { return $this->get('payment_method_creation'); }
    public function hasPaymentMethodCreation(): bool { return $this->has('payment_method_creation'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When payment_method_options is omitted; use hasPaymentMethodOptions() or valueOrDefault().
     */
    public function getPaymentMethodOptions(): array|object { return $this->get('payment_method_options'); }
    public function hasPaymentMethodOptions(): bool { return $this->has('payment_method_options'); }
    /** @return list<string>
     * @throws SdkError When payment_method_types is omitted; use hasPaymentMethodTypes() or valueOrDefault().
     */
    public function getPaymentMethodTypes(): array { return $this->get('payment_method_types'); }
    public function hasPaymentMethodTypes(): bool { return $this->has('payment_method_types'); }
    /** @return list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selectable_payment_intents is omitted; use hasSelectablePaymentIntents() or valueOrDefault().
     */
    public function getSelectablePaymentIntents(): array { return $this->get('selectable_payment_intents'); }
    public function hasSelectablePaymentIntents(): bool { return $this->has('selectable_payment_intents'); }
    /** @return string
     * @throws SdkError When submit_to is omitted; use hasSubmitTo() or valueOrDefault().
     */
    public function getSubmitTo(): string { return $this->get('submit_to'); }
    public function hasSubmitTo(): bool { return $this->has('submit_to'); }
}
