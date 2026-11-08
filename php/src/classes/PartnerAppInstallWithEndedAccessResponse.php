<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PartnerAppInstallWithEndedAccess $data
 * @property-read ?ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppInstallWithEndedAccessResponse extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallWithEndedAccessResponse')); }
    /** The connected app install and the linked API key and webhook endpoint IDs ended by this revoke request. The connected app install and the API keys and webhook endpoints ended by this request. A merchant's authorization of a partner application.
     * @return PartnerAppInstallWithEndedAccess
     */
    public function getData(): PartnerAppInstallWithEndedAccess { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Response metadata, including the API version, trace ID, warnings, and whether this result was replayed, when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Identifier of this API request, useful when contacting Flint support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
