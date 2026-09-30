<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $unit
 * @property-read float $value
 * Presence-aware response; omitted fields throw when accessed. */
final class ShippingWeight extends Model {
    /** @param array{'unit': string, 'value': float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShippingWeight')); }
    /** @return string
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** @return float
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): float { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
