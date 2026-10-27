<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_key_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ApiKeysGetInput extends Model {
    /** @param array{'api_key_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ApiKeysGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When api_key_id is omitted; use hasApiKeyId() or valueOrDefault().
     */
    public function getApiKeyId(): string { return $this->get('api_key_id'); }
    public function hasApiKeyId(): bool { return $this->has('api_key_id'); }
}
