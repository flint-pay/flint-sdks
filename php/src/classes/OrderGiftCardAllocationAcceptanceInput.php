<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $gift_card_money
 * @property-read list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string}|object> $gift_cards
 * @property-read string $order_revision
 * @property-read array{'amount': string, 'currency': string}|object $processor_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderGiftCardAllocationAcceptanceInput extends Model {
    /** @param array{'gift_card_money': array{'amount': string, 'currency': string}|object, 'gift_cards': list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string}|object>, 'order_revision': string, 'processor_money': array{'amount': string, 'currency': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardAllocationAcceptanceInput')); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When gift_card_money is omitted; use hasGiftCardMoney() or valueOrDefault().
     */
    public function getGiftCardMoney(): array|object { return $this->get('gift_card_money'); }
    public function hasGiftCardMoney(): bool { return $this->has('gift_card_money'); }
    /** @return list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string}|object>
     * @throws SdkError When gift_cards is omitted; use hasGiftCards() or valueOrDefault().
     */
    public function getGiftCards(): array { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** @return string
     * @throws SdkError When order_revision is omitted; use hasOrderRevision() or valueOrDefault().
     */
    public function getOrderRevision(): string { return $this->get('order_revision'); }
    public function hasOrderRevision(): bool { return $this->has('order_revision'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When processor_money is omitted; use hasProcessorMoney() or valueOrDefault().
     */
    public function getProcessorMoney(): array|object { return $this->get('processor_money'); }
    public function hasProcessorMoney(): bool { return $this->has('processor_money'); }
}
