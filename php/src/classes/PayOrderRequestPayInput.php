<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass $accepted_gift_card_allocation
 * @property-read string $action
 * @property-read string $buyer_email
 * @property-read string $buyer_phone
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read PaymentSourceCredentialInput|array<array-key, mixed>|\stdClass $payment_source
 * @property-read bool $save_payment_method
 * @property-read string $save_payment_method_phone
 * Presence-aware input; omitted fields throw when accessed. */
final class PayOrderRequestPayInput extends Model {
    /** @param array{'accepted_gift_card_allocation'?: OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass, 'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'payment_source'?: PaymentSourceCredentialInput|array<array-key, mixed>|\stdClass, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderRequestPayInput')); }
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
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): mixed { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** @return PaymentSourceCredentialInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_source is omitted; use hasPaymentSource() or valueOrDefault().
     */
    public function getPaymentSource(): mixed { return $this->get('payment_source'); }
    public function hasPaymentSource(): bool { return $this->has('payment_source'); }
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
