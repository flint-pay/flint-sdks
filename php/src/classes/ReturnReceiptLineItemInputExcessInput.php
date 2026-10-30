<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $quantity
 * @property-read string $return_line_item_id
 * @property-read string $type
 * @property-read ReturnUnverifiedItemInput|array<array-key, mixed>|\stdClass $unverified_item
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptLineItemInputExcessInput extends Model {
    /** @param array{'quantity': int, 'return_line_item_id': string, 'type': string, 'unverified_item'?: ReturnUnverifiedItemInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptLineItemInputExcessInput')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Whether this observation matches a Return line, is unverified merchandise, or is known excess merchandise. Value enum: "excess".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** A buyer or catalog identity observation that has not been matched to a Return line. Merchandise received in a return that does not match an expected return line, described by name, SKU, and description.
     * @return ReturnUnverifiedItemInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unverified_item is omitted; use hasUnverifiedItem() or valueOrDefault().
     */
    public function getUnverifiedItem(): mixed { return $this->get('unverified_item'); }
    public function hasUnverifiedItem(): bool { return $this->has('unverified_item'); }
}
