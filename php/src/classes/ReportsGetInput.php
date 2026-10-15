<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $report_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReportsGetInput extends Model {
    /** @param array{'report_id': string, 'X-Request-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReportsGetInput')); }
    /** @return string
     * @throws SdkError When report_id is omitted; use hasReportId() or valueOrDefault().
     */
    public function getReportId(): string { return $this->get('report_id'); }
    public function hasReportId(): bool { return $this->has('report_id'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
}
