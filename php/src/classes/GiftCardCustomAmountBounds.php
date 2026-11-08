<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $maximum_money
 * @property-read MoneyValue $minimum_money
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardCustomAmountBounds extends Model {
    /** @param array{'maximum_money': mixed, 'minimum_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardCustomAmountBounds')); }
    /** Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getMaximumMoney(): MoneyValue { return $this->get('maximum_money'); }
    public function hasMaximumMoney(): bool { return $this->has('maximum_money'); }
    /** Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getMinimumMoney(): MoneyValue { return $this->get('minimum_money'); }
    public function hasMinimumMoney(): bool { return $this->has('minimum_money'); }
}
