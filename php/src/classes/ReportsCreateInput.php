<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'as_of_date'?: string, 'currency': string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_type': string, 'timezone'?: string}|object|array{'as_of_date': string, 'currency': string, 'interval_end_at'?: string|\DateTimeInterface, 'interval_start_at'?: string|\DateTimeInterface, 'report_type': string, 'timezone'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReportsCreateInput extends Model {
    /** @param array{'body': array{'as_of_date'?: string, 'currency': string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_type': string, 'timezone'?: string}|object|array{'as_of_date': string, 'currency': string, 'interval_end_at'?: string|\DateTimeInterface, 'interval_start_at'?: string|\DateTimeInterface, 'report_type': string, 'timezone'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReportsCreateInput')); }
    /** The request body for: Create a report. Example: {"currency":"USD","interval_end_at":"2026-07-01T00:00:00Z","interval_start_at":"2026-06-01T00:00:00Z","report_type":"payments_itemized_v1","timezone":"UTC"}.
     * @return array{'as_of_date'?: string, 'currency': string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_type': string, 'timezone'?: string}|object|array{'as_of_date': string, 'currency': string, 'interval_end_at'?: string|\DateTimeInterface, 'interval_start_at'?: string|\DateTimeInterface, 'report_type': string, 'timezone'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
