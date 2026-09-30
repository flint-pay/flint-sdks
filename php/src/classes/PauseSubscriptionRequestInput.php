<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $pause_duration_cycles
 * Presence-aware input; omitted fields throw when accessed. */
final class PauseSubscriptionRequestInput extends Model {
    /** @param array{'pause_duration_cycles'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PauseSubscriptionRequestInput')); }
    /** @return int
     * @throws SdkError When pause_duration_cycles is omitted; use hasPauseDurationCycles() or valueOrDefault().
     */
    public function getPauseDurationCycles(): int { return $this->get('pause_duration_cycles'); }
    public function hasPauseDurationCycles(): bool { return $this->has('pause_duration_cycles'); }
}
