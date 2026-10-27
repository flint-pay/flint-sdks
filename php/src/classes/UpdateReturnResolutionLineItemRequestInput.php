<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $quantity
 * @property-read string $return_line_item_id
 * @property-read string $return_resolution_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateReturnResolutionLineItemRequestInput extends Model {
    /** @param array{'quantity': string, 'return_line_item_id': string, 'return_resolution_line_item_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateReturnResolutionLineItemRequestInput')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When return_resolution_line_item_id is omitted; use hasReturnResolutionLineItemId() or valueOrDefault().
     */
    public function getReturnResolutionLineItemId(): string { return $this->get('return_resolution_line_item_id'); }
    public function hasReturnResolutionLineItemId(): bool { return $this->has('return_resolution_line_item_id'); }
}
