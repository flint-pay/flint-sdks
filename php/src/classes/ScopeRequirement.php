<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $mode
 * @property-read list<string> $scopes
 * Presence-aware response; omitted optional fields return null. */
final class ScopeRequirement extends Model {
    /** @param array{'mode': string, 'scopes': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ScopeRequirement')); }
    /** Shape $ (Value): string. How the required scopes are evaluated. all requires every listed scope; any requires at least one listed scope. Value enum: "all", "any".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): Array of string. Canonical public scope names evaluated for this authorization decision. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
}
