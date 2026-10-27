<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $quantity
 * @property-read string $return_line_item_id
 * @property-read ReturnUnverifiedItemInput|array<array-key, mixed>|\stdClass $unverified_item
 * @property-read string $verification_status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptLineItemRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptLineItemRequestInput')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string. The expected Return line. Required for matched and explicitly excess merchandise. minLength: 1.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): {@see ReturnUnverifiedItemInput}. A buyer or catalog identity observation that has not been matched to a Return line. Merchandise received in a return that does not match an expected return line, described by name, SKU, and description.
     * @return ReturnUnverifiedItemInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unverified_item is omitted; use hasUnverifiedItem() or valueOrDefault().
     */
    public function getUnverifiedItem(): mixed { return $this->get('unverified_item'); }
    public function hasUnverifiedItem(): bool { return $this->has('unverified_item'); }
    /** Shape $ (Value): string. Set to excess only when the merchandise is known to exceed the committed handback quantity for return_line_item_id. Omit for matched or unverified merchandise. Value enum: "excess".
     * @return string
     * @throws SdkError When verification_status is omitted; use hasVerificationStatus() or valueOrDefault().
     */
    public function getVerificationStatus(): string { return $this->get('verification_status'); }
    public function hasVerificationStatus(): bool { return $this->has('verification_status'); }
}
