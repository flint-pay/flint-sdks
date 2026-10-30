<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cancellation_reasons
 * @property-read ?BuyerCancelRetentionOffer $retention_offer
 * @property-read string $timing
 * Presence-aware response; omitted optional fields return null. */
final class BuyerCancelActionOptions extends Model {
    /** @param array{'cancellation_reasons': list<string>, 'retention_offer'?: mixed, 'timing': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCancelActionOptions')); }
    /** Reasons to offer, in the store's order. Empty means do not ask. Sending a reason is always optional. [] enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other". [] (Value): string.  Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * @return list<string>
     */
    public function getCancellationReasons(): array { return $this->get('cancellation_reasons'); }
    public function hasCancellationReasons(): bool { return $this->has('cancellation_reasons'); }
    /** An available pause the buyer may accept instead of canceling, using POST /v1/me/subscriptions/{subscription_id}/pause. The buyer may always decline and cancel. An optional alternative to cancellation that this subscription can accept.
     * @return ?BuyerCancelRetentionOffer
     */
    public function getRetentionOffer(): ?BuyerCancelRetentionOffer { return $this->get('retention_offer'); }
    public function hasRetentionOffer(): bool { return $this->has('retention_offer'); }
    /** The cancellation timing accepted by this subscription. New values may be added. Value enum: "end_of_period", "immediately", "buyer_chooses".
     * @return string
     */
    public function getTiming(): string { return $this->get('timing'); }
    public function hasTiming(): bool { return $this->has('timing'); }
}
