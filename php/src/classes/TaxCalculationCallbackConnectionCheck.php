<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checked_at
 * @property-read ?string $failure_category
 * @property-read ?int $http_status_code
 * @property-read string $key_id
 * @property-read int $latency_milliseconds
 * @property-read string $status
 * @property-read string $tax_calculation_callback_id
 * @property-read string $tax_calculation_callback_revision_id
 * Presence-aware response; omitted optional fields return null. */
final class TaxCalculationCallbackConnectionCheck extends Model {
    /** @param array{'checked_at': string, 'failure_category'?: string, 'http_status_code'?: int, 'key_id': string, 'latency_milliseconds': int, 'status': string, 'tax_calculation_callback_id': string, 'tax_calculation_callback_revision_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackConnectionCheck')); }
    /** When Flint sent the connection check. Format: date-time.
     * @return string
     */
    public function getCheckedAt(): string { return $this->get('checked_at'); }
    public function hasCheckedAt(): bool { return $this->has('checked_at'); }
    /** Why the callback request failed and the action that can make the next one succeed. - `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing methods. For a 401, check JWT verification with Flint's JWKS, issuer, tax_calculation_callback_id audience, expiration, and body_sha256 of the exact request bytes. For HMAC, check the shared secret and verify the raw body before parsing it. - `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network policy. - `connection_error`: Restore network connectivity to the callback host, then test again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. - `invalid_response`: Return a 2xx application/json response within maximum_response_bytes. For a test delivery, the body must also echo tax_calculation_evaluation_id with empty line_item_calculations and charge_calculations. Then test again. - `request_error`: Flint couldn't complete the request for another reason. Check the URL and your server logs, then test again. - `timeout`: Acknowledge the callback within its configured timeout, then test again. - `tls_error`: Fix the callback certificate and TLS configuration, then test again. Value enum: "authentication_or_http_error", "blocked_target", "connection_error", "dns_error", "invalid_response", "request_error", "timeout", "tls_error".
     * @return ?string
     */
    public function getFailureCategory(): ?string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** HTTP status code your endpoint returned. Omitted when it returned no response.
     * @return ?int
     */
    public function getHttpStatusCode(): ?int { return $this->get('http_status_code'); }
    public function hasHttpStatusCode(): bool { return $this->has('http_status_code'); }
    /** ID of the HMAC signing key that signed this request. Empty for a JWT-only callback, which has no shared secret.
     * @return string
     */
    public function getKeyId(): string { return $this->get('key_id'); }
    public function hasKeyId(): bool { return $this->has('key_id'); }
    /** How long your endpoint took to answer, in milliseconds. Format: int64.
     * @return int
     */
    public function getLatencyMilliseconds(): int { return $this->get('latency_milliseconds'); }
    public function hasLatencyMilliseconds(): bool { return $this->has('latency_milliseconds'); }
    /** Whether your endpoint answered as the callback requires. - `succeeded`: Your endpoint answered as the request requires. - `failed`: The request failed. See `failure_category`. Value enum: "succeeded", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** ID of the callback that was called, beginning with `tcb_`.
     * @return string
     */
    public function getTaxCalculationCallbackId(): string { return $this->get('tax_calculation_callback_id'); }
    public function hasTaxCalculationCallbackId(): bool { return $this->has('tax_calculation_callback_id'); }
    /** ID of the callback revision that was called, beginning with `tcbr_`.
     * @return string
     */
    public function getTaxCalculationCallbackRevisionId(): string { return $this->get('tax_calculation_callback_revision_id'); }
    public function hasTaxCalculationCallbackRevisionId(): bool { return $this->has('tax_calculation_callback_revision_id'); }
}
