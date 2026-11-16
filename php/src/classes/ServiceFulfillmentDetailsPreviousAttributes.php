<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $completed_at
 * @property-read string|null $notes
 * @property-read string|null $scheduled_end_at
 * @property-read string|null $scheduled_start_at
 * @property-read string|null $timezone
 * Presence-aware response; omitted optional fields return null. */
final class ServiceFulfillmentDetailsPreviousAttributes extends Model {
    /** @param array{'completed_at'?: mixed, 'notes'?: mixed, 'scheduled_end_at'?: mixed, 'scheduled_start_at'?: mixed, 'timezone'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ServiceFulfillmentDetailsPreviousAttributes')); }
    /** When the service was completed, in RFC3339 format. anyOf[1] (Value): string. When the service was completed, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletedAt(): string|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Additional instructions or notes for performing the service. anyOf[1] (Value): string. Additional instructions or notes for performing the service. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNotes(): string|null { return $this->get('notes'); }
    public function hasNotes(): bool { return $this->has('notes'); }
    /** Scheduled end of the service, in RFC3339 format. anyOf[1] (Value): string. Scheduled end of the service, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getScheduledEndAt(): string|null { return $this->get('scheduled_end_at'); }
    public function hasScheduledEndAt(): bool { return $this->has('scheduled_end_at'); }
    /** Scheduled start of the service, in RFC3339 format. anyOf[1] (Value): string. Scheduled start of the service, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getScheduledStartAt(): string|null { return $this->get('scheduled_start_at'); }
    public function hasScheduledStartAt(): bool { return $this->has('scheduled_start_at'); }
    /** Timezone used to display the service appointment. Uses an IANA time zone name. anyOf[1] (Value): string. Timezone used to display the service appointment. Uses an IANA time zone name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
