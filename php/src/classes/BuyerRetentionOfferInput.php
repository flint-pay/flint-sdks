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
    /** @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** @return int
     * @throws SdkError When pause_cycles is omitted; use hasPauseCycles() or valueOrDefault().
     */
    public function getPauseCycles(): int { return $this->get('pause_cycles'); }
    public function hasPauseCycles(): bool { return $this->has('pause_cycles'); }
}
