<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $api_key_id
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ApiKeysUpdateInput extends Model {
    /** @param array{'api_key_id': string, 'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ApiKeysUpdateInput')); }
    /** Flint API key ID. Example: "key_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When api_key_id is omitted; use hasApiKeyId() or valueOrDefault().
     */
    public function getApiKeyId(): string { return $this->get('api_key_id'); }
    public function hasApiKeyId(): bool { return $this->has('api_key_id'); }
    /** The request body for: Update an API key. Example: {"access":"restricted","expected_version":1,"expires_at":"2027-06-17T14:30:00Z","name":"Sandbox orders readonly","scopes":["accounts.api_keys.read","commerce.orders.read"]}.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
