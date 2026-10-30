<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $api_key_id
 * @property-read array{'expected_version'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ApiKeysRevokeInput extends Model {
    /** @param array{'api_key_id': string, 'body'?: array{'expected_version'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ApiKeysRevokeInput')); }
    /** Flint API key ID. Example: "key_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When api_key_id is omitted; use hasApiKeyId() or valueOrDefault().
     */
    public function getApiKeyId(): string { return $this->get('api_key_id'); }
    public function hasApiKeyId(): bool { return $this->has('api_key_id'); }
    /** The request body for: Revoke an API key.
     * @return array{'expected_version'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
