<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_pay
 * @property-read MoneyValue $gift_card_money
 * @property-read list<OrderGiftCardAllocation> $gift_cards
 * @property-read bool $is_reserved
 * @property-read string $order_revision
 * @property-read MoneyValue $processor_money
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderGiftCardEstimate extends Model {
    /** @param array{'can_pay': bool, 'gift_card_money': mixed, 'gift_cards': list<mixed>, 'is_reserved': bool, 'order_revision': string, 'processor_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardEstimate')); }
    /** @return bool
     * @throws SdkError When can_pay is omitted; use hasCanPay() or valueOrDefault().
     */
    public function getCanPay(): bool { return $this->get('can_pay'); }
    public function hasCanPay(): bool { return $this->has('can_pay'); }
    /** @return MoneyValue
     * @throws SdkError When gift_card_money is omitted; use hasGiftCardMoney() or valueOrDefault().
     */
    public function getGiftCardMoney(): MoneyValue { return $this->get('gift_card_money'); }
    public function hasGiftCardMoney(): bool { return $this->has('gift_card_money'); }
    /** @return list<OrderGiftCardAllocation>
     * @throws SdkError When gift_cards is omitted; use hasGiftCards() or valueOrDefault().
     */
    public function getGiftCards(): array { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** @return bool
     * @throws SdkError When is_reserved is omitted; use hasIsReserved() or valueOrDefault().
     */
    public function getIsReserved(): bool { return $this->get('is_reserved'); }
    public function hasIsReserved(): bool { return $this->has('is_reserved'); }
    /** @return string
     * @throws SdkError When order_revision is omitted; use hasOrderRevision() or valueOrDefault().
     */
    public function getOrderRevision(): string { return $this->get('order_revision'); }
    public function hasOrderRevision(): bool { return $this->has('order_revision'); }
    /** @return MoneyValue
     * @throws SdkError When processor_money is omitted; use hasProcessorMoney() or valueOrDefault().
     */
    public function getProcessorMoney(): MoneyValue { return $this->get('processor_money'); }
    public function hasProcessorMoney(): bool { return $this->has('processor_money'); }
}
