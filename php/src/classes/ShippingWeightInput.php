<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $unit
 * @property-read int|float $value
 * Presence-aware input; omitted fields throw when accessed. */
final class ShippingWeightInput extends Model {
    /** @param array{'unit': string, 'value': int|float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShippingWeightInput')); }
    /** @return string
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** @return int|float
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): int|float { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
