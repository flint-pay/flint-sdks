<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $notes
 * @property-read string|\DateTimeInterface $scheduled_end_at
 * @property-read string|\DateTimeInterface $scheduled_start_at
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateServiceFulfillmentDetailsInput extends Model {
    /** @param array{'notes'?: string, 'scheduled_end_at'?: string|\DateTimeInterface, 'scheduled_start_at'?: string|\DateTimeInterface, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateServiceFulfillmentDetailsInput')); }
    /** @return string
     * @throws SdkError When notes is omitted; use hasNotes() or valueOrDefault().
     */
    public function getNotes(): string { return $this->get('notes'); }
    public function hasNotes(): bool { return $this->has('notes'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When scheduled_end_at is omitted; use hasScheduledEndAt() or valueOrDefault().
     */
    public function getScheduledEndAt(): string|\DateTimeInterface { return $this->get('scheduled_end_at'); }
    public function hasScheduledEndAt(): bool { return $this->has('scheduled_end_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When scheduled_start_at is omitted; use hasScheduledStartAt() or valueOrDefault().
     */
    public function getScheduledStartAt(): string|\DateTimeInterface { return $this->get('scheduled_start_at'); }
    public function hasScheduledStartAt(): bool { return $this->has('scheduled_start_at'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
