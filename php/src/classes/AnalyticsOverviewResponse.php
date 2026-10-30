<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AnalyticsOverview $data
 * @property-read ?ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class AnalyticsOverviewResponse extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AnalyticsOverviewResponse')); }
    /** Payments are selected by payment created_at and current succeeded status. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.
     * @return AnalyticsOverview
     */
    public function getData(): AnalyticsOverview { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
