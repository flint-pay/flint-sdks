<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $kind
 * @property-read int $pause_duration_cycles
 * Presence-aware response; omitted optional fields return null. */
final class BuyerCancelRetentionOffer extends Model {
    /** @param array{'kind': string, 'pause_duration_cycles': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCancelRetentionOffer')); }
    /** The alternative offered. Ignore kinds you do not recognize. Value enum: "pause_instead".
     * @return string
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** Send this pause_duration_cycles to accept the offer. Format: int32. minimum: 1. maximum: 12.
     * @return int
     */
    public function getPauseDurationCycles(): int { return $this->get('pause_duration_cycles'); }
    public function hasPauseDurationCycles(): bool { return $this->has('pause_duration_cycles'); }
}
