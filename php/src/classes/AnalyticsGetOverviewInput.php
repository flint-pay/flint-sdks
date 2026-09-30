<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $range
 * @property-read string $timezone
 * @property-read bool $include_previous_period
 * @property-read string $currency
 * Presence-aware input; omitted fields throw when accessed. */
final class AnalyticsGetOverviewInput extends Model {
    /** @param array{'range': string, 'timezone'?: string, 'include_previous_period'?: bool, 'currency'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AnalyticsGetOverviewInput')); }
    /** @return string
     * @throws SdkError When range is omitted; use hasRange() or valueOrDefault().
     */
    public function getRange(): string { return $this->get('range'); }
    public function hasRange(): bool { return $this->has('range'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** @return bool
     * @throws SdkError When include_previous_period is omitted; use hasIncludePreviousPeriod() or valueOrDefault().
     */
    public function getIncludePreviousPeriod(): bool { return $this->get('include_previous_period'); }
    public function hasIncludePreviousPeriod(): bool { return $this->has('include_previous_period'); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
