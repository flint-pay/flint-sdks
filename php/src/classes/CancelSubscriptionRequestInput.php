<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $cancel_immediately
 * @property-read string $cancellation_comment
 * @property-read string $cancellation_reason_code
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelSubscriptionRequestInput extends Model {
    /** @param array{'cancel_immediately'?: bool, 'cancellation_comment'?: string, 'cancellation_reason_code'?: string, 'expected_version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelSubscriptionRequestInput')); }
    /** Shape $ (Value): boolean. When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due, instead of that charge. An active subscription with an expired renewal delivery hold ends now. A scheduled, incomplete, or paused subscription, or a past_due subscription without next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. A buyer may cancel immediately when the store allows buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial continues until trial_end_at.
     * @return bool
     * @throws SdkError When cancel_immediately is omitted; use hasCancelImmediately() or valueOrDefault().
     */
    public function getCancelImmediately(): bool { return $this->get('cancel_immediately'); }
    public function hasCancelImmediately(): bool { return $this->has('cancel_immediately'); }
    /** Shape $ (Value): string. Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed. Recorded in cancellation_details.comment, which only merchant credentials read. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When cancellation_comment is omitted; use hasCancellationComment() or valueOrDefault().
     */
    public function getCancellationComment(): string { return $this->get('cancellation_comment'); }
    public function hasCancellationComment(): bool { return $this->has('cancellation_comment'); }
    /** Shape $ (Value): string. Optional. Why the subscription is being canceled. When the store lists customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one of them; merchant credentials may send any code. Recorded in cancellation_details.reason_code. Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * @return string
     * @throws SdkError When cancellation_reason_code is omitted; use hasCancellationReasonCode() or valueOrDefault().
     */
    public function getCancellationReasonCode(): string { return $this->get('cancellation_reason_code'); }
    public function hasCancellationReasonCode(): bool { return $this->has('cancellation_reason_code'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
