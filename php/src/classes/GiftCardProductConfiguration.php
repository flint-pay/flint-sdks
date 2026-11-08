<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?GiftCardCustomAmountBounds $custom_amount_bounds
 * @property-read MoneyValue $face_value_money
 * @property-read string $price_mode
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardProductConfiguration extends Model {
    /** @param array{'custom_amount_bounds'?: mixed, 'face_value_money': mixed, 'price_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardProductConfiguration')); }
    /** Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
     * @return ?GiftCardCustomAmountBounds
     */
    public function getCustomAmountBounds(): ?GiftCardCustomAmountBounds { return $this->get('custom_amount_bounds'); }
    public function hasCustomAmountBounds(): bool { return $this->has('custom_amount_bounds'); }
    /** Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getFaceValueMoney(): MoneyValue { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Whether the gift card is sold at its face value or at a discounted price. Value enum: "face_value", "discounted".
     * @return string
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
