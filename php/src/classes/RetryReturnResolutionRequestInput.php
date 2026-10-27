<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string $gift_card_refund_destination
 * @property-read string $reason
 * @property-read string $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class RetryReturnResolutionRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'gift_card_refund_destination'?: string, 'reason': string, 'reason_message'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RetryReturnResolutionRequestInput')); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: "original". Value enum: "original", "new_gift_card".
     * @return string
     * @throws SdkError When gift_card_refund_destination is omitted; use hasGiftCardRefundDestination() or valueOrDefault().
     */
    public function getGiftCardRefundDestination(): string { return $this->get('gift_card_refund_destination'); }
    public function hasGiftCardRefundDestination(): bool { return $this->has('gift_card_refund_destination'); }
    /** Shape $ (Value): string.  Value enum: "dependency_recovered", "payment_method_updated", "operator_retry", "other".
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
