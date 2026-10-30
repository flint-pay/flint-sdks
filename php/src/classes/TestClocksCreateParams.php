<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $frozen_at
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class TestClocksCreateParams extends Model {
    /** @param array{'frozen_at'?: string|\DateTimeInterface, 'name'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TestClocksCreateParams')); }
    /** The time the clock starts at. Defaults to now. It can be up to 5 years ahead, and no more than an hour behind now, to allow for clock skew on your side. Fractional seconds are truncated. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When frozen_at is omitted; use hasFrozenAt() or valueOrDefault().
     */
    public function getFrozenAt(): string|\DateTimeInterface { return $this->get('frozen_at'); }
    public function hasFrozenAt(): bool { return $this->has('frozen_at'); }
    /** Your label for the test clock. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
