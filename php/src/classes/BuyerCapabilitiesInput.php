<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_update_delivery
 * @property-read list<string> $cancellation_reasons
 * @property-read string $cancellation_timing
 * @property-read BuyerPauseCapabilityInput|array<array-key, mixed>|\stdClass $pause
 * @property-read BuyerRetentionOfferInput|array<array-key, mixed>|\stdClass $retention_offer
 * @property-read BuyerSkipCapabilityInput|array<array-key, mixed>|\stdClass $skip
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCapabilitiesInput extends Model {
    /** @param array{'can_update_delivery'?: bool, 'cancellation_reasons'?: list<string>, 'cancellation_timing'?: string, 'pause'?: BuyerPauseCapabilityInput|array<array-key, mixed>|\stdClass, 'retention_offer'?: BuyerRetentionOfferInput|array<array-key, mixed>|\stdClass, 'skip'?: BuyerSkipCapabilityInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCapabilitiesInput')); }
    /** Whether buyers may change the shipping address and delivery method of their physical subscriptions. Default: true.
     * @return bool
     * @throws SdkError When can_update_delivery is omitted; use hasCanUpdateDelivery() or valueOrDefault().
     */
    public function getCanUpdateDelivery(): bool { return $this->get('can_update_delivery'); }
    public function hasCanUpdateDelivery(): bool { return $this->has('can_update_delivery'); }
    /** Reasons a buyer is asked to choose from when canceling, in the order shown. Empty: the buyer is not asked. When the list is not empty, a buyer's cancellation_reason_code must be one of them. maxItems: 8. uniqueItems: true. Default: []. [] enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other". [] (Value): string.  Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * @return list<string>
     * @throws SdkError When cancellation_reasons is omitted; use hasCancellationReasons() or valueOrDefault().
     */
    public function getCancellationReasons(): array { return $this->get('cancellation_reasons'); }
    public function hasCancellationReasons(): bool { return $this->has('cancellation_reasons'); }
    /** When a subscription a buyer cancels ends. end_of_period: at trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. buyer_chooses: the buyer picks the scheduled time or right away. When no scheduled cancellation time is available, including scheduled, incomplete, paused, and past_due without next_retry_at, the buyer may send cancel_immediately: true under either policy. Default: "end_of_period". Value enum: "end_of_period", "buyer_chooses".
     * @return string
     * @throws SdkError When cancellation_timing is omitted; use hasCancellationTiming() or valueOrDefault().
     */
    public function getCancellationTiming(): string { return $this->get('cancellation_timing'); }
    public function hasCancellationTiming(): bool { return $this->has('cancellation_timing'); }
    /** Replaced as a whole: send every field you want to keep. Whether buyers may pause, and for how long. Omit it to let buyers pause with no limit. Whether buyers may pause their own subscriptions. Send at least one field. minProperties: 1.
     * @return BuyerPauseCapabilityInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pause is omitted; use hasPause() or valueOrDefault().
     */
    public function getPause(): mixed { return $this->get('pause'); }
    public function hasPause(): bool { return $this->has('pause'); }
    /** Replaced as a whole: send every field you want to keep. The offer a buyer sees before canceling. The buyer can always decline it and cancel. Omit it for no offer. The offer a buyer sees before canceling. Send at least one field. minProperties: 1.
     * @return BuyerRetentionOfferInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When retention_offer is omitted; use hasRetentionOffer() or valueOrDefault().
     */
    public function getRetentionOffer(): mixed { return $this->get('retention_offer'); }
    public function hasRetentionOffer(): bool { return $this->has('retention_offer'); }
    /** Replaced as a whole: send every field you want to keep. Whether buyers may skip renewals. Omit it to allow skipping with no consecutive limit. Whether buyers may skip renewals. Send at least one field. minProperties: 1.
     * @return BuyerSkipCapabilityInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When skip is omitted; use hasSkip() or valueOrDefault().
     */
    public function getSkip(): mixed { return $this->get('skip'); }
    public function hasSkip(): bool { return $this->has('skip'); }
}
