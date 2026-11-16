<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $can_pay
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $gift_card_money
 * @property-read list<OrderGiftCardAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $gift_cards
 * @property-read bool|null $is_reserved
 * @property-read int|null $order_version
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $processor_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderGiftCardEstimatePreviousAttributesInput extends Model {
    /** @param array{'can_pay'?: bool|null, 'gift_card_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'gift_cards'?: list<OrderGiftCardAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'is_reserved'?: bool|null, 'order_version'?: int|null, 'processor_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardEstimatePreviousAttributesInput')); }
    /** Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. anyOf[1] (Value): boolean. Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When can_pay is omitted; use hasCanPay() or valueOrDefault().
     */
    public function getCanPay(): mixed { return $this->get('can_pay'); }
    public function hasCanPay(): bool { return $this->has('can_pay'); }
    /** Order balance allocated to the selected gift cards. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When gift_card_money is omitted; use hasGiftCardMoney() or valueOrDefault().
     */
    public function getGiftCardMoney(): mixed { return $this->get('gift_card_money'); }
    public function hasGiftCardMoney(): bool { return $this->has('gift_card_money'); }
    /** The gift cards the estimate draws from, each with the amount it covers. anyOf[1] (Value): Array of {@see OrderGiftCardAllocationPreviousAttributesInput}. The gift cards the estimate draws from, each with the amount it covers. anyOf[1][] (Value): {@see OrderGiftCardAllocationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<OrderGiftCardAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When gift_cards is omitted; use hasGiftCards() or valueOrDefault().
     */
    public function getGiftCards(): mixed { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** Whether this estimate reserves gift-card funds. Estimates currently return false. anyOf[1] (Value): boolean. Whether this estimate reserves gift-card funds. Estimates currently return false. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_reserved is omitted; use hasIsReserved() or valueOrDefault().
     */
    public function getIsReserved(): mixed { return $this->get('is_reserved'); }
    public function hasIsReserved(): bool { return $this->has('is_reserved'); }
    /** Order version used to calculate this gift card allocation. Read the order again if its version changed. anyOf[1] (Value): integer. Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When order_version is omitted; use hasOrderVersion() or valueOrDefault().
     */
    public function getOrderVersion(): mixed { return $this->get('order_version'); }
    public function hasOrderVersion(): bool { return $this->has('order_version'); }
    /** Order balance remaining for the payment processor. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When processor_money is omitted; use hasProcessorMoney() or valueOrDefault().
     */
    public function getProcessorMoney(): mixed { return $this->get('processor_money'); }
    public function hasProcessorMoney(): bool { return $this->has('processor_money'); }
}
