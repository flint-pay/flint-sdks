<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ResourceTimelineInput|array<array-key, mixed>|\stdClass $data
 * @property-read ResponseMetaInput|array<array-key, mixed>|\stdClass $meta
 * @property-read string $next_page_token
 * @property-read string $request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ResourceTimelineResponseInput extends Model {
    /** @param array{'data': ResourceTimelineInput|array<array-key, mixed>|\stdClass, 'meta'?: ResponseMetaInput|array<array-key, mixed>|\stdClass, 'next_page_token'?: string, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineResponseInput')); }
    /** Resource, collection, or operation result returned by this request. The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes. Request entries include the resource itself and one level of directly owned resources, resolved when the timeline is read: orders include their payment intents, public refunds, fulfillments, returns, invoices, and disputes; payment intents include their public refunds and disputes. Included requests require the caller's read access to each owned resource type. Types the caller cannot read are excluded before pagination. Ownership follows the child resource's order_id or payment_intent_id. Other resource types include only directly attributed requests. Internal payment-refund children are excluded. attributed_resource always names the resource the request log is attributed to. Webhook and image entries remain scoped to the timeline resource. Page sizes and ordering are unchanged.
     * @return ResourceTimelineInput|array<array-key, mixed>|\stdClass
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
