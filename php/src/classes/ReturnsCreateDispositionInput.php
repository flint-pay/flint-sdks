<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_id
 * @property-read array{'disposition_type': string, 'external_reference_id'?: string, 'inventory_location_id'?: string, 'metadata'?: mixed, 'occurred_at': string|\DateTimeInterface, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaces_return_disposition_id'?: string, 'return_inspection_line_item_id'?: string, 'return_receipt_line_item_id': string}|object|array{'disposition_type': string, 'external_reference_id'?: string, 'inventory_location_id'?: string, 'metadata'?: mixed, 'occurred_at': string|\DateTimeInterface, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaces_return_disposition_id'?: string, 'return_inspection_line_item_id': string, 'return_receipt_line_item_id'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsCreateDispositionInput extends Model {
    /** @param array{'return_id': string, 'body': array{'disposition_type': string, 'external_reference_id'?: string, 'inventory_location_id'?: string, 'metadata'?: mixed, 'occurred_at': string|\DateTimeInterface, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaces_return_disposition_id'?: string, 'return_inspection_line_item_id'?: string, 'return_receipt_line_item_id': string}|object|array{'disposition_type': string, 'external_reference_id'?: string, 'inventory_location_id'?: string, 'metadata'?: mixed, 'occurred_at': string|\DateTimeInterface, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaces_return_disposition_id'?: string, 'return_inspection_line_item_id': string, 'return_receipt_line_item_id'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsCreateDispositionInput')); }
    /** Flint return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** The request body for: Create return disposition.
     * @return array{'disposition_type': string, 'external_reference_id'?: string, 'inventory_location_id'?: string, 'metadata'?: mixed, 'occurred_at': string|\DateTimeInterface, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaces_return_disposition_id'?: string, 'return_inspection_line_item_id'?: string, 'return_receipt_line_item_id': string}|object|array{'disposition_type': string, 'external_reference_id'?: string, 'inventory_location_id'?: string, 'metadata'?: mixed, 'occurred_at': string|\DateTimeInterface, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaces_return_disposition_id'?: string, 'return_inspection_line_item_id': string, 'return_receipt_line_item_id'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
