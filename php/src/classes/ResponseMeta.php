<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $api_version
 * @property-read ?bool $idempotency_replayed
 * @property-read ?string $trace_id
 * @property-read ?list<ResponseWarning> $warnings
 * Presence-aware response; omitted optional fields return null. */
final class ResponseMeta extends Model {
    /** @param array{'api_version'?: string, 'idempotency_replayed'?: bool, 'trace_id'?: string, 'warnings'?: list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResponseMeta')); }
    /** API version used to produce this response.
     * @return ?string
     */
    public function getApiVersion(): ?string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Whether this response replays a stored result for the supplied Idempotency-Key.
     * @return ?bool
     */
    public function getIdempotencyReplayed(): ?bool { return $this->get('idempotency_replayed'); }
    public function hasIdempotencyReplayed(): bool { return $this->has('idempotency_replayed'); }
    /** Trace identifier to include when contacting Flint about this request.
     * @return ?string
     */
    public function getTraceId(): ?string { return $this->get('trace_id'); }
    public function hasTraceId(): bool { return $this->has('trace_id'); }
    /** Conditions that need attention even though the request succeeded. [] (Value): {@see ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies the condition and `severity` says how urgent it is.
     * @return ?list<ResponseWarning>
     */
    public function getWarnings(): ?array { return $this->get('warnings'); }
    public function hasWarnings(): bool { return $this->has('warnings'); }
}
