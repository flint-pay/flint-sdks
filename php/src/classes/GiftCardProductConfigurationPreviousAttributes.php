<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardCustomAmountBoundsPreviousAttributes|null $custom_amount_bounds
 * @property-read MoneyValuePreviousAttributes|null $face_value_money
 * @property-read string|null $price_mode
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardProductConfigurationPreviousAttributes extends Model {
    /** @param array{'custom_amount_bounds'?: mixed, 'face_value_money'?: mixed, 'price_mode'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardProductConfigurationPreviousAttributes')); }
    /** Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. anyOf[1] (Value): {@see GiftCardCustomAmountBoundsPreviousAttributes}. anyOf[2] (Value): null.
     * @return GiftCardCustomAmountBoundsPreviousAttributes|null
     */
    public function getCustomAmountBounds(): GiftCardCustomAmountBoundsPreviousAttributes|null { return $this->get('custom_amount_bounds'); }
    public function hasCustomAmountBounds(): bool { return $this->has('custom_amount_bounds'); }
    /** Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getFaceValueMoney(): MoneyValuePreviousAttributes|null { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Whether the gift card is sold at its face value or at a discounted price. Value enum: "face_value", "discounted". anyOf[1] (Value): string. Whether the gift card is sold at its face value or at a discounted price. Value enum: "face_value", "discounted". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPriceMode(): string|null { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
