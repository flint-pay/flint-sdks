<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $report_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReportsGetInput extends Model {
    /** @param array{'report_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReportsGetInput')); }
    /** Flint report ID. Example: "rep_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When report_id is omitted; use hasReportId() or valueOrDefault().
     */
    public function getReportId(): string { return $this->get('report_id'); }
    public function hasReportId(): bool { return $this->has('report_id'); }
}
