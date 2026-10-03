<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass $custom_amount_bounds
 * @property-read array{'amount': string, 'currency': string}|object $face_value_money
 * @property-read string $price_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardProductConfigurationInput extends Model {
    /** @param array{'custom_amount_bounds'?: GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass, 'face_value_money': array{'amount': string, 'currency': string}|object, 'price_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardProductConfigurationInput')); }
    /** @return GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_amount_bounds is omitted; use hasCustomAmountBounds() or valueOrDefault().
     */
    public function getCustomAmountBounds(): mixed { return $this->get('custom_amount_bounds'); }
    public function hasCustomAmountBounds(): bool { return $this->has('custom_amount_bounds'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When face_value_money is omitted; use hasFaceValueMoney() or valueOrDefault().
     */
    public function getFaceValueMoney(): array|object { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
