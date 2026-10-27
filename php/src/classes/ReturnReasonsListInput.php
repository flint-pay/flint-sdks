<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_reference_id
 * @property-read string $handle
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read list<string> $source
 * @property-read list<string> $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReasonsListInput extends Model {
    /** @param array{'external_reference_id'?: string, 'handle'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'source'?: list<string>, 'status'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReasonsListInput')); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20.
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
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "flint", "merchant". Shape $[] (Value): string.  Value enum: "flint", "merchant".
     * @return list<string>
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived", "inactive". Shape $[] (Value): string.  Value enum: "active", "archived", "inactive".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
