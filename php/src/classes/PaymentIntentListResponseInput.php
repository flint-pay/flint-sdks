<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PaymentIntentInput|array<array-key, mixed>|\stdClass> $data
 * @property-read ResponseMetaInput|array<array-key, mixed>|\stdClass $meta
 * @property-read string $next_page_token
 * @property-read string $request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentListResponseInput extends Model {
    /** @param array{'data': list<PaymentIntentInput|array<array-key, mixed>|\stdClass>, 'meta'?: ResponseMetaInput|array<array-key, mixed>|\stdClass, 'next_page_token'?: string, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentListResponseInput')); }
    /** Resource, collection, or operation result returned by this request. [] (Value): {@see PaymentIntentInput}. One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money (on a payment intent canceled with cancellation_reason payment_returned, the authorization Flint released) and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money equals the sum of those three whenever the capture is at most the authorization. An overcapture (see request_overcapture) has capturable_money and released_money zero and captured_money above authorized_money. Reconcile revenue from captured_money.
     * @return list<PaymentIntentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ResponseMetaInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): mixed { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page.
     * @return string
     * @throws SdkError When next_page_token is omitted; use hasNextPageToken() or valueOrDefault().
     */
    public function getNextPageToken(): string { return $this->get('next_page_token'); }
    public function hasNextPageToken(): bool { return $this->has('next_page_token'); }
    /** Identifier of this API request, used to correlate logs and support requests. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
