<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_current_return_policy_revision_id
 * @property-read string $expected_version
 * @property-read ReturnPolicyRevisionRequestInput|array<array-key, mixed>|\stdClass $revision
 * Presence-aware input; omitted fields throw when accessed. */
final class PublishReturnPolicyRevisionRequestInput extends Model {
    /** @param array{'expected_current_return_policy_revision_id': string, 'expected_version'?: string, 'revision': ReturnPolicyRevisionRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublishReturnPolicyRevisionRequestInput')); }
    /** @return string
     * @throws SdkError When expected_current_return_policy_revision_id is omitted; use hasExpectedCurrentReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getExpectedCurrentReturnPolicyRevisionId(): string { return $this->get('expected_current_return_policy_revision_id'); }
    public function hasExpectedCurrentReturnPolicyRevisionId(): bool { return $this->has('expected_current_return_policy_revision_id'); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return ReturnPolicyRevisionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When revision is omitted; use hasRevision() or valueOrDefault().
     */
    public function getRevision(): mixed { return $this->get('revision'); }
    public function hasRevision(): bool { return $this->has('revision'); }
}
