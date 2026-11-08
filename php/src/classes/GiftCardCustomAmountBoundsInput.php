<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $maximum_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $minimum_money
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardCustomAmountBoundsInput extends Model {
    /** @param array{'maximum_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'minimum_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardCustomAmountBoundsInput')); }
    /** Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When maximum_money is omitted; use hasMaximumMoney() or valueOrDefault().
     */
    public function getMaximumMoney(): mixed { return $this->get('maximum_money'); }
    public function hasMaximumMoney(): bool { return $this->has('maximum_money'); }
    /** Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When minimum_money is omitted; use hasMinimumMoney() or valueOrDefault().
     */
    public function getMinimumMoney(): mixed { return $this->get('minimum_money'); }
    public function hasMinimumMoney(): bool { return $this->has('minimum_money'); }
}
