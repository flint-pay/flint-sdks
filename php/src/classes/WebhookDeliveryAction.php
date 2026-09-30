<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $attempt_number
 * @property-read string $attempt_status
 * @property-read string $completed_at
 * @property-read string $delivery_status
 * @property-read string $delivery_trigger
 * @property-read string $diagnostic_category
 * @property-read string $duration_milliseconds
 * @property-read string $error_category
 * @property-read string $error_message
 * @property-read string $error_summary
 * @property-read string $reason
 * @property-read string $recommended_action
 * @property-read string $reference_url
 * @property-read string $response_body_excerpt
 * @property-read string $response_content_type
 * @property-read string $response_headers
 * @property-read bool $retryable
 * @property-read string $started_at
 * @property-read int $status_code
 * @property-read string $webhook_delivery_attempt_id
 * @property-read string $webhook_delivery_id
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookDeliveryAction extends Model {
    /** @param array{'attempt_number': int, 'attempt_status': string, 'completed_at'?: string, 'delivery_status': string, 'delivery_trigger': string, 'diagnostic_category'?: string, 'duration_milliseconds'?: string, 'error_category'?: string, 'error_message'?: string, 'error_summary'?: string, 'reason'?: string, 'recommended_action'?: string, 'reference_url'?: string, 'response_body_excerpt'?: string, 'response_content_type'?: string, 'response_headers'?: string, 'retryable'?: bool, 'started_at'?: string, 'status_code'?: int, 'webhook_delivery_attempt_id': string, 'webhook_delivery_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDeliveryAction')); }
    /** @return int
     * @throws SdkError When attempt_number is omitted; use hasAttemptNumber() or valueOrDefault().
     */
    public function getAttemptNumber(): int { return $this->get('attempt_number'); }
    public function hasAttemptNumber(): bool { return $this->has('attempt_number'); }
    /** @return string
     * @throws SdkError When attempt_status is omitted; use hasAttemptStatus() or valueOrDefault().
     */
    public function getAttemptStatus(): string { return $this->get('attempt_status'); }
    public function hasAttemptStatus(): bool { return $this->has('attempt_status'); }
    /** @return string
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** @return string
     * @throws SdkError When delivery_status is omitted; use hasDeliveryStatus() or valueOrDefault().
     */
    public function getDeliveryStatus(): string { return $this->get('delivery_status'); }
    public function hasDeliveryStatus(): bool { return $this->has('delivery_status'); }
    /** @return string
     * @throws SdkError When delivery_trigger is omitted; use hasDeliveryTrigger() or valueOrDefault().
     */
    public function getDeliveryTrigger(): string { return $this->get('delivery_trigger'); }
    public function hasDeliveryTrigger(): bool { return $this->has('delivery_trigger'); }
    /** @return string
     * @throws SdkError When diagnostic_category is omitted; use hasDiagnosticCategory() or valueOrDefault().
     */
    public function getDiagnosticCategory(): string { return $this->get('diagnostic_category'); }
    public function hasDiagnosticCategory(): bool { return $this->has('diagnostic_category'); }
    /** @return string
     * @throws SdkError When duration_milliseconds is omitted; use hasDurationMilliseconds() or valueOrDefault().
     */
    public function getDurationMilliseconds(): string { return $this->get('duration_milliseconds'); }
    public function hasDurationMilliseconds(): bool { return $this->has('duration_milliseconds'); }
    /** @return string
     * @throws SdkError When error_category is omitted; use hasErrorCategory() or valueOrDefault().
     */
    public function getErrorCategory(): string { return $this->get('error_category'); }
    public function hasErrorCategory(): bool { return $this->has('error_category'); }
    /** @return string
     * @throws SdkError When error_message is omitted; use hasErrorMessage() or valueOrDefault().
     */
    public function getErrorMessage(): string { return $this->get('error_message'); }
    public function hasErrorMessage(): bool { return $this->has('error_message'); }
    /** @return string
     * @throws SdkError When error_summary is omitted; use hasErrorSummary() or valueOrDefault().
     */
    public function getErrorSummary(): string { return $this->get('error_summary'); }
    public function hasErrorSummary(): bool { return $this->has('error_summary'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When recommended_action is omitted; use hasRecommendedAction() or valueOrDefault().
     */
    public function getRecommendedAction(): string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** @return string
     * @throws SdkError When reference_url is omitted; use hasReferenceUrl() or valueOrDefault().
     */
    public function getReferenceUrl(): string { return $this->get('reference_url'); }
    public function hasReferenceUrl(): bool { return $this->has('reference_url'); }
    /** @return string
     * @throws SdkError When response_body_excerpt is omitted; use hasResponseBodyExcerpt() or valueOrDefault().
     */
    public function getResponseBodyExcerpt(): string { return $this->get('response_body_excerpt'); }
    public function hasResponseBodyExcerpt(): bool { return $this->has('response_body_excerpt'); }
    /** @return string
     * @throws SdkError When response_content_type is omitted; use hasResponseContentType() or valueOrDefault().
     */
    public function getResponseContentType(): string { return $this->get('response_content_type'); }
    public function hasResponseContentType(): bool { return $this->has('response_content_type'); }
    /** @return string
     * @throws SdkError When response_headers is omitted; use hasResponseHeaders() or valueOrDefault().
     */
    public function getResponseHeaders(): string { return $this->get('response_headers'); }
    public function hasResponseHeaders(): bool { return $this->has('response_headers'); }
    /** @return bool
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** @return string
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** @return int
     * @throws SdkError When status_code is omitted; use hasStatusCode() or valueOrDefault().
     */
    public function getStatusCode(): int { return $this->get('status_code'); }
    public function hasStatusCode(): bool { return $this->has('status_code'); }
    /** @return string
     * @throws SdkError When webhook_delivery_attempt_id is omitted; use hasWebhookDeliveryAttemptId() or valueOrDefault().
     */
    public function getWebhookDeliveryAttemptId(): string { return $this->get('webhook_delivery_attempt_id'); }
    public function hasWebhookDeliveryAttemptId(): bool { return $this->has('webhook_delivery_attempt_id'); }
    /** @return string
     * @throws SdkError When webhook_delivery_id is omitted; use hasWebhookDeliveryId() or valueOrDefault().
     */
    public function getWebhookDeliveryId(): string { return $this->get('webhook_delivery_id'); }
    public function hasWebhookDeliveryId(): bool { return $this->has('webhook_delivery_id'); }
    /** @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
