<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $automatic_attempt_count
 * @property-read string $created_at
 * @property-read string $delivered_at
 * @property-read string $error_category
 * @property-read string $error_summary
 * @property-read string $last_error
 * @property-read int $last_response_code
 * @property-read int $max_attempts
 * @property-read string $next_retry_at
 * @property-read string $recommended_action
 * @property-read string $reference_url
 * @property-read bool $retryable
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $webhook_delivery_id
 * @property-read string $webhook_endpoint_id
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookDelivery extends Model {
    /** @param array{'automatic_attempt_count': int, 'created_at': string, 'delivered_at'?: string, 'error_category'?: string, 'error_summary'?: string, 'last_error'?: string, 'last_response_code'?: int, 'max_attempts': int, 'next_retry_at'?: string, 'recommended_action'?: string, 'reference_url'?: string, 'retryable'?: bool, 'status': string, 'updated_at': string, 'webhook_delivery_id': string, 'webhook_endpoint_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDelivery')); }
    /** @return int
     * @throws SdkError When automatic_attempt_count is omitted; use hasAutomaticAttemptCount() or valueOrDefault().
     */
    public function getAutomaticAttemptCount(): int { return $this->get('automatic_attempt_count'); }
    public function hasAutomaticAttemptCount(): bool { return $this->has('automatic_attempt_count'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** @return string
     * @throws SdkError When error_category is omitted; use hasErrorCategory() or valueOrDefault().
     */
    public function getErrorCategory(): string { return $this->get('error_category'); }
    public function hasErrorCategory(): bool { return $this->has('error_category'); }
    /** @return string
     * @throws SdkError When error_summary is omitted; use hasErrorSummary() or valueOrDefault().
     */
    public function getErrorSummary(): string { return $this->get('error_summary'); }
    public function hasErrorSummary(): bool { return $this->has('error_summary'); }
    /** @return string
     * @throws SdkError When last_error is omitted; use hasLastError() or valueOrDefault().
     */
    public function getLastError(): string { return $this->get('last_error'); }
    public function hasLastError(): bool { return $this->has('last_error'); }
    /** @return int
     * @throws SdkError When last_response_code is omitted; use hasLastResponseCode() or valueOrDefault().
     */
    public function getLastResponseCode(): int { return $this->get('last_response_code'); }
    public function hasLastResponseCode(): bool { return $this->has('last_response_code'); }
    /** @return int
     * @throws SdkError When max_attempts is omitted; use hasMaxAttempts() or valueOrDefault().
     */
    public function getMaxAttempts(): int { return $this->get('max_attempts'); }
    public function hasMaxAttempts(): bool { return $this->has('max_attempts'); }
    /** @return string
     * @throws SdkError When next_retry_at is omitted; use hasNextRetryAt() or valueOrDefault().
     */
    public function getNextRetryAt(): string { return $this->get('next_retry_at'); }
    public function hasNextRetryAt(): bool { return $this->has('next_retry_at'); }
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
    /** @return bool
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When webhook_delivery_id is omitted; use hasWebhookDeliveryId() or valueOrDefault().
     */
    public function getWebhookDeliveryId(): string { return $this->get('webhook_delivery_id'); }
    public function hasWebhookDeliveryId(): bool { return $this->has('webhook_delivery_id'); }
    /** @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
