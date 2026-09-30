<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ResourceTimeline $data
 * @property-read ResponseMeta $meta
 * @property-read string $next_page_token
 * @property-read string $request_id
 * Presence-aware response; omitted fields throw when accessed. */
final class DeveloperGetResourceTimelineResponse200 extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperGetResourceTimelineResponse200')); }
    /** @return ResourceTimeline
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): ResourceTimeline { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** @return ResponseMeta
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** @return string
     * @throws SdkError When next_page_token is omitted; use hasNextPageToken() or valueOrDefault().
     */
    public function getNextPageToken(): string { return $this->get('next_page_token'); }
    public function hasNextPageToken(): bool { return $this->has('next_page_token'); }
    /** @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
