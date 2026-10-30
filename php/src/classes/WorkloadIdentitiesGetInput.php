<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $workload_identity_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WorkloadIdentitiesGetInput extends Model {
    /** @param array{'workload_identity_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WorkloadIdentitiesGetInput')); }
    /** Flint workload identity ID. Example: "wid_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When workload_identity_id is omitted; use hasWorkloadIdentityId() or valueOrDefault().
     */
    public function getWorkloadIdentityId(): string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
}
