<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read int $handback_quantity
 * @property-read int $quantity
 * @property-read string $reason
 * @property-read string $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsCancelLineItemParams extends Model {
    /** @param array{'expected_version'?: int, 'handback_quantity'?: int, 'quantity': int, 'reason': string, 'reason_message'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsCancelLineItemParams')); }
    /** Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** How many of the canceled units the buyer no longer has to send back, as a whole number; fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower it only as far as the canceled quantity requires. Format: int64.
     * @return int
     * @throws SdkError When handback_quantity is omitted; use hasHandbackQuantity() or valueOrDefault().
     */
    public function getHandbackQuantity(): int { return $this->get('handback_quantity'); }
    public function hasHandbackQuantity(): bool { return $this->has('handback_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Value enum: "buyer_request", "merchant_request", "expired", "created_in_error", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
