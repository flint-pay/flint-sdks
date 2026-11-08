<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason
 * @property-read string $requested_cursor
 * @property-read string $resume_cursor
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookStreamGapInput extends Model {
    /** @param array{'reason': string, 'requested_cursor'?: string, 'resume_cursor'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookStreamGapInput')); }
    /** Why events could not be replayed from the requested position. Value enum: "cursor_unavailable", "payload_expired".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Event ID from which replay was requested. Omitted when the requested position has no event ID.
     * @return string
     * @throws SdkError When requested_cursor is omitted; use hasRequestedCursor() or valueOrDefault().
     */
    public function getRequestedCursor(): string { return $this->get('requested_cursor'); }
    public function hasRequestedCursor(): bool { return $this->has('requested_cursor'); }
    /** Event ID after which streaming continues following this gap. Omitted when the resume position has no event ID.
     * @return string
     * @throws SdkError When resume_cursor is omitted; use hasResumeCursor() or valueOrDefault().
     */
    public function getResumeCursor(): string { return $this->get('resume_cursor'); }
    public function hasResumeCursor(): bool { return $this->has('resume_cursor'); }
}
