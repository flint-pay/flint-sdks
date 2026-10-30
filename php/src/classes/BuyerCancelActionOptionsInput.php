<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cancellation_reasons
 * @property-read BuyerCancelRetentionOfferInput|array<array-key, mixed>|\stdClass $retention_offer
 * @property-read string $timing
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCancelActionOptionsInput extends Model {
    /** @param array{'cancellation_reasons': list<string>, 'retention_offer'?: BuyerCancelRetentionOfferInput|array<array-key, mixed>|\stdClass, 'timing': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCancelActionOptionsInput')); }
    /** Reasons to offer, in the store's order. Empty means do not ask. Sending a reason is always optional. [] enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other". [] (Value): string.  Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * @return list<string>
     * @throws SdkError When cancellation_reasons is omitted; use hasCancellationReasons() or valueOrDefault().
     */
    public function getCancellationReasons(): array { return $this->get('cancellation_reasons'); }
    public function hasCancellationReasons(): bool { return $this->has('cancellation_reasons'); }
    /** An available pause the buyer may accept instead of canceling, using POST /v1/me/subscriptions/{subscription_id}/pause. The buyer may always decline and cancel. An optional alternative to cancellation that this subscription can accept.
     * @return BuyerCancelRetentionOfferInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When retention_offer is omitted; use hasRetentionOffer() or valueOrDefault().
     */
    public function getRetentionOffer(): mixed { return $this->get('retention_offer'); }
    public function hasRetentionOffer(): bool { return $this->has('retention_offer'); }
    /** The cancellation timing accepted by this subscription. New values may be added. Value enum: "end_of_period", "immediately", "buyer_chooses".
     * @return string
     * @throws SdkError When timing is omitted; use hasTiming() or valueOrDefault().
     */
    public function getTiming(): string { return $this->get('timing'); }
    public function hasTiming(): bool { return $this->has('timing'); }
}
