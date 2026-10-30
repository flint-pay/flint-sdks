<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read ?string $platform
 * @property-read ?string $schema_version
 * @property-read ?string $version
 * Presence-aware response; omitted optional fields return null. */
final class FeedbackReportResponseDataPapercutReportingClient extends Model {
    /** @param array{'name': string, 'platform'?: string, 'schema_version'?: string, 'version'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FeedbackReportResponseDataPapercutReportingClient')); }
    /** Name of the submitting tool. Required when reporting_client is present. Limited to 64 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 64.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Platform on which the submitting client runs. Value enum: "macos", "linux", "windows", "ios", "android", "web", "other".
     * @return ?string
     */
    public function getPlatform(): ?string { return $this->get('platform'); }
    public function hasPlatform(): bool { return $this->has('platform'); }
    /** Feedback schema version used by the submitting tool. Limited to 64 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 64.
     * @return ?string
     */
    public function getSchemaVersion(): ?string { return $this->get('schema_version'); }
    public function hasSchemaVersion(): bool { return $this->has('schema_version'); }
    /** Version of the submitting tool. Limited to 64 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 64.
     * @return ?string
     */
    public function getVersion(): ?string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
