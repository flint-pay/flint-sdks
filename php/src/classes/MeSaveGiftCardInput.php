<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'code': string, 'credential_type': string, 'grant_id'?: string, 'recipient_access_token'?: string}|object|array{'code'?: string, 'credential_type': string, 'grant_id': string, 'recipient_access_token': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeSaveGiftCardInput extends Model {
    /** @param array{'body': array{'code': string, 'credential_type': string, 'grant_id'?: string, 'recipient_access_token'?: string}|object|array{'code'?: string, 'credential_type': string, 'grant_id': string, 'recipient_access_token': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeSaveGiftCardInput')); }
    /** The request body for: Save a gift card to your account.
     * @return array{'code': string, 'credential_type': string, 'grant_id'?: string, 'recipient_access_token'?: string}|object|array{'code'?: string, 'credential_type': string, 'grant_id': string, 'recipient_access_token': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
