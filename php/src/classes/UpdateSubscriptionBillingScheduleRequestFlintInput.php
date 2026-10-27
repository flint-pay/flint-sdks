<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $billing_anchor_day
 * @property-read string $expected_version
 * @property-read string|\DateTimeInterface $next_billing_at
 * @property-read string $owner
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateSubscriptionBillingScheduleRequestFlintInput extends Model {
    /** @param array{'billing_anchor_day'?: int, 'expected_version'?: string, 'next_billing_at': string|\DateTimeInterface, 'owner': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateSubscriptionBillingScheduleRequestFlintInput')); }
    /** Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing. Overrides the day inferred from a moved next_billing_at. Format: int32. minimum: 1. maximum: 31.
     * @return int
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. Future date at which Flint attempts the next charge. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When next_billing_at is omitted; use hasNextBillingAt() or valueOrDefault().
     */
    public function getNextBillingAt(): string|\DateTimeInterface { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** Shape $ (Value): string.  Value enum: "flint".
     * @return string
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): string { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
}
