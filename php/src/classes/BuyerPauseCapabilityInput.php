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
    /** @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** @return int
     * @throws SdkError When max_cycles is omitted; use hasMaxCycles() or valueOrDefault().
     */
    public function getMaxCycles(): int { return $this->get('max_cycles'); }
    public function hasMaxCycles(): bool { return $this->has('max_cycles'); }
}
