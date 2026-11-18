<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPausedDeliveryHoldInput extends Model {
    /** @param array{'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPausedDeliveryHoldInput')); }
    /** Why the expired delivery hold paused the subscription. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
