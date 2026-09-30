<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $held_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $released_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $used_money
 * Presence-aware input; omitted fields throw when accessed. */
final class HoldDetailInput extends Model {
    /** @param array{'held_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'released_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'used_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('HoldDetailInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When held_money is omitted; use hasHeldMoney() or valueOrDefault().
     */
    public function getHeldMoney(): mixed { return $this->get('held_money'); }
    public function hasHeldMoney(): bool { return $this->has('held_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When released_money is omitted; use hasReleasedMoney() or valueOrDefault().
     */
    public function getReleasedMoney(): mixed { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When used_money is omitted; use hasUsedMoney() or valueOrDefault().
     */
    public function getUsedMoney(): mixed { return $this->get('used_money'); }
    public function hasUsedMoney(): bool { return $this->has('used_money'); }
}
