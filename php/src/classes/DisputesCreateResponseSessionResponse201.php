<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DisputeResponseSession $data
 * @property-read ?ResponseMeta $meta
 * @property-read ?string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class DisputesCreateResponseSessionResponse201 extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputesCreateResponseSessionResponse201')); }
    /** Shape $ (Value): {@see DisputeResponseSession}. A session for responding to a dispute in the browser, with the `dispute_id` and a short-lived `client_session` for the embedded response component.
     * @return DisputeResponseSession
     */
    public function getData(): DisputeResponseSession { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): {@see ResponseMeta}. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getRequestId(): ?string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
