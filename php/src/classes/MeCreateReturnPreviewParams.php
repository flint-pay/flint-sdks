<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'order_id': string, 'selection': array{'line_items'?: list<array{'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id'?: string}|object>, 'selection_type': string}|object|array{'line_items': list<array{'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id'?: string}|object>, 'selection_type': string}|object}|object $eligibility
 * @property-read string $mode
 * @property-read array{'line_items': list<array{'quantity': int, 'return_line_item_id': string}|object>, 'replacement_line_items'?: list<array{'bundle_id'?: string, 'quantity': int, 'type': string, 'variant_id': string}|object|array{'bundle_id': string, 'quantity': int, 'type': string, 'variant_id'?: string}|object>, 'resolution_type': string, 'return_id': string}|object $resolution
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateReturnPreviewParams extends Model {
    /** @param array{'eligibility': array{'order_id': string, 'selection': array{'line_items'?: list<array{'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id'?: string}|object>, 'selection_type': string}|object|array{'line_items': list<array{'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id'?: string}|object>, 'selection_type': string}|object}|object, 'mode': string, 'resolution'?: array{'line_items': list<array{'quantity': int, 'return_line_item_id': string}|object>, 'replacement_line_items'?: list<array{'bundle_id'?: string, 'quantity': int, 'type': string, 'variant_id': string}|object|array{'bundle_id': string, 'quantity': int, 'type': string, 'variant_id'?: string}|object>, 'resolution_type': string, 'return_id': string}|object}|object|array{'eligibility'?: array{'order_id': string, 'selection': array{'line_items'?: list<array{'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id'?: string}|object>, 'selection_type': string}|object|array{'line_items': list<array{'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id'?: string}|object>, 'selection_type': string}|object}|object, 'mode': string, 'resolution': array{'line_items': list<array{'quantity': int, 'return_line_item_id': string}|object>, 'replacement_line_items'?: list<array{'bundle_id'?: string, 'quantity': int, 'type': string, 'variant_id': string}|object|array{'bundle_id': string, 'quantity': int, 'type': string, 'variant_id'?: string}|object>, 'resolution_type': string, 'return_id': string}|object}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewParams')); }
    /** A request to preview which items of an order can be returned, given an order and a selection.
     * @return array{'order_id': string, 'selection': array{'line_items'?: list<array{'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id'?: string}|object>, 'selection_type': string}|object|array{'line_items': list<array{'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id'?: string}|object>, 'selection_type': string}|object}|object
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): array|object { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Value enum: "eligibility", "resolution".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return.
     * @return array{'line_items': list<array{'quantity': int, 'return_line_item_id': string}|object>, 'replacement_line_items'?: list<array{'bundle_id'?: string, 'quantity': int, 'type': string, 'variant_id': string}|object|array{'bundle_id': string, 'quantity': int, 'type': string, 'variant_id'?: string}|object>, 'resolution_type': string, 'return_id': string}|object
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): array|object { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
