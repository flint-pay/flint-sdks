<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $end_date
 * @property-read string $timezone
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionEndAfterDateRequestInput extends Model {
    /** @param array{'end_date': string, 'timezone'?: string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionEndAfterDateRequestInput')); }
    /** Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Format: date. minLength: 1. Example: "2026-08-02".
     * @return string
     * @throws SdkError When end_date is omitted; use hasEndDate() or valueOrDefault().
     */
    public function getEndDate(): string { return $this->get('end_date'); }
    public function hasEndDate(): bool { return $this->has('end_date'); }
    /** IANA timezone used for the end date. Resolved and saved when the condition is set. minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** How this automatic end is measured. Value enum: "date".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
