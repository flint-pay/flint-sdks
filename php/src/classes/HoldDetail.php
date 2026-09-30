<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $held_money
 * @property-read MoneyValue $released_money
 * @property-read MoneyValue $used_money
 * Presence-aware response; omitted fields throw when accessed. */
final class HoldDetail extends Model {
    /** @param array{'held_money'?: mixed, 'released_money'?: mixed, 'used_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('HoldDetail')); }
    /** @return MoneyValue
     * @throws SdkError When held_money is omitted; use hasHeldMoney() or valueOrDefault().
     */
    public function getHeldMoney(): MoneyValue { return $this->get('held_money'); }
    public function hasHeldMoney(): bool { return $this->has('held_money'); }
    /** @return MoneyValue
     * @throws SdkError When released_money is omitted; use hasReleasedMoney() or valueOrDefault().
     */
    public function getReleasedMoney(): MoneyValue { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
    /** @return MoneyValue
     * @throws SdkError When used_money is omitted; use hasUsedMoney() or valueOrDefault().
     */
    public function getUsedMoney(): MoneyValue { return $this->get('used_money'); }
    public function hasUsedMoney(): bool { return $this->has('used_money'); }
}
