<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPausedDeliveryHold extends Model {
    /** @param array{'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPausedDeliveryHold')); }
    /** Why the expired delivery hold paused the subscription. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
