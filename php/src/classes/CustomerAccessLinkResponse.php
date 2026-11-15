<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerAccessLinkResponseDataLink|CustomerAccessLinkResponseDataEmail|\stdClass $data
 * @property-read ?ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class CustomerAccessLinkResponse extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccessLinkResponse')); }
    /** Resource, collection, or operation result returned by this request. The result of creating a customer account link. With link delivery it carries the single-use sign-in link. With email delivery Flint has queued that link in an email to the customer, and the response carries only a masked recipient address.
     * @return CustomerAccessLinkResponseDataLink|CustomerAccessLinkResponseDataEmail|\stdClass
     */
    public function getData(): CustomerAccessLinkResponseDataLink|CustomerAccessLinkResponseDataEmail|\stdClass { return $this->get('data'); }
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
