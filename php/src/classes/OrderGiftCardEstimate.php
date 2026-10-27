<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_pay
 * @property-read MoneyValue $gift_card_money
 * @property-read list<OrderGiftCardAllocation> $gift_cards
 * @property-read bool $is_reserved
 * @property-read string $order_version
 * @property-read MoneyValue $processor_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderGiftCardEstimate extends Model {
    /** @param array{'can_pay': bool, 'gift_card_money': mixed, 'gift_cards': list<mixed>, 'is_reserved': bool, 'order_version': string, 'processor_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardEstimate')); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getCanPay(): bool { return $this->get('can_pay'); }
    public function hasCanPay(): bool { return $this->has('can_pay'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getGiftCardMoney(): MoneyValue { return $this->get('gift_card_money'); }
    public function hasGiftCardMoney(): bool { return $this->has('gift_card_money'); }
    /** Shape $ (Value): Array of {@see OrderGiftCardAllocation}. Shape $[] (Value): {@see OrderGiftCardAllocation}. The amount of an order that a gift card covers.
     * @return list<OrderGiftCardAllocation>
     */
    public function getGiftCards(): array { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsReserved(): bool { return $this->get('is_reserved'); }
    public function hasIsReserved(): bool { return $this->has('is_reserved'); }
    /** Shape $ (Value): integer string. Order version used to calculate this gift card allocation. Read the order again if its version changed. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getOrderVersion(): string { return $this->get('order_version'); }
    public function hasOrderVersion(): bool { return $this->has('order_version'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getProcessorMoney(): MoneyValue { return $this->get('processor_money'); }
    public function hasProcessorMoney(): bool { return $this->has('processor_money'); }
}
