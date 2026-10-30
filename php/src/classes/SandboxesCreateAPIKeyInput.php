<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $sandbox_id
 * @property-read array{'access': string, 'name': string, 'scopes'?: list<string>}|object|array{'access': string, 'name': string, 'scopes': list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SandboxesCreateAPIKeyInput extends Model {
    /** @param array{'sandbox_id': string, 'body': array{'access': string, 'name': string, 'scopes'?: list<string>}|object|array{'access': string, 'name': string, 'scopes': list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SandboxesCreateAPIKeyInput')); }
    /** Flint sandbox ID. Example: "test_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** The request body for: Issue sandbox test key. Example: {"access":"restricted","name":"Partner demo key","scopes":["commerce.orders.read","customers.read"]}.
     * @return array{'access': string, 'name': string, 'scopes'?: list<string>}|object|array{'access': string, 'name': string, 'scopes': list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
