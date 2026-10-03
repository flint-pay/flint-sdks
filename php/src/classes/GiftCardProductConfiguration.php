<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardCustomAmountBounds $custom_amount_bounds
 * @property-read GiftCardProductConfigurationFaceValueMoney $face_value_money
 * @property-read string $price_mode
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardProductConfiguration extends Model {
    /** @param array{'custom_amount_bounds'?: mixed, 'face_value_money': object{'amount': string, 'currency': string}, 'price_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardProductConfiguration')); }
    /** @return GiftCardCustomAmountBounds
     * @throws SdkError When custom_amount_bounds is omitted; use hasCustomAmountBounds() or valueOrDefault().
     */
    public function getCustomAmountBounds(): GiftCardCustomAmountBounds { return $this->get('custom_amount_bounds'); }
    public function hasCustomAmountBounds(): bool { return $this->has('custom_amount_bounds'); }
    /** @return GiftCardProductConfigurationFaceValueMoney
     * @throws SdkError When face_value_money is omitted; use hasFaceValueMoney() or valueOrDefault().
     */
    public function getFaceValueMoney(): GiftCardProductConfigurationFaceValueMoney { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
