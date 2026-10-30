<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PromotionCodeInput|array<array-key, mixed>|\stdClass> $data
 * @property-read ResponseMetaInput|array<array-key, mixed>|\stdClass $meta
 * @property-read string $next_page_token
 * @property-read string $request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionCodeListResponseInput extends Model {
    /** @param array{'data': list<PromotionCodeInput|array<array-key, mixed>|\stdClass>, 'meta'?: ResponseMetaInput|array<array-key, mixed>|\stdClass, 'next_page_token'?: string, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodeListResponseInput')); }
    /** Promotion codes returned in the requested sort order. [] (Value): {@see PromotionCodeInput}. A code a buyer enters to claim a promotion.
     * @return list<PromotionCodeInput|array<array-key, mixed>|\stdClass>
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
    /** Token for the next page. Omitted when there are no more results.
     * @return string
     * @throws SdkError When next_page_token is omitted; use hasNextPageToken() or valueOrDefault().
     */
    public function getNextPageToken(): string { return $this->get('next_page_token'); }
    public function hasNextPageToken(): bool { return $this->has('next_page_token'); }
    /** Identifier of this API request, useful when contacting support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
