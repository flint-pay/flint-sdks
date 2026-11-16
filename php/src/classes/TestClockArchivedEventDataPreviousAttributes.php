<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $frozen_at
 * @property-read string|null $name
 * @property-read string|null $status
 * @property-read string|null $test_clock_id
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class TestClockArchivedEventDataPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'frozen_at'?: mixed, 'name'?: mixed, 'status'?: mixed, 'test_clock_id'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TestClockArchivedEventDataPreviousAttributes')); }
    /** When the test clock was created, in real time. anyOf[1] (Value): string. When the test clock was created, in real time. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. anyOf[1] (Value): string. The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFrozenAt(): string|null { return $this->get('frozen_at'); }
    public function hasFrozenAt(): bool { return $this->has('frozen_at'); }
    /** Your label for the test clock. Omitted when you didn't set one. anyOf[1] (Value): string. Your label for the test clock. Omitted when you didn't set one. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. Value enum: "ready", "advancing", "failed", "archived". anyOf[1] (Value): string. Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. Value enum: "ready", "advancing", "failed", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for the test clock. anyOf[1] (Value): string. Unique identifier for the test clock. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTestClockId(): string|null { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
    /** When the test clock last changed, in real time. anyOf[1] (Value): string. When the test clock last changed, in real time. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
