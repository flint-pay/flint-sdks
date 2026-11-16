<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $created_at
 * @property-read string|null $gift_card_id
 * @property-read string|null $gift_card_redemption_id
 * @property-read string|null $last4
 * @property-read MoneyValuePreviousAttributes|null $tip_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderGiftCardSettlementPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'created_at'?: mixed, 'gift_card_id'?: mixed, 'gift_card_redemption_id'?: mixed, 'last4'?: mixed, 'tip_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardSettlementPreviousAttributes')); }
    /** The amount the redemption paid toward the order, not counting the tip. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the gift card the redemption spent. anyOf[1] (Value): string. ID of the gift card the redemption spent. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardId(): string|null { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** ID of the redemption that posted the spend. anyOf[1] (Value): string. ID of the redemption that posted the spend. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardRedemptionId(): string|null { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. anyOf[1] (Value): string. Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** The part of the redemption that paid a tip. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTipMoney(): MoneyValuePreviousAttributes|null { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
}
