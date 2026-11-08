<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass $custom_amount_bounds
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $face_value_money
 * @property-read string $price_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardProductConfigurationInput extends Model {
    /** @param array{'custom_amount_bounds'?: GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass, 'face_value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'price_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardProductConfigurationInput')); }
    /** Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
     * @return GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_amount_bounds is omitted; use hasCustomAmountBounds() or valueOrDefault().
     */
    public function getCustomAmountBounds(): mixed { return $this->get('custom_amount_bounds'); }
    public function hasCustomAmountBounds(): bool { return $this->has('custom_amount_bounds'); }
    /** Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When face_value_money is omitted; use hasFaceValueMoney() or valueOrDefault().
     */
    public function getFaceValueMoney(): mixed { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Whether the gift card is sold at its face value or at a discounted price. Value enum: "face_value", "discounted".
     * @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
