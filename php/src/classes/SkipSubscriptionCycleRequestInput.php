<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string $initiated_by
 * Presence-aware input; omitted fields throw when accessed. */
final class SkipSubscriptionCycleRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'initiated_by'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SkipSubscriptionCycleRequestInput')); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return string
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
}
