<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardMoney $amount_money
 * @property-read string $gift_card_id
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderGiftCardAllocation extends Model {
    /** @param array{'amount_money': mixed, 'gift_card_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardAllocation')); }
    /** @return GiftCardMoney
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): GiftCardMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
}
