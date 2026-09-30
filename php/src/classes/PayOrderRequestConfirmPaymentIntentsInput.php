<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $buyer_email
 * @property-read string $buyer_phone
 * @property-read string $completion_behavior
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read list<OrderPaymentIntentSelectionInput|array<array-key, mixed>|\stdClass> $payment_intents
 * @property-read bool $save_payment_method
 * @property-read string $save_payment_method_phone
 * Presence-aware input; omitted fields throw when accessed. */
final class PayOrderRequestConfirmPaymentIntentsInput extends Model {
    /** @param array{'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'completion_behavior'?: string, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'payment_intents': list<OrderPaymentIntentSelectionInput|array<array-key, mixed>|\stdClass>, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderRequestConfirmPaymentIntentsInput')); }
    /** @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** @return string
     * @throws SdkError When buyer_email is omitted; use hasBuyerEmail() or valueOrDefault().
     */
    public function getBuyerEmail(): string { return $this->get('buyer_email'); }
    public function hasBuyerEmail(): bool { return $this->has('buyer_email'); }
    /** @return string
     * @throws SdkError When buyer_phone is omitted; use hasBuyerPhone() or valueOrDefault().
     */
    public function getBuyerPhone(): string { return $this->get('buyer_phone'); }
    public function hasBuyerPhone(): bool { return $this->has('buyer_phone'); }
    /** @return string
     * @throws SdkError When completion_behavior is omitted; use hasCompletionBehavior() or valueOrDefault().
     */
    public function getCompletionBehavior(): string { return $this->get('completion_behavior'); }
    public function hasCompletionBehavior(): bool { return $this->has('completion_behavior'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): mixed { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** @return list<OrderPaymentIntentSelectionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** @return bool
     * @throws SdkError When save_payment_method is omitted; use hasSavePaymentMethod() or valueOrDefault().
     */
    public function getSavePaymentMethod(): bool { return $this->get('save_payment_method'); }
    public function hasSavePaymentMethod(): bool { return $this->has('save_payment_method'); }
    /** @return string
     * @throws SdkError When save_payment_method_phone is omitted; use hasSavePaymentMethodPhone() or valueOrDefault().
     */
    public function getSavePaymentMethodPhone(): string { return $this->get('save_payment_method_phone'); }
    public function hasSavePaymentMethodPhone(): bool { return $this->has('save_payment_method_phone'); }
}
