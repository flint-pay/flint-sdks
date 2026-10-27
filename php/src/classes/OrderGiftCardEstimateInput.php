<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_pay
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $gift_card_money
 * @property-read list<OrderGiftCardAllocationInput|array<array-key, mixed>|\stdClass> $gift_cards
 * @property-read bool $is_reserved
 * @property-read string $order_version
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $processor_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderGiftCardEstimateInput extends Model {
    /** @param array{'can_pay': bool, 'gift_card_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_cards': list<OrderGiftCardAllocationInput|array<array-key, mixed>|\stdClass>, 'is_reserved': bool, 'order_version': string, 'processor_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardEstimateInput')); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When can_pay is omitted; use hasCanPay() or valueOrDefault().
     */
    public function getCanPay(): bool { return $this->get('can_pay'); }
    public function hasCanPay(): bool { return $this->has('can_pay'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_money is omitted; use hasGiftCardMoney() or valueOrDefault().
     */
    public function getGiftCardMoney(): mixed { return $this->get('gift_card_money'); }
    public function hasGiftCardMoney(): bool { return $this->has('gift_card_money'); }
    /** Shape $ (Value): Array of {@see OrderGiftCardAllocationInput}. Shape $[] (Value): {@see OrderGiftCardAllocationInput}. The amount of an order that a gift card covers.
     * @return list<OrderGiftCardAllocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When gift_cards is omitted; use hasGiftCards() or valueOrDefault().
     */
    public function getGiftCards(): array { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When is_reserved is omitted; use hasIsReserved() or valueOrDefault().
     */
    public function getIsReserved(): bool { return $this->get('is_reserved'); }
    public function hasIsReserved(): bool { return $this->has('is_reserved'); }
    /** Shape $ (Value): integer string. Order version used to calculate this gift card allocation. Read the order again if its version changed. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When order_version is omitted; use hasOrderVersion() or valueOrDefault().
     */
    public function getOrderVersion(): string { return $this->get('order_version'); }
    public function hasOrderVersion(): bool { return $this->has('order_version'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When processor_money is omitted; use hasProcessorMoney() or valueOrDefault().
     */
    public function getProcessorMoney(): mixed { return $this->get('processor_money'); }
    public function hasProcessorMoney(): bool { return $this->has('processor_money'); }
}
