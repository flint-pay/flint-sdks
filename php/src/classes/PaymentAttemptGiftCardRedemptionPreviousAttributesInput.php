<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $gift_card_id
 * @property-read string|null $gift_card_redemption_id
 * @property-read string|null $last4
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tip_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentAttemptGiftCardRedemptionPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'gift_card_id'?: string|null, 'gift_card_redemption_id'?: string|null, 'last4'?: string|null, 'tip_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentAttemptGiftCardRedemptionPreviousAttributesInput')); }
    /** The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of the gift card redeemed. anyOf[1] (Value): string. ID of the gift card redeemed. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): mixed { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** ID of the redemption that holds this amount on the gift card. anyOf[1] (Value): string. ID of the redemption that holds this amount on the gift card. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When gift_card_redemption_id is omitted; use hasGiftCardRedemptionId() or valueOrDefault().
     */
    public function getGiftCardRedemptionId(): mixed { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Last four characters of the card's current code. anyOf[1] (Value): string. Last four characters of the card's current code. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): mixed { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** The part of `amount_money` that is a tip. Zero when the redemption carries no tip. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tip_money is omitted; use hasTipMoney() or valueOrDefault().
     */
    public function getTipMoney(): mixed { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
}
