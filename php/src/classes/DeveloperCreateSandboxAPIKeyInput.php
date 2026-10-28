<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $sandbox_id
 * @property-read array{'access': string, 'name': string, 'scopes'?: list<string>}|object|array{'access': string, 'name': string, 'scopes': list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperCreateSandboxAPIKeyInput extends Model {
    /** @param array{'sandbox_id': string, 'Idempotency-Key'?: string, 'body': array{'access': string, 'name': string, 'scopes'?: list<string>}|object|array{'access': string, 'name': string, 'scopes': list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperCreateSandboxAPIKeyInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). The request body for: Issue sandbox test key.
     * @return array{'access': string, 'name': string, 'scopes'?: list<string>}|object|array{'access': string, 'name': string, 'scopes': list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
