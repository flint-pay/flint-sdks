<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'client_id': string, 'refresh_token': string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OauthListCLIContextsInput extends Model {
    /** @param array{'body': array{'client_id': string, 'refresh_token': string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OauthListCLIContextsInput')); }
    /** The request body for: List authorized CLI contexts.
     * @return array{'client_id': string, 'refresh_token': string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
