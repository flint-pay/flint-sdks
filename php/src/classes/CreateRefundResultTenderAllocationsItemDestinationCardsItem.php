<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreateRefundResultTenderAllocationsItemDestinationCardsItemAmountMoney $amount_money
 * @property-read string $gift_card_id
 * Presence-aware response; omitted optional fields return null. */
final class CreateRefundResultTenderAllocationsItemDestinationCardsItem extends Model {
    /** @param array{'amount_money': mixed, 'gift_card_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultTenderAllocationsItemDestinationCardsItem')); }
    /** Shape $ (Value): {@see CreateRefundResultTenderAllocationsItemDestinationCardsItemAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultTenderAllocationsItemDestinationCardsItemAmountMoney
     */
    public function getAmountMoney(): CreateRefundResultTenderAllocationsItemDestinationCardsItemAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
}
