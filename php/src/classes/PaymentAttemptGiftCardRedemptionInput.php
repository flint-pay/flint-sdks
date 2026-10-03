<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $gift_card_id
 * @property-read string $gift_card_redemption_id
 * @property-read string $last_characters
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tip_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentAttemptGiftCardRedemptionInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string, 'gift_card_redemption_id': string, 'last_characters': string, 'tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentAttemptGiftCardRedemptionInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return string
     * @throws SdkError When gift_card_redemption_id is omitted; use hasGiftCardRedemptionId() or valueOrDefault().
     */
    public function getGiftCardRedemptionId(): string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** @return string
     * @throws SdkError When last_characters is omitted; use hasLastCharacters() or valueOrDefault().
     */
    public function getLastCharacters(): string { return $this->get('last_characters'); }
    public function hasLastCharacters(): bool { return $this->has('last_characters'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip_money is omitted; use hasTipMoney() or valueOrDefault().
     */
    public function getTipMoney(): mixed { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
}
