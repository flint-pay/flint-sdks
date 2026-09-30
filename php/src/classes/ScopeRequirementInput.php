<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $mode
 * @property-read list<string> $scopes
 * Presence-aware input; omitted fields throw when accessed. */
final class ScopeRequirementInput extends Model {
    /** @param array{'mode': string, 'scopes': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ScopeRequirementInput')); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
}
