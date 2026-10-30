<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $completion_mode
 * @property-read int $expected_version
 * @property-read list<array{'decision'?: mixed, 'disposition'?: ReturnProcessDispositionRequestInput|array<array-key, mixed>|\stdClass, 'inspection'?: ReturnProcessInspectionRequestInput|array<array-key, mixed>|\stdClass, 'received_quantity'?: int, 'resolution'?: array{'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'pricing_basis'?: string, 'quantity': int, 'replacement_line_items'?: list<array{'bundle_id'?: string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id': string}|object|array{'bundle_id': string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string}|object|array{'bundle_id'?: string, 'description'?: string, 'name': string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string}|object>, 'resolution_type': string}|object, 'return_line_item_id': string}|object> $line_items
 * @property-read array{'external_actor_id'?: string, 'external_reference_id'?: string, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'source_system'?: ReturnSourceSystemRequestInput|array<array-key, mixed>|\stdClass}|object $receipt
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsProcessParams extends Model {
    /** @param array{'completion_mode'?: string, 'expected_version'?: int, 'line_items': list<array{'decision'?: mixed, 'disposition'?: ReturnProcessDispositionRequestInput|array<array-key, mixed>|\stdClass, 'inspection'?: ReturnProcessInspectionRequestInput|array<array-key, mixed>|\stdClass, 'received_quantity'?: int, 'resolution'?: array{'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'pricing_basis'?: string, 'quantity': int, 'replacement_line_items'?: list<array{'bundle_id'?: string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id': string}|object|array{'bundle_id': string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string}|object|array{'bundle_id'?: string, 'description'?: string, 'name': string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string}|object>, 'resolution_type': string}|object, 'return_line_item_id': string}|object>, 'receipt'?: array{'external_actor_id'?: string, 'external_reference_id'?: string, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'source_system'?: ReturnSourceSystemRequestInput|array<array-key, mixed>|\stdClass}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsProcessParams')); }
    /** Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param completion_mode. Value enum: "manual", "automatic".
     * @return string
     * @throws SdkError When completion_mode is omitted; use hasCompletionMode() or valueOrDefault().
     */
    public function getCompletionMode(): string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** minItems: 1. [] (Value): {@see ProcessExistingReturnLineItemRequestInput}. How to process one line of an existing return: the received quantity, inspection, decision, disposition, and resolution.
     * @return list<array{'decision'?: mixed, 'disposition'?: ReturnProcessDispositionRequestInput|array<array-key, mixed>|\stdClass, 'inspection'?: ReturnProcessInspectionRequestInput|array<array-key, mixed>|\stdClass, 'received_quantity'?: int, 'resolution'?: array{'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'pricing_basis'?: string, 'quantity': int, 'replacement_line_items'?: list<array{'bundle_id'?: string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id': string}|object|array{'bundle_id': string, 'description'?: string, 'name'?: string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string}|object|array{'bundle_id'?: string, 'description'?: string, 'name': string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string}|object>, 'resolution_type': string}|object, 'return_line_item_id': string}|object>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** The receipt of returned merchandise, with when and where it was received, supplied when processing an existing return.
     * @return array{'external_actor_id'?: string, 'external_reference_id'?: string, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'source_system'?: ReturnSourceSystemRequestInput|array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When receipt is omitted; use hasReceipt() or valueOrDefault().
     */
    public function getReceipt(): array|object { return $this->get('receipt'); }
    public function hasReceipt(): bool { return $this->has('receipt'); }
}
