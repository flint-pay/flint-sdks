<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $checked_at
 * @property-read string $failure_category
 * @property-read int $http_status_code
 * @property-read string $key_id
 * @property-read int $latency_milliseconds
 * @property-read string $status
 * @property-read string $tax_calculation_callback_id
 * @property-read string $tax_calculation_callback_revision_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCalculationCallbackConnectionCheckInput extends Model {
    /** @param array{'checked_at': string|\DateTimeInterface, 'failure_category'?: string, 'http_status_code'?: int, 'key_id': string, 'latency_milliseconds': int, 'status': string, 'tax_calculation_callback_id': string, 'tax_calculation_callback_revision_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackConnectionCheckInput')); }
    /** When Flint sent the connection check. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When checked_at is omitted; use hasCheckedAt() or valueOrDefault().
     */
    public function getCheckedAt(): string|\DateTimeInterface { return $this->get('checked_at'); }
    public function hasCheckedAt(): bool { return $this->has('checked_at'); }
    /** Why the callback request failed and the action that can make the next one succeed. - `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing methods. For a 401, check JWT verification with Flint's JWKS, issuer, tax_calculation_callback_id audience, expiration, and body_sha256 of the exact request bytes. For HMAC, check the shared secret and verify the raw body before parsing it. - `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network policy. - `connection_error`: Restore network connectivity to the callback host, then test again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. - `invalid_response`: Return a 2xx application/json response within maximum_response_bytes. For a test delivery, the body must also echo tax_calculation_evaluation_id with empty line_item_calculations and charge_calculations. Then test again. - `request_error`: Flint couldn't complete the request for another reason. Check the URL and your server logs, then test again. - `timeout`: Acknowledge the callback within its configured timeout, then test again. - `tls_error`: Fix the callback certificate and TLS configuration, then test again. Value enum: "authentication_or_http_error", "blocked_target", "connection_error", "dns_error", "invalid_response", "request_error", "timeout", "tls_error".
     * @return string
     * @throws SdkError When failure_category is omitted; use hasFailureCategory() or valueOrDefault().
     */
    public function getFailureCategory(): string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** HTTP status code your endpoint returned. Omitted when it returned no response.
     * @return int
     * @throws SdkError When http_status_code is omitted; use hasHttpStatusCode() or valueOrDefault().
     */
    public function getHttpStatusCode(): int { return $this->get('http_status_code'); }
    public function hasHttpStatusCode(): bool { return $this->has('http_status_code'); }
    /** ID of the HMAC signing key that signed this request, as sent in the Flint-Signing-Key-Ids header. Empty for a JWT-only callback, which has no shared secret. Example: "cbkey_00112233445566778899aabb".
     * @return string
     * @throws SdkError When key_id is omitted; use hasKeyId() or valueOrDefault().
     */
    public function getKeyId(): string { return $this->get('key_id'); }
    public function hasKeyId(): bool { return $this->has('key_id'); }
    /** How long your endpoint took to answer, in milliseconds. Format: int64.
     * @return int
     * @throws SdkError When latency_milliseconds is omitted; use hasLatencyMilliseconds() or valueOrDefault().
     */
    public function getLatencyMilliseconds(): int { return $this->get('latency_milliseconds'); }
    public function hasLatencyMilliseconds(): bool { return $this->has('latency_milliseconds'); }
    /** Whether your endpoint answered as the callback requires. - `succeeded`: Your endpoint answered as the request requires. - `failed`: The request failed. See `failure_category`. Value enum: "succeeded", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** ID of the callback that was called, beginning with `tcb_`. Example: "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     * @return string
     * @throws SdkError When tax_calculation_callback_id is omitted; use hasTaxCalculationCallbackId() or valueOrDefault().
     */
    public function getTaxCalculationCallbackId(): string { return $this->get('tax_calculation_callback_id'); }
    public function hasTaxCalculationCallbackId(): bool { return $this->has('tax_calculation_callback_id'); }
    /** ID of the callback revision that was called, beginning with `tcbr_`. Example: "tcbr_01KEZF7C00V2GHWCXVV2NCWX29".
     * @return string
     * @throws SdkError When tax_calculation_callback_revision_id is omitted; use hasTaxCalculationCallbackRevisionId() or valueOrDefault().
     */
    public function getTaxCalculationCallbackRevisionId(): string { return $this->get('tax_calculation_callback_revision_id'); }
    public function hasTaxCalculationCallbackRevisionId(): bool { return $this->has('tax_calculation_callback_revision_id'); }
}
