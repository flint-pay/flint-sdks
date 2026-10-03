<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $maximum_money
 * @property-read array{'amount': string, 'currency': string}|object $minimum_money
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardCustomAmountBoundsInput extends Model {
    /** @param array{'maximum_money': array{'amount': string, 'currency': string}|object, 'minimum_money': array{'amount': string, 'currency': string}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardCustomAmountBoundsInput')); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When maximum_money is omitted; use hasMaximumMoney() or valueOrDefault().
     */
    public function getMaximumMoney(): array|object { return $this->get('maximum_money'); }
    public function hasMaximumMoney(): bool { return $this->has('maximum_money'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When minimum_money is omitted; use hasMinimumMoney() or valueOrDefault().
     */
    public function getMinimumMoney(): array|object { return $this->get('minimum_money'); }
    public function hasMinimumMoney(): bool { return $this->has('minimum_money'); }
}
