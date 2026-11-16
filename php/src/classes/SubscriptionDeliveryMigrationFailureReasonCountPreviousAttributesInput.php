<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $count
 * @property-read string|null $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput extends Model {
    /** @param array{'count'?: int|null, 'reason'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput')); }
    /** Number of subscriptions that failed for this reason. anyOf[1] (Value): integer. Number of subscriptions that failed for this reason. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When count is omitted; use hasCount() or valueOrDefault().
     */
    public function getCount(): mixed { return $this->get('count'); }
    public function hasCount(): bool { return $this->has('count'); }
    /** Why these subscriptions could not be moved. Value enum: "method_not_offered", "destination_not_served", "rate_unavailable", "method_unavailable", "no_longer_applicable", "not_movable". anyOf[1] (Value): string. Why these subscriptions could not be moved. Value enum: "method_not_offered", "destination_not_served", "rate_unavailable", "method_unavailable", "no_longer_applicable", "not_movable". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
