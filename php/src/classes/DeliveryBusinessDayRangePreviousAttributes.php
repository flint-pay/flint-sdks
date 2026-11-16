<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $maximum
 * @property-read int|null $minimum
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryBusinessDayRangePreviousAttributes extends Model {
    /** @param array{'maximum'?: mixed, 'minimum'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryBusinessDayRangePreviousAttributes')); }
    /** Most business days, from `minimum` to 365. anyOf[1] (Value): integer. Most business days, from `minimum` to 365. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaximum(): int|null { return $this->get('maximum'); }
    public function hasMaximum(): bool { return $this->has('maximum'); }
    /** Fewest business days, from 0. anyOf[1] (Value): integer. Fewest business days, from 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinimum(): int|null { return $this->get('minimum'); }
    public function hasMinimum(): bool { return $this->has('minimum'); }
}
