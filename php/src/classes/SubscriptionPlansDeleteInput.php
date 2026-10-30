<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $subscription_plan_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPlansDeleteInput extends Model {
    /** @param array{'subscription_plan_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlansDeleteInput')); }
    /** Flint subscription plan ID. Example: "plan_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Optional subscription plan version last read by the caller. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
