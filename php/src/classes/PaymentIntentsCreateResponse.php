<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentIntentsCreateResponseData $data
 * @property-read ?ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class PaymentIntentsCreateResponse extends Model {
    /** @param array{'data': \stdClass, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsCreateResponse')); }
    /** Resource, collection, or operation result returned by this request. One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money (on a payment intent canceled with cancellation_reason payment_returned, the authorization Flint released) and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money equals the sum of those three whenever the capture is at most the authorization. An overcapture (see request_overcapture) has capturable_money and released_money zero and captured_money above authorized_money. Reconcile revenue from captured_money.
     * @return PaymentIntentsCreateResponseData
     */
    public function getData(): PaymentIntentsCreateResponseData { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Identifier of this API request, used to correlate logs and support requests. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
