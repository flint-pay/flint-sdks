<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string|\DateTimeInterface $failed_at
 * @property-read string $message
 * @property-read array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object|null $remediation
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentErrorSummaryInput extends Model {
    /** @param array{'code': string, 'failed_at': string|\DateTimeInterface, 'message': string, 'remediation': array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentErrorSummaryInput')); }
    /** Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Value enum: "card_declined", "insufficient_funds", "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable", "payment_method_declined", "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable", "payment_failed".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Time the payment attempt concluded in failure. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When failed_at is omitted; use hasFailedAt() or valueOrDefault().
     */
    public function getFailedAt(): string|\DateTimeInterface { return $this->get('failed_at'); }
    public function hasFailedAt(): bool { return $this->has('failed_at'); }
    /** Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Guidance for resolving the payment failure before trying to collect again. anyOf[1] (Value): {@see ErrorRemediationInput}. Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions. anyOf[2] (Value): null.
     * @return array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object|null
     * @throws SdkError When remediation is omitted; use hasRemediation() or valueOrDefault().
     */
    public function getRemediation(): mixed { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
}
