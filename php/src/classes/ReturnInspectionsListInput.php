<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $acceptance_status
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string $external_reference_id
 * @property-read string|\DateTimeInterface $inspected_after
 * @property-read string|\DateTimeInterface $inspected_before
 * @property-read string $inspection_location_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read string $return_id
 * @property-read string $return_line_item_id
 * @property-read string $return_receipt_id
 * @property-read list<string> $source_system_type
 * @property-read list<string> $status
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnInspectionsListInput extends Model {
    /** @param array{'acceptance_status'?: list<string>, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'inspected_after'?: string|\DateTimeInterface, 'inspected_before'?: string|\DateTimeInterface, 'inspection_location_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'return_id'?: string, 'return_line_item_id'?: string, 'return_receipt_id'?: string, 'source_system_type'?: list<string>, 'status'?: list<string>, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionsListInput')); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "accepted", "rejected", "review_required". Shape $[] (Value): string.  Value enum: "accepted", "rejected", "review_required".
     * @return list<string>
     * @throws SdkError When acceptance_status is omitted; use hasAcceptanceStatus() or valueOrDefault().
     */
    public function getAcceptanceStatus(): array { return $this->get('acceptance_status'); }
    public function hasAcceptanceStatus(): bool { return $this->has('acceptance_status'); }
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
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When inspected_after is omitted; use hasInspectedAfter() or valueOrDefault().
     */
    public function getInspectedAfter(): string|\DateTimeInterface { return $this->get('inspected_after'); }
    public function hasInspectedAfter(): bool { return $this->has('inspected_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When inspected_before is omitted; use hasInspectedBefore() or valueOrDefault().
     */
    public function getInspectedBefore(): string|\DateTimeInterface { return $this->get('inspected_before'); }
    public function hasInspectedBefore(): bool { return $this->has('inspected_before'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inspection_location_id is omitted; use hasInspectionLocationId() or valueOrDefault().
     */
    public function getInspectionLocationId(): string { return $this->get('inspection_location_id'); }
    public function hasInspectionLocationId(): bool { return $this->has('inspection_location_id'); }
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
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms", "erp", "other", "flint". Shape $[] (Value): string.  Value enum: "manual", "pos", "wms", "erp", "other", "flint".
     * @return list<string>
     * @throws SdkError When source_system_type is omitted; use hasSourceSystemType() or valueOrDefault().
     */
    public function getSourceSystemType(): array { return $this->get('source_system_type'); }
    public function hasSourceSystemType(): bool { return $this->has('source_system_type'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "current", "superseded". Shape $[] (Value): string.  Value enum: "current", "superseded".
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
}
