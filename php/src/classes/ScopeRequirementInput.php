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
    /** Shape $ (Value): string. How the required scopes are evaluated. all requires every listed scope; any requires at least one listed scope. Example: "all". Value enum: "all", "any".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): Array of string. Canonical public scope names evaluated for this authorization decision. Example: ["developer.sandboxes.write","accounts.api_keys.write"]. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
}
