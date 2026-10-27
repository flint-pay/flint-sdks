<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $action_required_by
 * @property-read string $corrects_return_resolution_id
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string $external_reference_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read list<string> $resolution_type
 * @property-read string $return_id
 * @property-read string $return_line_item_id
 * @property-read string $return_policy_revision_id
 * @property-read list<string> $status
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionsListInput extends Model {
    /** @param array{'action_required_by'?: list<string>, 'corrects_return_resolution_id'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'resolution_type'?: list<string>, 'return_id'?: string, 'return_line_item_id'?: string, 'return_policy_revision_id'?: string, 'status'?: list<string>, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionsListInput')); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "buyer", "merchant", "integration". Shape $[] (Value): string.  Value enum: "buyer", "merchant", "integration".
     * @return list<string>
     * @throws SdkError When action_required_by is omitted; use hasActionRequiredBy() or valueOrDefault().
     */
    public function getActionRequiredBy(): array { return $this->get('action_required_by'); }
    public function hasActionRequiredBy(): bool { return $this->has('action_required_by'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When corrects_return_resolution_id is omitted; use hasCorrectsReturnResolutionId() or valueOrDefault().
     */
    public function getCorrectsReturnResolutionId(): string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". Shape $[] (Value): string.  Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * @return list<string>
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): array { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled". Shape $[] (Value): string.  Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
    /** Shape $ (Value): Array of string.  [] enum: "replacement_order". Shape $[] (Value): string.  Value enum: "replacement_order".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
