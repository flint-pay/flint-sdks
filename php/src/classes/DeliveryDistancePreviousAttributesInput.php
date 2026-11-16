<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $unit
 * @property-read int|float|null $value
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryDistancePreviousAttributesInput extends Model {
    /** @param array{'unit'?: string|null, 'value'?: int|float|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryDistancePreviousAttributesInput')); }
    /** Unit of `value`. Value enum: "meter", "kilometer", "mile". anyOf[1] (Value): string. Unit of `value`. Value enum: "meter", "kilometer", "mile". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): mixed { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Distance, in `unit`. anyOf[1] (Value): number. Distance, in `unit`. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): mixed { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
