<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $completed_at
 * @property-read ?string $notes
 * @property-read ?string $scheduled_end_at
 * @property-read ?string $scheduled_start_at
 * @property-read ?string $timezone
 * Presence-aware response; omitted optional fields return null. */
final class ServiceFulfillmentDetails extends Model {
    /** @param array{'completed_at'?: string, 'notes'?: string, 'scheduled_end_at'?: string, 'scheduled_start_at'?: string, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ServiceFulfillmentDetails')); }
    /** When the service was completed, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getCompletedAt(): ?string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Additional instructions or notes for performing the service.
     * @return ?string
     */
    public function getNotes(): ?string { return $this->get('notes'); }
    public function hasNotes(): bool { return $this->has('notes'); }
    /** Scheduled end of the service, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getScheduledEndAt(): ?string { return $this->get('scheduled_end_at'); }
    public function hasScheduledEndAt(): bool { return $this->has('scheduled_end_at'); }
    /** Scheduled start of the service, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getScheduledStartAt(): ?string { return $this->get('scheduled_start_at'); }
    public function hasScheduledStartAt(): bool { return $this->has('scheduled_start_at'); }
    /** Timezone used to display the service appointment.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
