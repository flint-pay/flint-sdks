<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $completed_at
 * @property-read string|null $notes
 * @property-read string|\DateTimeInterface|null $scheduled_end_at
 * @property-read string|\DateTimeInterface|null $scheduled_start_at
 * @property-read string|null $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class ServiceFulfillmentDetailsPreviousAttributesInput extends Model {
    /** @param array{'completed_at'?: string|\DateTimeInterface|null, 'notes'?: string|null, 'scheduled_end_at'?: string|\DateTimeInterface|null, 'scheduled_start_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ServiceFulfillmentDetailsPreviousAttributesInput')); }
    /** When the service was completed, in RFC3339 format. anyOf[1] (Value): string. When the service was completed, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): mixed { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Additional instructions or notes for performing the service. anyOf[1] (Value): string. Additional instructions or notes for performing the service. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When notes is omitted; use hasNotes() or valueOrDefault().
     */
    public function getNotes(): mixed { return $this->get('notes'); }
    public function hasNotes(): bool { return $this->has('notes'); }
    /** Scheduled end of the service, in RFC3339 format. anyOf[1] (Value): string. Scheduled end of the service, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_end_at is omitted; use hasScheduledEndAt() or valueOrDefault().
     */
    public function getScheduledEndAt(): mixed { return $this->get('scheduled_end_at'); }
    public function hasScheduledEndAt(): bool { return $this->has('scheduled_end_at'); }
    /** Scheduled start of the service, in RFC3339 format. anyOf[1] (Value): string. Scheduled start of the service, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_start_at is omitted; use hasScheduledStartAt() or valueOrDefault().
     */
    public function getScheduledStartAt(): mixed { return $this->get('scheduled_start_at'); }
    public function hasScheduledStartAt(): bool { return $this->has('scheduled_start_at'); }
    /** Timezone used to display the service appointment. Uses an IANA time zone name. anyOf[1] (Value): string. Timezone used to display the service appointment. Uses an IANA time zone name. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
