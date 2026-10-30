<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read string $notes
 * @property-read string|\DateTimeInterface $scheduled_end_at
 * @property-read string|\DateTimeInterface $scheduled_start_at
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class ServiceFulfillmentDetailsInput extends Model {
    /** @param array{'completed_at'?: string|\DateTimeInterface, 'notes'?: string, 'scheduled_end_at'?: string|\DateTimeInterface, 'scheduled_start_at'?: string|\DateTimeInterface, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ServiceFulfillmentDetailsInput')); }
    /** When the service was completed, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Additional instructions or notes for performing the service.
     * @return string
     * @throws SdkError When notes is omitted; use hasNotes() or valueOrDefault().
     */
    public function getNotes(): string { return $this->get('notes'); }
    public function hasNotes(): bool { return $this->has('notes'); }
    /** Scheduled end of the service, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When scheduled_end_at is omitted; use hasScheduledEndAt() or valueOrDefault().
     */
    public function getScheduledEndAt(): string|\DateTimeInterface { return $this->get('scheduled_end_at'); }
    public function hasScheduledEndAt(): bool { return $this->has('scheduled_end_at'); }
    /** Scheduled start of the service, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When scheduled_start_at is omitted; use hasScheduledStartAt() or valueOrDefault().
     */
    public function getScheduledStartAt(): string|\DateTimeInterface { return $this->get('scheduled_start_at'); }
    public function hasScheduledStartAt(): bool { return $this->has('scheduled_start_at'); }
    /** Timezone used to display the service appointment.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
