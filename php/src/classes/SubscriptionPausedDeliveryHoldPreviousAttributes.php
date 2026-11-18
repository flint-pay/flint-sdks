<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $reason
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPausedDeliveryHoldPreviousAttributes extends Model {
    /** @param array{'reason'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPausedDeliveryHoldPreviousAttributes')); }
    /** Why the expired delivery hold paused the subscription. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable", "other". anyOf[1] (Value): string. Why the expired delivery hold paused the subscription. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
