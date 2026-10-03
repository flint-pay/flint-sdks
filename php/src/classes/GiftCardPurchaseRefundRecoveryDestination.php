<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $gift_card_id
 * @property-read string $gift_card_load_id
 * @property-read GiftCardMoney $value_money
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundRecoveryDestination extends Model {
    /** @param array{'gift_card_id': string, 'gift_card_load_id': string, 'value_money': object{'amount': string, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundRecoveryDestination')); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return string
     * @throws SdkError When gift_card_load_id is omitted; use hasGiftCardLoadId() or valueOrDefault().
     */
    public function getGiftCardLoadId(): string { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
    /** @return GiftCardMoney
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): GiftCardMoney { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
}
