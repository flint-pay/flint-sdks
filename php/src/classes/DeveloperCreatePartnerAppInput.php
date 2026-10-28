<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'redirect_uris': list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperCreatePartnerAppInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'redirect_uris': list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperCreatePartnerAppInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create partner app.
     * @return array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'redirect_uris': list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
