<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $quantity
 * @property-read ?string $release_timing
 * @property-read string $return_line_item_id
 * @property-read string $return_resolution_id
 * @property-read string $return_resolution_line_item_id
 * @property-read MoneyValue $returned_total_money
 * Presence-aware response; omitted optional fields return null. */
final class ReturnResolutionLineItem extends Model {
    /** @param array{'quantity': string, 'release_timing'?: string, 'return_line_item_id': string, 'return_resolution_id': string, 'return_resolution_line_item_id': string, 'returned_total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionLineItem')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string. Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return ?string
     */
    public function getReleaseTiming(): ?string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnResolutionLineItemId(): string { return $this->get('return_resolution_line_item_id'); }
    public function hasReturnResolutionLineItemId(): bool { return $this->has('return_resolution_line_item_id'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReturnedTotalMoney(): MoneyValue { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
