<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $scopes
 * @property-read string $secret_key
 * Presence-aware response; omitted fields throw when accessed. */
final class DemoSessionAPIKey extends Model {
    /** @param array{'scopes': list<string>, 'secret_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DemoSessionAPIKey')); }
    /** @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** @return string
     * @throws SdkError When secret_key is omitted; use hasSecretKey() or valueOrDefault().
     */
    public function getSecretKey(): string { return $this->get('secret_key'); }
    public function hasSecretKey(): bool { return $this->has('secret_key'); }
}
