<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $report_download_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReportDownloadsGetInput extends Model {
    /** @param array{'report_download_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReportDownloadsGetInput')); }
    /** Flint report download ID. Must be a valid ID with prefix rdl_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "rdl_01KEZF7C003GGGDW1N5QT46JDZ".
     * @return string
     * @throws SdkError When report_download_id is omitted; use hasReportDownloadId() or valueOrDefault().
     */
    public function getReportDownloadId(): string { return $this->get('report_download_id'); }
    public function hasReportDownloadId(): bool { return $this->has('report_download_id'); }
}
