<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string $handback_quantity
 * @property-read string $quantity
 * @property-read string $reason
 * @property-read string $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelReturnLineItemRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'handback_quantity'?: string, 'quantity': string, 'reason': string, 'reason_message'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelReturnLineItemRequestInput')); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): integer string. How many of the canceled units the buyer no longer has to send back, as a whole number; fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower it only as far as the canceled quantity requires. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When handback_quantity is omitted; use hasHandbackQuantity() or valueOrDefault().
     */
    public function getHandbackQuantity(): string { return $this->get('handback_quantity'); }
    public function hasHandbackQuantity(): bool { return $this->has('handback_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string.  Value enum: "buyer_request", "merchant_request", "expired", "created_in_error", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
