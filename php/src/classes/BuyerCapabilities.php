<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $can_update_delivery
 * @property-read ?list<string> $cancellation_reasons
 * @property-read ?string $cancellation_timing
 * @property-read ?BuyerPauseCapability $pause
 * @property-read ?BuyerRetentionOffer $retention_offer
 * @property-read ?BuyerSkipCapability $skip
 * Presence-aware response; omitted optional fields return null. */
final class BuyerCapabilities extends Model {
    /** @param array{'can_update_delivery'?: bool, 'cancellation_reasons'?: list<string>, 'cancellation_timing'?: string, 'pause'?: mixed, 'retention_offer'?: mixed, 'skip'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCapabilities')); }
    /** Shape $ (Value): boolean. Whether buyers may change the shipping address and delivery method of their physical subscriptions. Default: true.
     * @return ?bool
     */
    public function getCanUpdateDelivery(): ?bool { return $this->get('can_update_delivery'); }
    public function hasCanUpdateDelivery(): bool { return $this->has('can_update_delivery'); }
    /** Shape $ (Value): Array of string. Reasons a buyer is asked to choose from when canceling, in the order shown. Empty: the buyer is not asked. When the list is not empty, a buyer's cancellation_reason_code must be one of them. maxItems: 8. uniqueItems: true. Default: []. [] enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other". Shape $[] (Value): string.  Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * @return ?list<string>
     */
    public function getCancellationReasons(): ?array { return $this->get('cancellation_reasons'); }
    public function hasCancellationReasons(): bool { return $this->has('cancellation_reasons'); }
    /** Shape $ (Value): string. When a subscription a buyer cancels ends. end_of_period: at trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. buyer_chooses: the buyer picks the scheduled time or right away. When no scheduled cancellation time is available, including scheduled, incomplete, paused, and past_due without next_retry_at, the buyer may send cancel_immediately: true under either policy. Default: "end_of_period". Value enum: "end_of_period", "buyer_chooses".
     * @return ?string
     */
    public function getCancellationTiming(): ?string { return $this->get('cancellation_timing'); }
    public function hasCancellationTiming(): bool { return $this->has('cancellation_timing'); }
    /** Shape $ (Value): {@see BuyerPauseCapability}. Replaced as a whole: send every field you want to keep. Whether buyers may pause, and for how long. Omit it to let buyers pause with no limit. Whether buyers may pause their own subscriptions. Send at least one field. minProperties: 1.
     * @return ?BuyerPauseCapability
     */
    public function getPause(): ?BuyerPauseCapability { return $this->get('pause'); }
    public function hasPause(): bool { return $this->has('pause'); }
    /** Shape $ (Value): {@see BuyerRetentionOffer}. Replaced as a whole: send every field you want to keep. The offer a buyer sees before canceling. The buyer can always decline it and cancel. Omit it for no offer. The offer a buyer sees before canceling. Send at least one field. minProperties: 1.
     * @return ?BuyerRetentionOffer
     */
    public function getRetentionOffer(): ?BuyerRetentionOffer { return $this->get('retention_offer'); }
    public function hasRetentionOffer(): bool { return $this->has('retention_offer'); }
    /** Shape $ (Value): {@see BuyerSkipCapability}. Replaced as a whole: send every field you want to keep. Whether buyers may skip renewals. Omit it to allow skipping with no consecutive limit. Whether buyers may skip renewals. Send at least one field. minProperties: 1.
     * @return ?BuyerSkipCapability
     */
    public function getSkip(): ?BuyerSkipCapability { return $this->get('skip'); }
    public function hasSkip(): bool { return $this->has('skip'); }
}
