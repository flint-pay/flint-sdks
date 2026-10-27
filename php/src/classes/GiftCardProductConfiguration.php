<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?GiftCardCustomAmountBounds $custom_amount_bounds
 * @property-read GiftCardProductConfigurationFaceValueMoney $face_value_money
 * @property-read string $price_mode
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardProductConfiguration extends Model {
    /** @param array{'custom_amount_bounds'?: mixed, 'face_value_money': object{'amount': string, 'currency': string}, 'price_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardProductConfiguration')); }
    /** Shape $ (Value): {@see GiftCardCustomAmountBounds}. Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
     * @return ?GiftCardCustomAmountBounds
     */
    public function getCustomAmountBounds(): ?GiftCardCustomAmountBounds { return $this->get('custom_amount_bounds'); }
    public function hasCustomAmountBounds(): bool { return $this->has('custom_amount_bounds'); }
    /** Shape $ (Value): {@see GiftCardProductConfigurationFaceValueMoney}. Gift card value issued for one unit of this variant, in the same currency as its unit price.
     * @return GiftCardProductConfigurationFaceValueMoney
     */
    public function getFaceValueMoney(): GiftCardProductConfigurationFaceValueMoney { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Shape $ (Value): string. Whether the gift card is sold at its face value or at a discounted price. Value enum: "face_value", "discounted".
     * @return string
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
