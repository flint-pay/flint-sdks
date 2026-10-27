<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $api_version
 * @property-read ?MoneyMovementHistoryMeta $history
 * @property-read ?bool $idempotency_replayed
 * @property-read ?string $request_id
 * @property-read ?string $trace_id
 * @property-read ?list<ResponseWarning> $warnings
 * Presence-aware response; omitted optional fields return null. */
final class MoneyMovementListMeta extends Model {
    /** @param array{'api_version'?: string, 'history'?: mixed, 'idempotency_replayed'?: bool, 'request_id'?: string, 'trace_id'?: string, 'warnings'?: list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyMovementListMeta')); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getApiVersion(): ?string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): {@see MoneyMovementHistoryMeta}. How complete the history in a money movement list is, with the earliest available and latest reconciled times.
     * @return ?MoneyMovementHistoryMeta
     */
    public function getHistory(): ?MoneyMovementHistoryMeta { return $this->get('history'); }
    public function hasHistory(): bool { return $this->has('history'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getIdempotencyReplayed(): ?bool { return $this->get('idempotency_replayed'); }
    public function hasIdempotencyReplayed(): bool { return $this->has('idempotency_replayed'); }
    /** Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getRequestId(): ?string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getTraceId(): ?string { return $this->get('trace_id'); }
    public function hasTraceId(): bool { return $this->has('trace_id'); }
    /** Shape $ (Value): Array of {@see ResponseWarning}. Shape $[] (Value): {@see ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies the condition and `severity` says how urgent it is.
     * @return ?list<ResponseWarning>
     */
    public function getWarnings(): ?array { return $this->get('warnings'); }
    public function hasWarnings(): bool { return $this->has('warnings'); }
}
