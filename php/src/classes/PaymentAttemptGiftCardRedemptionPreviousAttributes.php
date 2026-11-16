<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $gift_card_id
 * @property-read string|null $gift_card_redemption_id
 * @property-read string|null $last4
 * @property-read MoneyValuePreviousAttributes|null $tip_money
 * Presence-aware response; omitted optional fields return null. */
final class PaymentAttemptGiftCardRedemptionPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'gift_card_id'?: mixed, 'gift_card_redemption_id'?: mixed, 'last4'?: mixed, 'tip_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentAttemptGiftCardRedemptionPreviousAttributes')); }
    /** The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of the gift card redeemed. anyOf[1] (Value): string. ID of the gift card redeemed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardId(): string|null { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** ID of the redemption that holds this amount on the gift card. anyOf[1] (Value): string. ID of the redemption that holds this amount on the gift card. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardRedemptionId(): string|null { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Last four characters of the card's current code. anyOf[1] (Value): string. Last four characters of the card's current code. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** The part of `amount_money` that is a tip. Zero when the redemption carries no tip. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTipMoney(): MoneyValuePreviousAttributes|null { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
}
