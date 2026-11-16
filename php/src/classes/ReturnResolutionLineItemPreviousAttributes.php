<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $quantity
 * @property-read string|null $release_timing
 * @property-read string|null $return_id
 * @property-read string|null $return_line_item_id
 * @property-read string|null $return_resolution_id
 * @property-read string|null $return_resolution_line_item_id
 * @property-read MoneyValuePreviousAttributes|null $returned_total_money
 * Presence-aware response; omitted optional fields return null. */
final class ReturnResolutionLineItemPreviousAttributes extends Model {
    /** @param array{'quantity'?: mixed, 'release_timing'?: mixed, 'return_id'?: mixed, 'return_line_item_id'?: mixed, 'return_resolution_id'?: mixed, 'return_resolution_line_item_id'?: mixed, 'returned_total_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionLineItemPreviousAttributes')); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[1] (Value): string. Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReleaseTiming(): string|null { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Return that owns return_line_item_id. anyOf[1] (Value): string. Return that owns return_line_item_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the Return line the resolution covers. anyOf[1] (Value): string. ID of the Return line the resolution covers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnLineItemId(): string|null { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** ID of the resolution the line belongs to. anyOf[1] (Value): string. ID of the resolution the line belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnResolutionId(): string|null { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** ID of an existing resolution line to keep. Leave out to add a new line. anyOf[1] (Value): string. ID of an existing resolution line to keep. Leave out to add a new line. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnResolutionLineItemId(): string|null { return $this->get('return_resolution_line_item_id'); }
    public function hasReturnResolutionLineItemId(): bool { return $this->has('return_resolution_line_item_id'); }
    /** Value of the returned units this line covers. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReturnedTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
