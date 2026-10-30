<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $workload_identity_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class WorkloadIdentitiesDeleteInput extends Model {
    /** @param array{'workload_identity_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WorkloadIdentitiesDeleteInput')); }
    /** Flint workload identity ID. Example: "wid_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When workload_identity_id is omitted; use hasWorkloadIdentityId() or valueOrDefault().
     */
    public function getWorkloadIdentityId(): string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
    /** Optional version most recently read. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
