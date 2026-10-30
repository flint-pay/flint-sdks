<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read string $report_download_id
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class ReportSucceededInstalledMerchantsEventDataObjectPendingDownload extends Model {
    /** @param array{'expires_at': string, 'report_download_id': string, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReportSucceededInstalledMerchantsEventDataObjectPendingDownload')); }
    /** When the download stops working: 24 hours after the report succeeded. The report keeps status succeeded and this download object afterward; create a new report to get the file again. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Identifier of this download, the last segment of url. pattern: ^rdl_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getReportDownloadId(): string { return $this->get('report_download_id'); }
    public function hasReportDownloadId(): bool { return $this->has('report_download_id'); }
    /** Flint API URL for the file, not the file itself. Call it with the same API key; Flint answers 307 with a redirect to a private file URL that works for a few minutes. Request url again each time you need the file.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
