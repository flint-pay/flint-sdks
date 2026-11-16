<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $maximum
 * @property-read int|null $minimum
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryBusinessDayRangePreviousAttributesInput extends Model {
    /** @param array{'maximum'?: int|null, 'minimum'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryBusinessDayRangePreviousAttributesInput')); }
    /** Most business days, from `minimum` to 365. anyOf[1] (Value): integer. Most business days, from `minimum` to 365. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When maximum is omitted; use hasMaximum() or valueOrDefault().
     */
    public function getMaximum(): mixed { return $this->get('maximum'); }
    public function hasMaximum(): bool { return $this->has('maximum'); }
    /** Fewest business days, from 0. anyOf[1] (Value): integer. Fewest business days, from 0. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When minimum is omitted; use hasMinimum() or valueOrDefault().
     */
    public function getMinimum(): mixed { return $this->get('minimum'); }
    public function hasMinimum(): bool { return $this->has('minimum'); }
}
