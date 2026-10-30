<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<Bundle> $data
 * @property-read ?ResponseMeta $meta
 * @property-read ?string $next_page_token
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class BundleListResponse extends Model {
    /** @param array{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleListResponse')); }
    /** The requested bundle data. [] (Value): {@see Bundle}. Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category.
     * @return list<Bundle>
     */
    public function getData(): array { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Token for the next page. Omitted when there are no more results.
     * @return ?string
     */
    public function getNextPageToken(): ?string { return $this->get('next_page_token'); }
    public function hasNextPageToken(): bool { return $this->has('next_page_token'); }
    /** Identifier of this API request, useful when contacting support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
