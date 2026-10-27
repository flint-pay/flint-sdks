<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $status
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskRulesListInput extends Model {
    /** @param array{'status'?: list<string>, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRulesListInput')); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived". Shape $[] (Value): string.  Value enum: "active", "inactive", "archived".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
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
}
