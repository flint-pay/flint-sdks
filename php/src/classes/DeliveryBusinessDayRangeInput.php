<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $maximum
 * @property-read int $minimum
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryBusinessDayRangeInput extends Model {
    /** @param array{'maximum': int, 'minimum': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryBusinessDayRangeInput')); }
    /** @return int
     * @throws SdkError When maximum is omitted; use hasMaximum() or valueOrDefault().
     */
    public function getMaximum(): int { return $this->get('maximum'); }
    public function hasMaximum(): bool { return $this->has('maximum'); }
    /** @return int
     * @throws SdkError When minimum is omitted; use hasMinimum() or valueOrDefault().
     */
    public function getMinimum(): int { return $this->get('minimum'); }
    public function hasMinimum(): bool { return $this->has('minimum'); }
}
