<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPausedDeliveryHoldPreviousAttributesInput extends Model {
    /** @param array{'reason'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPausedDeliveryHoldPreviousAttributesInput')); }
    /** Why the expired delivery hold paused the subscription. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable", "other". anyOf[1] (Value): string. Why the expired delivery hold paused the subscription. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
