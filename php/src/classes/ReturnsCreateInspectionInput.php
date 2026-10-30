<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_id
 * @property-read array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'inspected_at': string|\DateTimeInterface, 'inspection_location_id': string, 'line_items': list<array{'acceptance_status': string, 'condition': string, 'finding_codes'?: list<string>, 'internal_note'?: string, 'quantity': int, 'return_line_item_id'?: string, 'return_receipt_line_item_id': string, 'verification_reason'?: string, 'verification_reason_message'?: string}|object>, 'return_receipt_id': string, 'source_system'?: mixed, 'supersedes_return_inspection_id'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsCreateInspectionInput extends Model {
    /** @param array{'return_id': string, 'body': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'inspected_at': string|\DateTimeInterface, 'inspection_location_id': string, 'line_items': list<array{'acceptance_status': string, 'condition': string, 'finding_codes'?: list<string>, 'internal_note'?: string, 'quantity': int, 'return_line_item_id'?: string, 'return_receipt_line_item_id': string, 'verification_reason'?: string, 'verification_reason_message'?: string}|object>, 'return_receipt_id': string, 'source_system'?: mixed, 'supersedes_return_inspection_id'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsCreateInspectionInput')); }
    /** Flint return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** The request body for: Create return inspection.
     * @return array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'inspected_at': string|\DateTimeInterface, 'inspection_location_id': string, 'line_items': list<array{'acceptance_status': string, 'condition': string, 'finding_codes'?: list<string>, 'internal_note'?: string, 'quantity': int, 'return_line_item_id'?: string, 'return_receipt_line_item_id': string, 'verification_reason'?: string, 'verification_reason_message'?: string}|object>, 'return_receipt_id': string, 'source_system'?: mixed, 'supersedes_return_inspection_id'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
