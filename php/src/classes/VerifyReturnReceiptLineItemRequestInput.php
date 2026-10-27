<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string $return_line_item_id
 * @property-read string $verification_reason
 * @property-read string $verification_reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class VerifyReturnReceiptLineItemRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'return_line_item_id': string, 'verification_reason': string, 'verification_reason_message'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('VerifyReturnReceiptLineItemRequestInput')); }
    /** Shape $ (Value): integer string. Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the receipt ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string.  Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     * @return string
     * @throws SdkError When verification_reason is omitted; use hasVerificationReason() or valueOrDefault().
     */
    public function getVerificationReason(): string { return $this->get('verification_reason'); }
    public function hasVerificationReason(): bool { return $this->has('verification_reason'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When verification_reason_message is omitted; use hasVerificationReasonMessage() or valueOrDefault().
     */
    public function getVerificationReasonMessage(): string { return $this->get('verification_reason_message'); }
    public function hasVerificationReasonMessage(): bool { return $this->has('verification_reason_message'); }
}
