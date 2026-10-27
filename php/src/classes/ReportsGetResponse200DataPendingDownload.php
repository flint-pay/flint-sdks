<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read string $report_download_id
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class ReportsGetResponse200DataPendingDownload extends Model {
    /** @param array{'expires_at': string, 'report_download_id': string, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReportsGetResponse200DataPendingDownload')); }
    /** Shape $ (Value): string. Download expiration instant. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string. pattern: ^rdl_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getReportDownloadId(): string { return $this->get('report_download_id'); }
    public function hasReportDownloadId(): bool { return $this->has('report_download_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
