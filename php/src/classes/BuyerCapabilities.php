<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_update_delivery
 * @property-read list<string> $cancellation_reasons
 * @property-read string $cancellation_timing
 * @property-read BuyerPauseCapability $pause
 * @property-read BuyerRetentionOffer $retention_offer
 * @property-read BuyerSkipCapability $skip
 * Presence-aware response; omitted fields throw when accessed. */
final class BuyerCapabilities extends Model {
    /** @param array{'can_update_delivery'?: bool, 'cancellation_reasons'?: list<string>, 'cancellation_timing'?: string, 'pause'?: mixed, 'retention_offer'?: mixed, 'skip'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCapabilities')); }
    /** @return bool
     * @throws SdkError When can_update_delivery is omitted; use hasCanUpdateDelivery() or valueOrDefault().
     */
    public function getCanUpdateDelivery(): bool { return $this->get('can_update_delivery'); }
    public function hasCanUpdateDelivery(): bool { return $this->has('can_update_delivery'); }
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
    /** @return BuyerSkipCapability
     * @throws SdkError When skip is omitted; use hasSkip() or valueOrDefault().
     */
    public function getSkip(): BuyerSkipCapability { return $this->get('skip'); }
    public function hasSkip(): bool { return $this->has('skip'); }
}
