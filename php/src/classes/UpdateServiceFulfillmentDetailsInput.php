<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $completed_at
 * @property-read string|null $notes
 * @property-read string|\DateTimeInterface|null $scheduled_end_at
 * @property-read string|\DateTimeInterface|null $scheduled_start_at
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateServiceFulfillmentDetailsInput extends Model {
    /** @param array{'completed_at'?: string|\DateTimeInterface|null, 'notes'?: string|null, 'scheduled_end_at'?: string|\DateTimeInterface|null, 'scheduled_start_at'?: string|\DateTimeInterface|null, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateServiceFulfillmentDetailsInput')); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** @return string|null
     * @throws SdkError When notes is omitted; use hasNotes() or valueOrDefault().
     */
    public function getNotes(): string|null { return $this->get('notes'); }
    public function hasNotes(): bool { return $this->has('notes'); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_end_at is omitted; use hasScheduledEndAt() or valueOrDefault().
     */
    public function getScheduledEndAt(): string|\DateTimeInterface|null { return $this->get('scheduled_end_at'); }
    public function hasScheduledEndAt(): bool { return $this->has('scheduled_end_at'); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_start_at is omitted; use hasScheduledStartAt() or valueOrDefault().
     */
    public function getScheduledStartAt(): string|\DateTimeInterface|null { return $this->get('scheduled_start_at'); }
    public function hasScheduledStartAt(): bool { return $this->has('scheduled_start_at'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
