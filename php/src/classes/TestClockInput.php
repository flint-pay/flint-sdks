<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $frozen_at
 * @property-read string $name
 * @property-read string $status
 * @property-read string $test_clock_id
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class TestClockInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'frozen_at': string|\DateTimeInterface, 'name'?: string, 'status': string, 'test_clock_id': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TestClockInput')); }
    /** When the test clock was created, in real time. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When frozen_at is omitted; use hasFrozenAt() or valueOrDefault().
     */
    public function getFrozenAt(): string|\DateTimeInterface { return $this->get('frozen_at'); }
    public function hasFrozenAt(): bool { return $this->has('frozen_at'); }
    /** Your label for the test clock. Omitted when you didn't set one. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. Value enum: "ready", "advancing", "failed", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for the test clock.
     * @return string
     * @throws SdkError When test_clock_id is omitted; use hasTestClockId() or valueOrDefault().
     */
    public function getTestClockId(): string { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
    /** When the test clock last changed, in real time. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
