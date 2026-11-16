<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $end_date
 * @property-read string|null $timezone
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionEndAfterDatePreviousAttributesInput extends Model {
    /** @param array{'end_date'?: string|null, 'timezone'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionEndAfterDatePreviousAttributesInput')); }
    /** Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. anyOf[1] (Value): string. Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When end_date is omitted; use hasEndDate() or valueOrDefault().
     */
    public function getEndDate(): mixed { return $this->get('end_date'); }
    public function hasEndDate(): bool { return $this->has('end_date'); }
    /** IANA timezone saved with the end date. anyOf[1] (Value): string. IANA timezone saved with the end date. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** How this automatic end is measured. Value enum: "date". anyOf[1] (Value): string. How this automatic end is measured. Value enum: "date". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
