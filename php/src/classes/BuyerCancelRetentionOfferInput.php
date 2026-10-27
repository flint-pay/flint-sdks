<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $kind
 * @property-read int $pause_duration_cycles
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCancelRetentionOfferInput extends Model {
    /** @param array{'kind': string, 'pause_duration_cycles': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCancelRetentionOfferInput')); }
    /** Shape $ (Value): string. The alternative offered. Ignore kinds you do not recognize. Value enum: "pause_instead".
     * @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** Shape $ (Value): integer. Send this pause_duration_cycles to accept the offer. Format: int32. minimum: 1. maximum: 12.
     * @return int
     * @throws SdkError When pause_duration_cycles is omitted; use hasPauseDurationCycles() or valueOrDefault().
     */
    public function getPauseDurationCycles(): int { return $this->get('pause_duration_cycles'); }
    public function hasPauseDurationCycles(): bool { return $this->has('pause_duration_cycles'); }
}
