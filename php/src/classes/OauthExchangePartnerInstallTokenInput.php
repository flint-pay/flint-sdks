<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'client_id': string, 'client_secret': string, 'code'?: string, 'grant_type': string, 'redirect_uri'?: string, 'refresh_token'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OauthExchangePartnerInstallTokenInput extends Model {
    /** @param array{'body': array{'client_id': string, 'client_secret': string, 'code'?: string, 'grant_type': string, 'redirect_uri'?: string, 'refresh_token'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OauthExchangePartnerInstallTokenInput')); }
    /** @return array{'client_id': string, 'client_secret': string, 'code'?: string, 'grant_type': string, 'redirect_uri'?: string, 'refresh_token'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
