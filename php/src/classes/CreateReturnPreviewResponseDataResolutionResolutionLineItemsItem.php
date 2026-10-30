<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $quantity
 * @property-read ?string $release_timing
 * @property-read string $return_line_item_id
 * @property-read string $return_resolution_id
 * @property-read string $return_resolution_line_item_id
 * @property-read CreateReturnPreviewResponseDataResolutionResolutionLineItemsItemReturnedTotalMoney $returned_total_money
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataResolutionResolutionLineItemsItem extends Model {
    /** @param array{'quantity': int, 'release_timing'?: string, 'return_line_item_id': string, 'return_resolution_id': string, 'return_resolution_line_item_id': string, 'returned_total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataResolutionResolutionLineItemsItem')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return ?string
     */
    public function getReleaseTiming(): ?string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** return_line_item_id
     * @return string
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** return_resolution_id
     * @return string
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** return_resolution_line_item_id
     * @return string
     */
    public function getReturnResolutionLineItemId(): string { return $this->get('return_resolution_line_item_id'); }
    public function hasReturnResolutionLineItemId(): bool { return $this->has('return_resolution_line_item_id'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataResolutionResolutionLineItemsItemReturnedTotalMoney
     */
    public function getReturnedTotalMoney(): CreateReturnPreviewResponseDataResolutionResolutionLineItemsItemReturnedTotalMoney { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
