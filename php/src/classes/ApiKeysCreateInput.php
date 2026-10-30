<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'access': string, 'expires_at'?: string|\DateTimeInterface, 'name': string, 'scopes'?: list<string>}|object|array{'access': string, 'expires_at'?: string|\DateTimeInterface, 'name': string, 'scopes': list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ApiKeysCreateInput extends Model {
    /** @param array{'body': array{'access': string, 'expires_at'?: string|\DateTimeInterface, 'name': string, 'scopes'?: list<string>}|object|array{'access': string, 'expires_at'?: string|\DateTimeInterface, 'name': string, 'scopes': list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ApiKeysCreateInput')); }
    /** The request body for: Create an API key. Example: {"access":"restricted","expires_at":"2027-03-17T14:30:00Z","name":"Sandbox orders integration","scopes":["accounts.api_keys.read","commerce.orders.read","commerce.orders.write"]}.
     * @return array{'access': string, 'expires_at'?: string|\DateTimeInterface, 'name': string, 'scopes'?: list<string>}|object|array{'access': string, 'expires_at'?: string|\DateTimeInterface, 'name': string, 'scopes': list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
