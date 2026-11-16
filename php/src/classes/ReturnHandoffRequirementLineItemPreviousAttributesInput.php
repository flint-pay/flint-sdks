<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $quantity
 * @property-read string|null $return_id
 * @property-read string|null $return_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnHandoffRequirementLineItemPreviousAttributesInput extends Model {
    /** @param array{'quantity'?: int|null, 'return_id'?: string|null, 'return_line_item_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnHandoffRequirementLineItemPreviousAttributesInput')); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Return that owns return_line_item_id. anyOf[1] (Value): string. Return that owns return_line_item_id. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the Return line the entry is about. anyOf[1] (Value): string. ID of the Return line the entry is about. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): mixed { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
