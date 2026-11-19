<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read string|\DateTimeInterface|null $failed_at
 * @property-read string|null $message
 * @property-read ErrorRemediationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $remediation
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentErrorSummaryPreviousAttributesInput extends Model {
    /** @param array{'code'?: string|null, 'failed_at'?: string|\DateTimeInterface|null, 'message'?: string|null, 'remediation'?: ErrorRemediationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentErrorSummaryPreviousAttributesInput')); }
    /** Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Value enum: "card_declined", "card_declined_do_not_retry", "card_details_outdated", "insufficient_funds", "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable", "payment_method_declined", "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable", "incorrect_pin", "pin_try_exceeded", "pin_required", "confirmation_token_account_mismatch", "payment_failed". anyOf[1] (Value): string. Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Value enum: "card_declined", "card_declined_do_not_retry", "card_details_outdated", "insufficient_funds", "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable", "payment_method_declined", "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable", "incorrect_pin", "pin_try_exceeded", "pin_required", "confirmation_token_account_mismatch", "payment_failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): mixed { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Time the payment attempt concluded in failure. anyOf[1] (Value): string. Time the payment attempt concluded in failure. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When failed_at is omitted; use hasFailedAt() or valueOrDefault().
     */
    public function getFailedAt(): mixed { return $this->get('failed_at'); }
    public function hasFailedAt(): bool { return $this->has('failed_at'); }
    /** Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. anyOf[1] (Value): string. Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): mixed { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Guidance for resolving the payment failure before trying to collect again. anyOf[1] (Value): {@see ErrorRemediationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ErrorRemediationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When remediation is omitted; use hasRemediation() or valueOrDefault().
     */
    public function getRemediation(): mixed { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
}
