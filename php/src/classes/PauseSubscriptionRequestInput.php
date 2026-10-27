<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read int $pause_duration_cycles
 * Presence-aware input; omitted fields throw when accessed. */
final class PauseSubscriptionRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'pause_duration_cycles'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PauseSubscriptionRequestInput')); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): integer. Billing cycles to pause for, at least 1. Omit it to pause until the subscription is resumed. A pause with a duration resumes automatically at scheduled_resume_at. Repeating the same pause length returns the paused subscription; changing the length requires resuming first. When the store's customer_account.buyer_capabilities.pause.max_cycles is set, a buyer must send a value from 1 to that limit. Format: int32. minimum: 1.
     * @return int
     * @throws SdkError When pause_duration_cycles is omitted; use hasPauseDurationCycles() or valueOrDefault().
     */
    public function getPauseDurationCycles(): int { return $this->get('pause_duration_cycles'); }
    public function hasPauseDurationCycles(): bool { return $this->has('pause_duration_cycles'); }
}
