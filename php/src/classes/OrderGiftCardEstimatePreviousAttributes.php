<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $can_pay
 * @property-read MoneyValuePreviousAttributes|null $gift_card_money
 * @property-read list<OrderGiftCardAllocationPreviousAttributes>|null $gift_cards
 * @property-read bool|null $is_reserved
 * @property-read int|null $order_version
 * @property-read MoneyValuePreviousAttributes|null $processor_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderGiftCardEstimatePreviousAttributes extends Model {
    /** @param array{'can_pay'?: mixed, 'gift_card_money'?: mixed, 'gift_cards'?: mixed, 'is_reserved'?: mixed, 'order_version'?: mixed, 'processor_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardEstimatePreviousAttributes')); }
    /** Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. anyOf[1] (Value): boolean. Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getCanPay(): bool|null { return $this->get('can_pay'); }
    public function hasCanPay(): bool { return $this->has('can_pay'); }
    /** Order balance allocated to the selected gift cards. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getGiftCardMoney(): MoneyValuePreviousAttributes|null { return $this->get('gift_card_money'); }
    public function hasGiftCardMoney(): bool { return $this->has('gift_card_money'); }
    /** The gift cards the estimate draws from, each with the amount it covers. anyOf[1] (Value): Array of {@see OrderGiftCardAllocationPreviousAttributes}. The gift cards the estimate draws from, each with the amount it covers. anyOf[1][] (Value): {@see OrderGiftCardAllocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderGiftCardAllocationPreviousAttributes>|null
     */
    public function getGiftCards(): array|null { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** Whether this estimate reserves gift-card funds. Estimates currently return false. anyOf[1] (Value): boolean. Whether this estimate reserves gift-card funds. Estimates currently return false. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsReserved(): bool|null { return $this->get('is_reserved'); }
    public function hasIsReserved(): bool { return $this->has('is_reserved'); }
    /** Order version used to calculate this gift card allocation. Read the order again if its version changed. anyOf[1] (Value): integer. Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getOrderVersion(): int|null { return $this->get('order_version'); }
    public function hasOrderVersion(): bool { return $this->has('order_version'); }
    /** Order balance remaining for the payment processor. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getProcessorMoney(): MoneyValuePreviousAttributes|null { return $this->get('processor_money'); }
    public function hasProcessorMoney(): bool { return $this->has('processor_money'); }
}
