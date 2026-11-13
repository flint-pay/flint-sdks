<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $checked_at
 * @property-read string $delivery_rate_callback_id
 * @property-read string $delivery_rate_callback_revision_id
 * @property-read string $delivery_rate_callback_signing_key_id
 * @property-read string $failure_category
 * @property-read int $http_status_code
 * @property-read int $latency_milliseconds
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateCallbackConnectionCheckInput extends Model {
    /** @param array{'checked_at': string|\DateTimeInterface, 'delivery_rate_callback_id': string, 'delivery_rate_callback_revision_id': string, 'delivery_rate_callback_signing_key_id': string, 'failure_category'?: string, 'http_status_code'?: int, 'latency_milliseconds': int, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackConnectionCheckInput')); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When checked_at is omitted; use hasCheckedAt() or valueOrDefault().
     */
    public function getCheckedAt(): string|\DateTimeInterface { return $this->get('checked_at'); }
    public function hasCheckedAt(): bool { return $this->has('checked_at'); }
    /** ID of the delivery rate callback that was called. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * @return string
     * @throws SdkError When delivery_rate_callback_id is omitted; use hasDeliveryRateCallbackId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** ID of the callback revision that was called. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * @return string
     * @throws SdkError When delivery_rate_callback_revision_id is omitted; use hasDeliveryRateCallbackRevisionId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackRevisionId(): string { return $this->get('delivery_rate_callback_revision_id'); }
    public function hasDeliveryRateCallbackRevisionId(): bool { return $this->has('delivery_rate_callback_revision_id'); }
    /** ID of the HMAC signing key that signed this request, as sent in the Flint-Signing-Key-Ids header. Empty for a JWT-only callback, which has no shared secret. Example: "cbkey_00112233445566778899aabb".
     * @return string
     * @throws SdkError When delivery_rate_callback_signing_key_id is omitted; use hasDeliveryRateCallbackSigningKeyId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackSigningKeyId(): string { return $this->get('delivery_rate_callback_signing_key_id'); }
    public function hasDeliveryRateCallbackSigningKeyId(): bool { return $this->has('delivery_rate_callback_signing_key_id'); }
    /** Why the callback connection check failed and the action that can make the next check succeed. - `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing methods. For a 401, check JWT verification with Flint's JWKS, issuer, delivery_rate_callback_id audience, expiration, and body_sha256 of the exact request bytes. For HMAC, check the shared secret and verify the raw body before parsing it. - `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network policy. - `connection_error`: Restore network connectivity to the callback host, then test again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. - `invalid_response`: Return a 2xx application/json response within maximum_response_bytes. For a test delivery, the body must also follow the callback response rules. Then test again. - `request_error`: Flint couldn't complete the request for another reason. Check the URL and your server logs, then test again. - `timeout`: Acknowledge the callback within its configured timeout, then test again. - `tls_error`: Fix the callback certificate and TLS configuration, then test again. Value enum: "authentication_or_http_error", "blocked_target", "connection_error", "dns_error", "invalid_response", "request_error", "timeout", "tls_error".
     * @return string
     * @throws SdkError When failure_category is omitted; use hasFailureCategory() or valueOrDefault().
     */
    public function getFailureCategory(): string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** HTTP status code the callback returned. Omitted when it returned none.
     * @return int
     * @throws SdkError When http_status_code is omitted; use hasHttpStatusCode() or valueOrDefault().
     */
    public function getHttpStatusCode(): int { return $this->get('http_status_code'); }
    public function hasHttpStatusCode(): bool { return $this->has('http_status_code'); }
    /** Time the callback took to answer, in milliseconds. Format: int64.
     * @return int
     * @throws SdkError When latency_milliseconds is omitted; use hasLatencyMilliseconds() or valueOrDefault().
     */
    public function getLatencyMilliseconds(): int { return $this->get('latency_milliseconds'); }
    public function hasLatencyMilliseconds(): bool { return $this->has('latency_milliseconds'); }
    /** Whether the callback answered the request successfully. Value enum: "succeeded", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
