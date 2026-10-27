<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read MoneyMovementHistoryMetaInput|array<array-key, mixed>|\stdClass $history
 * @property-read bool $idempotency_replayed
 * @property-read string $request_id
 * @property-read string $trace_id
 * @property-read list<ResponseWarningInput|array<array-key, mixed>|\stdClass> $warnings
 * Presence-aware input; omitted fields throw when accessed. */
final class MoneyMovementListMetaInput extends Model {
    /** @param array{'api_version'?: string, 'history'?: MoneyMovementHistoryMetaInput|array<array-key, mixed>|\stdClass, 'idempotency_replayed'?: bool, 'request_id'?: string, 'trace_id'?: string, 'warnings'?: list<ResponseWarningInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyMovementListMetaInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): {@see MoneyMovementHistoryMetaInput}. How complete the history in a money movement list is, with the earliest available and latest reconciled times.
     * @return MoneyMovementHistoryMetaInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When history is omitted; use hasHistory() or valueOrDefault().
     */
    public function getHistory(): mixed { return $this->get('history'); }
    public function hasHistory(): bool { return $this->has('history'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When idempotency_replayed is omitted; use hasIdempotencyReplayed() or valueOrDefault().
     */
    public function getIdempotencyReplayed(): bool { return $this->get('idempotency_replayed'); }
    public function hasIdempotencyReplayed(): bool { return $this->has('idempotency_replayed'); }
    /** Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When trace_id is omitted; use hasTraceId() or valueOrDefault().
     */
    public function getTraceId(): string { return $this->get('trace_id'); }
    public function hasTraceId(): bool { return $this->has('trace_id'); }
    /** Shape $ (Value): Array of {@see ResponseWarningInput}. Shape $[] (Value): {@see ResponseWarningInput}. A non-blocking condition reported with a response. The `code` identifies the condition and `severity` says how urgent it is.
     * @return list<ResponseWarningInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When warnings is omitted; use hasWarnings() or valueOrDefault().
     */
    public function getWarnings(): array { return $this->get('warnings'); }
    public function hasWarnings(): bool { return $this->has('warnings'); }
}
