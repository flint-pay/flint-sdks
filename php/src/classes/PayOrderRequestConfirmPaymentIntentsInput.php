<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass $accepted_gift_card_allocation
 * @property-read string $action
 * @property-read array{'email'?: string, 'phone'?: string}|object $buyer_contact
 * @property-read string $completion_behavior
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read list<OrderPaymentIntentSelectionInput|array<array-key, mixed>|\stdClass> $payment_intents
 * @property-read bool $save_payment_method
 * @property-read string $save_payment_method_phone
 * Presence-aware input; omitted fields throw when accessed. */
final class PayOrderRequestConfirmPaymentIntentsInput extends Model {
    /** @param array{'accepted_gift_card_allocation'?: OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'completion_behavior'?: string, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'payment_intents': list<OrderPaymentIntentSelectionInput|array<array-key, mixed>|\stdClass>, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderRequestConfirmPaymentIntentsInput')); }
    /** @return OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When accepted_gift_card_allocation is omitted; use hasAcceptedGiftCardAllocation() or valueOrDefault().
     */
    public function getAcceptedGiftCardAllocation(): mixed { return $this->get('accepted_gift_card_allocation'); }
    public function hasAcceptedGiftCardAllocation(): bool { return $this->has('accepted_gift_card_allocation'); }
    /** @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** @return array{'email'?: string, 'phone'?: string}|object
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): array|object { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
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
