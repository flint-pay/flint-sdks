<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $quantity
 * @property-read string $return_line_item_id
 * @property-read string $return_resolution_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateReturnResolutionLineItemRequestInput extends Model {
    /** @param array{'quantity': int, 'return_line_item_id': string, 'return_resolution_line_item_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateReturnResolutionLineItemRequestInput')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When return_resolution_line_item_id is omitted; use hasReturnResolutionLineItemId() or valueOrDefault().
     */
    public function getReturnResolutionLineItemId(): string { return $this->get('return_resolution_line_item_id'); }
    public function hasReturnResolutionLineItemId(): bool { return $this->has('return_resolution_line_item_id'); }
}
