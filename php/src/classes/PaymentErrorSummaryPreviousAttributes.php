<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read string|null $failed_at
 * @property-read string|null $message
 * @property-read ErrorRemediationPreviousAttributes|null $remediation
 * Presence-aware response; omitted optional fields return null. */
final class PaymentErrorSummaryPreviousAttributes extends Model {
    /** @param array{'code'?: mixed, 'failed_at'?: mixed, 'message'?: mixed, 'remediation'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentErrorSummaryPreviousAttributes')); }
    /** Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Value enum: "card_declined", "card_declined_do_not_retry", "card_details_outdated", "insufficient_funds", "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable", "payment_method_declined", "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable", "incorrect_pin", "pin_try_exceeded", "pin_required", "confirmation_token_account_mismatch", "payment_failed". anyOf[1] (Value): string. Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Value enum: "card_declined", "card_declined_do_not_retry", "card_details_outdated", "insufficient_funds", "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable", "payment_method_declined", "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable", "incorrect_pin", "pin_try_exceeded", "pin_required", "confirmation_token_account_mismatch", "payment_failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCode(): string|null { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Time the payment attempt concluded in failure. anyOf[1] (Value): string. Time the payment attempt concluded in failure. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailedAt(): string|null { return $this->get('failed_at'); }
    public function hasFailedAt(): bool { return $this->has('failed_at'); }
    /** Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. anyOf[1] (Value): string. Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMessage(): string|null { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Guidance for resolving the payment failure before trying to collect again. anyOf[1] (Value): {@see ErrorRemediationPreviousAttributes}. anyOf[2] (Value): null.
     * @return ErrorRemediationPreviousAttributes|null
     */
    public function getRemediation(): ErrorRemediationPreviousAttributes|null { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
}
