<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $gift_card_id
 * @property-read string $gift_card_redemption_id
 * @property-read string $last4
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tip_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentAttemptGiftCardRedemptionInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string, 'gift_card_redemption_id': string, 'last4': string, 'tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentAttemptGiftCardRedemptionInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_redemption_id is omitted; use hasGiftCardRedemptionId() or valueOrDefault().
     */
    public function getGiftCardRedemptionId(): string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Shape $ (Value): string. Last four characters of the card's current code.
     * @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip_money is omitted; use hasTipMoney() or valueOrDefault().
     */
    public function getTipMoney(): mixed { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
}
