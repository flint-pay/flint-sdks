<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $maximum
 * @property-read int $minimum
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryBusinessDayRange extends Model {
    /** @param array{'maximum': int, 'minimum': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryBusinessDayRange')); }
    /** maximum
     * @return int
     */
    public function getMaximum(): int { return $this->get('maximum'); }
    public function hasMaximum(): bool { return $this->has('maximum'); }
    /** minimum
     * @return int
     */
    public function getMinimum(): int { return $this->get('minimum'); }
    public function hasMinimum(): bool { return $this->has('minimum'); }
}
