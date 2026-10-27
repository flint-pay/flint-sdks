<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ModifierSet> $data
 * @property-read ?ResponseMeta $meta
 * @property-read ?string $next_page_token
 * @property-read ?string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetsListResponse200 extends Model {
    /** @param array{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetsListResponse200')); }
    /** Shape $ (Value): Array of {@see ModifierSet}. Modifier sets matching the request filters for this page. Shape $[] (Value): {@see ModifierSet}. A reusable collection of customization groups.
     * @return list<ModifierSet>
     */
    public function getData(): array { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): {@see ResponseMeta}. Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Shape $ (Value): string. Pass this token as page_token to read the next page with the same filters. Absent when there are no more results.
     * @return ?string
     */
    public function getNextPageToken(): ?string { return $this->get('next_page_token'); }
    public function hasNextPageToken(): bool { return $this->has('next_page_token'); }
    /** Shape $ (Value): string. Identifier of this API request, useful when contacting Flint support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getRequestId(): ?string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
