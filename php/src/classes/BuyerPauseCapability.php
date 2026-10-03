<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $enabled
 * @property-read int $max_cycles
 * Presence-aware response; omitted fields throw when accessed. */
final class BuyerPauseCapability extends Model {
    /** @param array{'enabled'?: bool, 'max_cycles'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPauseCapability')); }
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
