<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read string $external_reference_id
 * @property-read list<string> $status
 * @property-read bool $is_default
 * @property-read list<string> $resolution_mode
 * @property-read bool $include_diagnostics
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfilesListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: list<string>, 'is_default'?: bool, 'resolution_mode'?: list<string>, 'include_diagnostics'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfilesListInput')); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived". Shape $[] (Value): string.  Value enum: "active", "archived".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When is_default is omitted; use hasIsDefault() or valueOrDefault().
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "quote", "manual". Shape $[] (Value): string.  Value enum: "quote", "manual".
     * @return list<string>
     * @throws SdkError When resolution_mode is omitted; use hasResolutionMode() or valueOrDefault().
     */
    public function getResolutionMode(): array { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** Shape $ (Value): boolean. Default: false.
     * @return bool
     * @throws SdkError When include_diagnostics is omitted; use hasIncludeDiagnostics() or valueOrDefault().
     */
    public function getIncludeDiagnostics(): bool { return $this->get('include_diagnostics'); }
    public function hasIncludeDiagnostics(): bool { return $this->has('include_diagnostics'); }
}
