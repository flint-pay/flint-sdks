<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $report_download_id
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicDownloadInput extends Model {
    /** @param array{'expires_at': string|\DateTimeInterface, 'report_download_id': string, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicDownloadInput')); }
    /** Shape $ (Value): string. Download expiration instant. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string. pattern: ^rdl_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When report_download_id is omitted; use hasReportDownloadId() or valueOrDefault().
     */
    public function getReportDownloadId(): string { return $this->get('report_download_id'); }
    public function hasReportDownloadId(): bool { return $this->has('report_download_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
