<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $created_at
 * @property-read string $gift_card_id
 * @property-read string $gift_card_redemption_id
 * @property-read string $last4
 * @property-read MoneyValue $tip_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderGiftCardSettlement extends Model {
    /** @param array{'amount_money': mixed, 'created_at': string, 'gift_card_id': string, 'gift_card_redemption_id': string, 'last4': string, 'tip_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardSettlement')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** gift_card_id
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** gift_card_redemption_id
     * @return string
     */
    public function getGiftCardRedemptionId(): string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Last four characters of the code that paid. It stays the same if the gift card's code is later replaced.
     * @return string
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTipMoney(): MoneyValue { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
}
