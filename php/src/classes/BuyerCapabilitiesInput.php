<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cancellation_reasons
 * @property-read string $cancellation_timing
 * @property-read array{'enabled'?: bool, 'max_cycles'?: int}|object $pause
 * @property-read array{'kind'?: string, 'pause_cycles'?: int}|object $retention_offer
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCapabilitiesInput extends Model {
    /** @param array{'cancellation_reasons'?: list<string>, 'cancellation_timing'?: string, 'pause'?: array{'enabled'?: bool, 'max_cycles'?: int}|object, 'retention_offer'?: array{'kind'?: string, 'pause_cycles'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCapabilitiesInput')); }
    /** @return list<string>
     * @throws SdkError When cancellation_reasons is omitted; use hasCancellationReasons() or valueOrDefault().
     */
    public function getCancellationReasons(): array { return $this->get('cancellation_reasons'); }
    public function hasCancellationReasons(): bool { return $this->has('cancellation_reasons'); }
    /** @return string
     * @throws SdkError When cancellation_timing is omitted; use hasCancellationTiming() or valueOrDefault().
     */
    public function getCancellationTiming(): string { return $this->get('cancellation_timing'); }
    public function hasCancellationTiming(): bool { return $this->has('cancellation_timing'); }
    /** @return array{'enabled'?: bool, 'max_cycles'?: int}|object
     * @throws SdkError When pause is omitted; use hasPause() or valueOrDefault().
     */
    public function getPause(): array|object { return $this->get('pause'); }
    public function hasPause(): bool { return $this->has('pause'); }
    /** @return array{'kind'?: string, 'pause_cycles'?: int}|object
     * @throws SdkError When retention_offer is omitted; use hasRetentionOffer() or valueOrDefault().
     */
    public function getRetentionOffer(): array|object { return $this->get('retention_offer'); }
    public function hasRetentionOffer(): bool { return $this->has('retention_offer'); }
}
