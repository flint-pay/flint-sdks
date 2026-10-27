<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $completed_cycles
 * @property-read string|\DateTimeInterface $period_started_at
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionBillingStartInputImportedInput extends Model {
    /** @param array{'completed_cycles'?: int, 'period_started_at': string|\DateTimeInterface, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingStartInputImportedInput')); }
    /** Shape $ (Value): integer. Number of billing cycles already charged on the previous billing system, including the current imported period. The subscription's completed_cycles starts here, and the next renewal's subscription_cycle is this number plus one. minimum: 0. Default: 0.
     * @return int
     * @throws SdkError When completed_cycles is omitted; use hasCompletedCycles() or valueOrDefault().
     */
    public function getCompletedCycles(): int { return $this->get('completed_cycles'); }
    public function hasCompletedCycles(): bool { return $this->has('completed_cycles'); }
    /** Shape $ (Value): string. Start of the already-running billing period being imported. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_started_at is omitted; use hasPeriodStartedAt() or valueOrDefault().
     */
    public function getPeriodStartedAt(): string|\DateTimeInterface { return $this->get('period_started_at'); }
    public function hasPeriodStartedAt(): bool { return $this->has('period_started_at'); }
    /** Shape $ (Value): string.  Value enum: "imported".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
