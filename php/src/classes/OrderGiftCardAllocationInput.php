<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardMoneyInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $gift_card_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderGiftCardAllocationInput extends Model {
    /** @param array{'amount_money': GiftCardMoneyInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardAllocationInput')); }
    /** @return GiftCardMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
}
