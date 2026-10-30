<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason
 * @property-read string $resume_cursor
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookStreamDisconnectInput extends Model {
    /** @param array{'reason': string, 'resume_cursor'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookStreamDisconnectInput')); }
    /** Value enum: "ttl", "authorization_changed", "server_error", "backpressure".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Last event sent before a backpressure disconnect. Reconnect using this value as Last-Event-ID or after.
     * @return string
     * @throws SdkError When resume_cursor is omitted; use hasResumeCursor() or valueOrDefault().
     */
    public function getResumeCursor(): string { return $this->get('resume_cursor'); }
    public function hasResumeCursor(): bool { return $this->has('resume_cursor'); }
}
