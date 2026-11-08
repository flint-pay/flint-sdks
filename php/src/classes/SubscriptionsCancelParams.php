<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $cancel_immediately
 * @property-read string $cancellation_comment
 * @property-read string $cancellation_reason_code
 * @property-read int $expected_version
 * @property-read string $initiated_by
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionsCancelParams extends Model {
    /** @param array{'cancel_immediately'?: bool, 'cancellation_comment'?: string, 'cancellation_reason_code'?: string, 'expected_version'?: int, 'initiated_by'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionsCancelParams')); }
    /** When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due, instead of that charge. An active subscription with an expired renewal delivery hold ends now. A scheduled, incomplete, or paused subscription, or a past_due subscription without next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. A buyer may cancel immediately when the store allows buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial continues until trial_end_at.
     * @return bool
     * @throws SdkError When cancel_immediately is omitted; use hasCancelImmediately() or valueOrDefault().
     */
    public function getCancelImmediately(): bool { return $this->get('cancel_immediately'); }
    public function hasCancelImmediately(): bool { return $this->has('cancel_immediately'); }
    /** Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed. Recorded in cancellation_details.comment, which only merchant credentials read. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When cancellation_comment is omitted; use hasCancellationComment() or valueOrDefault().
     */
    public function getCancellationComment(): string { return $this->get('cancellation_comment'); }
    public function hasCancellationComment(): bool { return $this->has('cancellation_comment'); }
    /** Optional. Why the subscription is being canceled. When the store lists customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one of them; merchant credentials may send any code. Recorded in cancellation_details.reason_code. Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * @return string
     * @throws SdkError When cancellation_reason_code is omitted; use hasCancellationReasonCode() or valueOrDefault().
     */
    public function getCancellationReasonCode(): string { return $this->get('cancellation_reason_code'); }
    public function hasCancellationReasonCode(): bool { return $this->has('cancellation_reason_code'); }
    /** Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Who asked to cancel: buyer, merchant, or integration. Defaults to merchant. Attribution only; this does not apply the store's buyer limits. To enforce them, use a customer session on POST /v1/me/subscriptions/{subscription_id}/cancel. Recorded in cancellation_details.requested_by and cancellation_reason. Default: "merchant". Value enum: "buyer", "merchant", "integration".
     * @return string
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
