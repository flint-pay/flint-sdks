<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $enabled
 * @property-read int $max_cycles
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerPauseCapabilityInput extends Model {
    /** @param array{'enabled'?: bool, 'max_cycles'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPauseCapabilityInput')); }
    /** Whether buyers may pause. When false, a buyer's pause returns 409 ACTION_NOT_ALLOWED with reason not_offered. Default: true.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** The longest pause a buyer may choose, in billing periods. When set, a buyer's pause must send pause_duration_cycles from 1 to this value. Omit it for no limit, which also lets a buyer pause until they resume. Format: int32. minimum: 1. maximum: 12.
     * @return int
     * @throws SdkError When max_cycles is omitted; use hasMaxCycles() or valueOrDefault().
     */
    public function getMaxCycles(): int { return $this->get('max_cycles'); }
    public function hasMaxCycles(): bool { return $this->has('max_cycles'); }
}
