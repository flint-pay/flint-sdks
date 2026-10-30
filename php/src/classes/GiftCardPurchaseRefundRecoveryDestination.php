<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $gift_card_id
 * @property-read string $gift_card_load_id
 * @property-read MoneyValue $value_money
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRefundRecoveryDestination extends Model {
    /** @param array{'gift_card_id': string, 'gift_card_load_id': string, 'value_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundRecoveryDestination')); }
    /** gift_card_id
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** gift_card_load_id
     * @return string
     */
    public function getGiftCardLoadId(): string { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getValueMoney(): MoneyValue { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
}
