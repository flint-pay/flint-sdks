<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardCustomAmountBoundsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $custom_amount_bounds
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $face_value_money
 * @property-read string|null $price_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardProductConfigurationPreviousAttributesInput extends Model {
    /** @param array{'custom_amount_bounds'?: GiftCardCustomAmountBoundsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'face_value_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'price_mode'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardProductConfigurationPreviousAttributesInput')); }
    /** Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. anyOf[1] (Value): {@see GiftCardCustomAmountBoundsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return GiftCardCustomAmountBoundsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When custom_amount_bounds is omitted; use hasCustomAmountBounds() or valueOrDefault().
     */
    public function getCustomAmountBounds(): mixed { return $this->get('custom_amount_bounds'); }
    public function hasCustomAmountBounds(): bool { return $this->has('custom_amount_bounds'); }
    /** Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When face_value_money is omitted; use hasFaceValueMoney() or valueOrDefault().
     */
    public function getFaceValueMoney(): mixed { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Whether the gift card is sold at its face value or at a discounted price. Value enum: "face_value", "discounted". anyOf[1] (Value): string. Whether the gift card is sold at its face value or at a discounted price. Value enum: "face_value", "discounted". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): mixed { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
