<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cancellation_reasons
 * @property-read string $cancellation_timing
 * @property-read BuyerPauseCapability $pause
 * @property-read BuyerRetentionOffer $retention_offer
 * Presence-aware response; omitted fields throw when accessed. */
final class BuyerCapabilities extends Model {
    /** @param array{'cancellation_reasons'?: list<string>, 'cancellation_timing'?: string, 'pause'?: object{'enabled'?: bool, 'max_cycles'?: int}, 'retention_offer'?: object{'kind'?: string, 'pause_cycles'?: int}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCapabilities')); }
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
    /** @return BuyerPauseCapability
     * @throws SdkError When pause is omitted; use hasPause() or valueOrDefault().
     */
    public function getPause(): BuyerPauseCapability { return $this->get('pause'); }
    public function hasPause(): bool { return $this->has('pause'); }
    /** @return BuyerRetentionOffer
     * @throws SdkError When retention_offer is omitted; use hasRetentionOffer() or valueOrDefault().
     */
    public function getRetentionOffer(): BuyerRetentionOffer { return $this->get('retention_offer'); }
    public function hasRetentionOffer(): bool { return $this->has('retention_offer'); }
}
