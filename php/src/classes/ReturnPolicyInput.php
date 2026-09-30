<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $current_return_policy_revision_id
 * @property-read array{'allowed_resolution_types': list<string>, 'approval_mode': string, 'automatic_resolution_type'?: string, 'completion_mode'?: string, 'created_at': string|\DateTimeInterface, 'effective_at'?: string|\DateTimeInterface, 'eligibility_result': string, 'ineligibility_reason'?: string, 'is_inspection_required'?: bool, 'is_merchandise_return_required': bool, 'priority': int, 'receipt_disposition_mode': string, 'receiving_location_id'?: string, 'refund_timing'?: string, 'resolution_mode'?: string, 'resolution_selection_mode'?: string, 'restocking_fee'?: ReturnRestockingFeePolicyInput|array<array-key, mixed>|\stdClass, 'return_policy_id': string, 'return_policy_revision_id': string, 'return_shipping'?: ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass, 'return_window'?: ReturnWindowInput|array<array-key, mixed>|\stdClass, 'scope': ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass, ...}|object|null $current_revision
 * @property-read string $external_reference_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $return_policy_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPolicyInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'current_return_policy_revision_id': string, 'current_revision'?: array{'allowed_resolution_types': list<string>, 'approval_mode': string, 'automatic_resolution_type'?: string, 'completion_mode'?: string, 'created_at': string|\DateTimeInterface, 'effective_at'?: string|\DateTimeInterface, 'eligibility_result': string, 'ineligibility_reason'?: string, 'is_inspection_required'?: bool, 'is_merchandise_return_required': bool, 'priority': int, 'receipt_disposition_mode': string, 'receiving_location_id'?: string, 'refund_timing'?: string, 'resolution_mode'?: string, 'resolution_selection_mode'?: string, 'restocking_fee'?: ReturnRestockingFeePolicyInput|array<array-key, mixed>|\stdClass, 'return_policy_id': string, 'return_policy_revision_id': string, 'return_shipping'?: ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass, 'return_window'?: ReturnWindowInput|array<array-key, mixed>|\stdClass, 'scope': ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass, ...}|object|null, 'external_reference_id'?: string, 'metadata': array<array-key, string>|\stdClass, 'name': string, 'return_policy_id': string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When current_return_policy_revision_id is omitted; use hasCurrentReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getCurrentReturnPolicyRevisionId(): string { return $this->get('current_return_policy_revision_id'); }
    public function hasCurrentReturnPolicyRevisionId(): bool { return $this->has('current_return_policy_revision_id'); }
    /** @return array{'allowed_resolution_types': list<string>, 'approval_mode': string, 'automatic_resolution_type'?: string, 'completion_mode'?: string, 'created_at': string|\DateTimeInterface, 'effective_at'?: string|\DateTimeInterface, 'eligibility_result': string, 'ineligibility_reason'?: string, 'is_inspection_required'?: bool, 'is_merchandise_return_required': bool, 'priority': int, 'receipt_disposition_mode': string, 'receiving_location_id'?: string, 'refund_timing'?: string, 'resolution_mode'?: string, 'resolution_selection_mode'?: string, 'restocking_fee'?: ReturnRestockingFeePolicyInput|array<array-key, mixed>|\stdClass, 'return_policy_id': string, 'return_policy_revision_id': string, 'return_shipping'?: ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass, 'return_window'?: ReturnWindowInput|array<array-key, mixed>|\stdClass, 'scope': ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass, ...}|object|null
     * @throws SdkError When current_revision is omitted; use hasCurrentRevision() or valueOrDefault().
     */
    public function getCurrentRevision(): mixed { return $this->get('current_revision'); }
    public function hasCurrentRevision(): bool { return $this->has('current_revision'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
