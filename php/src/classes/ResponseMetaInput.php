<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read bool $idempotency_replayed
 * @property-read string $trace_id
 * @property-read list<ResponseWarningInput|array<array-key, mixed>|\stdClass> $warnings
 * Presence-aware input; omitted fields throw when accessed. */
final class ResponseMetaInput extends Model {
    /** @param array{'api_version'?: string, 'idempotency_replayed'?: bool, 'trace_id'?: string, 'warnings'?: list<ResponseWarningInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResponseMetaInput')); }
    /** API version used to produce this response.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Whether this response replays a stored result for the supplied Idempotency-Key.
     * @return bool
     * @throws SdkError When idempotency_replayed is omitted; use hasIdempotencyReplayed() or valueOrDefault().
     */
    public function getIdempotencyReplayed(): bool { return $this->get('idempotency_replayed'); }
    public function hasIdempotencyReplayed(): bool { return $this->has('idempotency_replayed'); }
    /** Trace identifier to include when contacting Flint about this request.
     * @return string
     * @throws SdkError When trace_id is omitted; use hasTraceId() or valueOrDefault().
     */
    public function getTraceId(): string { return $this->get('trace_id'); }
    public function hasTraceId(): bool { return $this->has('trace_id'); }
    /** Conditions that need attention even though the request succeeded. [] (Value): {@see ResponseWarningInput}. A non-blocking condition reported with a response. The `code` identifies the condition and `severity` says how urgent it is.
     * @return list<ResponseWarningInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When warnings is omitted; use hasWarnings() or valueOrDefault().
     */
    public function getWarnings(): array { return $this->get('warnings'); }
    public function hasWarnings(): bool { return $this->has('warnings'); }
}
