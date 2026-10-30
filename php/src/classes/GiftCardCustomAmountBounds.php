<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardCustomAmountBoundsMaximumMoney $maximum_money
 * @property-read GiftCardCustomAmountBoundsMinimumMoney $minimum_money
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardCustomAmountBounds extends Model {
    /** @param array{'maximum_money': object{'amount': string, 'currency': string}, 'minimum_money': object{'amount': string, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardCustomAmountBounds')); }
    /** Largest gift card value buyers can choose, in the face value currency.
     * @return GiftCardCustomAmountBoundsMaximumMoney
     */
    public function getMaximumMoney(): GiftCardCustomAmountBoundsMaximumMoney { return $this->get('maximum_money'); }
    public function hasMaximumMoney(): bool { return $this->has('maximum_money'); }
    /** Smallest gift card value buyers can choose, in the face value currency.
     * @return GiftCardCustomAmountBoundsMinimumMoney
     */
    public function getMinimumMoney(): GiftCardCustomAmountBoundsMinimumMoney { return $this->get('minimum_money'); }
    public function hasMinimumMoney(): bool { return $this->has('minimum_money'); }
}
