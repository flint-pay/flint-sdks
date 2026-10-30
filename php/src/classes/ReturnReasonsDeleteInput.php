<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_reason_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReasonsDeleteInput extends Model {
    /** @param array{'return_reason_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReasonsDeleteInput')); }
    /** Flint return reason id. Example: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Optional. The reason's current version. If it changed, the archive fails with 409 VERSION_CONFLICT and nothing changes. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
