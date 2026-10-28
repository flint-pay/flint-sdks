<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read list<ErrorDetailInput|array<array-key, mixed>|\stdClass> $details
 * @property-read string $doc_url
 * @property-read string $error_source
 * @property-read string $message
 * @property-read string $param
 * @property-read array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object|null $remediation
 * @property-read string $request_id
 * @property-read string $request_log_url
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class ErrorObjectInput extends Model {
    /** @param array{'code': string, 'details'?: list<ErrorDetailInput|array<array-key, mixed>|\stdClass>, 'doc_url': string, 'error_source': string, 'message': string, 'param'?: string, 'remediation': array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object|null, 'request_id': string, 'request_log_url'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorObjectInput')); }
    /** Shape $ (Value): string. Stable Flint error code. Each operation lists its codes in x-flint-error-codes, and each error response lists the codes it can carry at that status. Value enum: "ACTION_NOT_ALLOWED", "ALREADY_EXISTS", "API_VERSION_RETIRED", "AUTHENTICATION_REQUIRED", "CONCURRENT_MODIFICATION", "DELIVERY_REQUOTE_REQUIRED", "EXTERNAL_SERVICE_ERROR", "FORBIDDEN", "GIFT_CARD_CHALLENGE_REQUIRED", "IDEMPOTENCY_KEY_IN_PROGRESS", "IDEMPOTENCY_KEY_REUSED", "IDEMPOTENCY_RECOVERY_REQUIRED", "IDENTITY_VERIFICATION_REQUIRED", "INSUFFICIENT_SCOPE", "INTERNAL_ERROR", "INVALID_CREDENTIAL", "INVALID_REQUEST", "INVALID_VALUE", "INVENTORY_INSUFFICIENT", "LIMIT_EXCEEDED", "LIMIT_REACHED", "MERCHANT_NOT_READY", "METHOD_NOT_ALLOWED", "NOT_ALLOWED", "OPERATION_IN_PROGRESS", "PAYMENT_ATTEMPT_ACTIVE", "PAYMENT_OPTION_UNAVAILABLE", "PAYMENT_PROCESSING_UNAVAILABLE", "PAYMENT_PROCESSOR_REJECTED", "PAYMENT_REVIEW_OPEN", "PROMOTION_DECLINED", "RATE_LIMIT_EXCEEDED", "REQUEST_BODY_TOO_LARGE", "REQUEST_CANCELED", "REQUEST_TIMEOUT", "REQUIRED", "RESOURCE_IN_USE", "RESOURCE_NOT_FOUND", "ROUTE_NOT_FOUND", "SERVICE_UNAVAILABLE", "UNKNOWN_FIELD", "UNSUPPORTED_CONTENT_TYPE", "VERSION_CONFLICT".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): Array of {@see ErrorDetailInput}. Individual failures belonging to this error. Present on every validation error and every error carrying facts. On non-validation errors the first item repeats the top-level code and param. Facts appear only in typed detail fields; param contains public request field paths. Shape $[] (Value): {@see ErrorDetailInput}. One specific failure within an error, with a `code` and `message` plus fields that depend on the code, such as the `param`, resource, quantity, or amount involved.
     * @return list<ErrorDetailInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When details is omitted; use hasDetails() or valueOrDefault().
     */
    public function getDetails(): array { return $this->get('details'); }
    public function hasDetails(): bool { return $this->has('details'); }
    /** Shape $ (Value): string. Error reference at https://developers.withflintpay.com/docs/errors# followed by the lowercase error code.
     * @return string
     * @throws SdkError When doc_url is omitted; use hasDocUrl() or valueOrDefault().
     */
    public function getDocUrl(): string { return $this->get('doc_url'); }
    public function hasDocUrl(): bool { return $this->has('doc_url'); }
    /** Shape $ (Value): string. System boundary responsible for correcting the failure. Value enum: "merchant", "integration", "flint".
     * @return string
     * @throws SdkError When error_source is omitted; use hasErrorSource() or valueOrDefault().
     */
    public function getErrorSource(): string { return $this->get('error_source'); }
    public function hasErrorSource(): bool { return $this->has('error_source'); }
    /** Shape $ (Value): string. Human-readable explanation for your logs. The wording can change, so branch on code, and do not show it to buyers as is.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Shape $ (Value): string. Public JSON request field path that caused the failure, such as line_items[0].name, when the failure concerns one field.
     * @return string
     * @throws SdkError When param is omitted; use hasParam() or valueOrDefault().
     */
    public function getParam(): string { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
    /** Shape $ (Value): {@see ErrorRemediationInput} or null. Recovery guidance: whether retrying can succeed and what to do next. Shape $.anyOf[1] (Value): {@see ErrorRemediationInput}. Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions. Shape $.anyOf[2] (Value): null.
     * @return array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object|null
     * @throws SdkError When remediation is omitted; use hasRemediation() or valueOrDefault().
     */
    public function getRemediation(): mixed { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
    /** Shape $ (Value): string. ID of this request, also sent in the X-Request-Id response header. Include it when you contact Flint support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** Shape $ (Value): string. Path of this request's log in the request-logs API, present when the credential can read it. Flint writes the log just after responding, so a read sent immediately can return 404 RESOURCE_NOT_FOUND; retry after a second.
     * @return string
     * @throws SdkError When request_log_url is omitted; use hasRequestLogUrl() or valueOrDefault().
     */
    public function getRequestLogUrl(): string { return $this->get('request_log_url'); }
    public function hasRequestLogUrl(): bool { return $this->has('request_log_url'); }
    /** Shape $ (Value): string. Coarse category determined by the HTTP status. 400: validation_error; 401: authentication_error; 403: authorization_error; 404: not_found_error; 405, 410, 413, 415, 499: protocol_error; 409: conflict_error; 429: rate_limit_error; 502: external_service_error; 503: unavailable_error; 504: timeout_error. All other error statuses: internal_error. Value enum: "authentication_error", "authorization_error", "validation_error", "not_found_error", "conflict_error", "rate_limit_error", "external_service_error", "timeout_error", "unavailable_error", "internal_error", "protocol_error".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
