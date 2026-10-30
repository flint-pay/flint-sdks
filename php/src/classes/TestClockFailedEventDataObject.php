<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $frozen_at
 * @property-read ?string $name
 * @property-read string $status
 * @property-read string $test_clock_id
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class TestClockFailedEventDataObject extends Model {
    /** @param array{'created_at': string, 'frozen_at': string, 'name'?: string, 'status': string, 'test_clock_id': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TestClockFailedEventDataObject')); }
    /** When the test clock was created, in real time. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. Format: date-time.
     * @return string
     */
    public function getFrozenAt(): string { return $this->get('frozen_at'); }
    public function hasFrozenAt(): bool { return $this->has('frozen_at'); }
    /** Your label for the test clock. Omitted when you didn't set one. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. Value enum: "ready", "advancing", "failed", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for the test clock.
     * @return string
     */
    public function getTestClockId(): string { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
    /** When the test clock last changed, in real time. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
