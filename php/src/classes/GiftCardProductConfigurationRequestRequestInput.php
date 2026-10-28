<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardCustomAmountBoundsRequestRequestInput|array<array-key, mixed>|\stdClass $custom_amount_bounds
 * @property-read array{'amount': string, 'currency': string}|object $face_value_money
 * @property-read string $price_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardProductConfigurationRequestRequestInput extends Model {
    /** @param array{'custom_amount_bounds'?: GiftCardCustomAmountBoundsRequestRequestInput|array<array-key, mixed>|\stdClass, 'face_value_money': array{'amount': string, 'currency': string}|object, 'price_mode': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardProductConfigurationRequestRequestInput')); }
    /** Shape $ (Value): {@see GiftCardCustomAmountBoundsRequestRequestInput}. Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
     * @return GiftCardCustomAmountBoundsRequestRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_amount_bounds is omitted; use hasCustomAmountBounds() or valueOrDefault().
     */
    public function getCustomAmountBounds(): mixed { return $this->get('custom_amount_bounds'); }
    public function hasCustomAmountBounds(): bool { return $this->has('custom_amount_bounds'); }
    /** Shape $ (Value): object. Gift card value issued for one unit of this variant, in the same currency as its unit price. Shape $.amount (Required): integer string. Amount in the currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 200000. Shape $.currency (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When face_value_money is omitted; use hasFaceValueMoney() or valueOrDefault().
     */
    public function getFaceValueMoney(): array|object { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Shape $ (Value): string. Whether the gift card is sold at its face value or at a discounted price. Value enum: "face_value", "discounted".
     * @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
