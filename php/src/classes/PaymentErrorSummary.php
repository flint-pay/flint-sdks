<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $failed_at
 * @property-read string $message
 * @property-read ErrorRemediation|null $remediation
 * Presence-aware response; omitted optional fields return null. */
final class PaymentErrorSummary extends Model {
    /** @param array{'code': string, 'failed_at': string, 'message': string, 'remediation': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentErrorSummary')); }
    /** Shape $ (Value): string. Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Value enum: "card_declined", "insufficient_funds", "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable", "payment_method_declined", "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable", "payment_failed".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string. Time the payment attempt concluded in failure. Format: date-time.
     * @return string
     */
    public function getFailedAt(): string { return $this->get('failed_at'); }
    public function hasFailedAt(): bool { return $this->has('failed_at'); }
    /** Shape $ (Value): string. Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy.
     * @return string
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Shape $ (Value): {@see ErrorRemediation} or null. Guidance for resolving the payment failure before trying to collect again. Shape $.anyOf[1] (Value): {@see ErrorRemediation}. Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions. Shape $.anyOf[2] (Value): null.
     * @return ErrorRemediation|null
     */
    public function getRemediation(): ErrorRemediation|null { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
}
