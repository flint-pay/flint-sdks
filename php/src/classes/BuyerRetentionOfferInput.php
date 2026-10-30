<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $kind
 * @property-read int $pause_cycles
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerRetentionOfferInput extends Model {
    /** @param array{'kind'?: string, 'pause_cycles'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerRetentionOfferInput')); }
    /** none: no offer. pause_instead: offer to pause for pause_cycles billing periods instead of canceling. pause_instead needs pausing turned on. Default: "none". Value enum: "none", "pause_instead".
     * @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** Billing periods the offered pause lasts. Required when kind is pause_instead, and at most pause.max_cycles when that is set. Not allowed with kind none. Format: int32. minimum: 1. maximum: 12.
     * @return int
     * @throws SdkError When pause_cycles is omitted; use hasPauseCycles() or valueOrDefault().
     */
    public function getPauseCycles(): int { return $this->get('pause_cycles'); }
    public function hasPauseCycles(): bool { return $this->has('pause_cycles'); }
}
