<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'attempt_number': int, 'attempt_status': string, 'completed_at'?: string|\DateTimeInterface, 'delivery_status': string, 'delivery_trigger': string, 'duration_milliseconds'?: int, 'error_category'?: string, 'error_summary'?: string, 'reason_message'?: string, 'recommended_action'?: string, 'response_body_excerpt'?: string, 'response_content_type'?: string, 'response_headers'?: array<array-key, string>|\stdClass, 'retryable'?: bool, 'started_at'?: string|\DateTimeInterface, 'status_code'?: int, 'webhook_delivery_attempt_id': string, 'webhook_delivery_id': string, 'webhook_event_id': string, ...}|object|array{'delivery_method': string, 'webhook_event_id': string}|object $data
 * @property-read ResponseMetaInput|array<array-key, mixed>|\stdClass $meta
 * @property-read string $request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookTestEventResponseInput extends Model {
    /** @param array{'data': array{'attempt_number': int, 'attempt_status': string, 'completed_at'?: string|\DateTimeInterface, 'delivery_status': string, 'delivery_trigger': string, 'duration_milliseconds'?: int, 'error_category'?: string, 'error_summary'?: string, 'reason_message'?: string, 'recommended_action'?: string, 'response_body_excerpt'?: string, 'response_content_type'?: string, 'response_headers'?: array<array-key, string>|\stdClass, 'retryable'?: bool, 'started_at'?: string|\DateTimeInterface, 'status_code'?: int, 'webhook_delivery_attempt_id': string, 'webhook_delivery_id': string, 'webhook_event_id': string, ...}|object|array{'delivery_method': string, 'webhook_event_id': string}|object, 'meta'?: ResponseMetaInput|array<array-key, mixed>|\stdClass, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookTestEventResponseInput')); }
    /** Resource, collection, or operation result returned by this request. oneOf[1] (Value): {@see WebhookDeliveryActionInput}. The result of a webhook delivery action, such as a resend: the delivery, attempt, status, and any error details. oneOf[2] (Value): {@see WebhookStreamTestEventInput}. A synthetic event published to the webhook event stream for flint listen. Publication confirms the event was recorded, without confirming receipt by a running listener.
     * @return array{'attempt_number': int, 'attempt_status': string, 'completed_at'?: string|\DateTimeInterface, 'delivery_status': string, 'delivery_trigger': string, 'duration_milliseconds'?: int, 'error_category'?: string, 'error_summary'?: string, 'reason_message'?: string, 'recommended_action'?: string, 'response_body_excerpt'?: string, 'response_content_type'?: string, 'response_headers'?: array<array-key, string>|\stdClass, 'retryable'?: bool, 'started_at'?: string|\DateTimeInterface, 'status_code'?: int, 'webhook_delivery_attempt_id': string, 'webhook_delivery_id': string, 'webhook_event_id': string, ...}|object|array{'delivery_method': string, 'webhook_event_id': string}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): mixed { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ResponseMetaInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): mixed { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Identifier of this API request, used to correlate logs and support requests. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
