<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'client_id': string, 'context_id'?: string, 'device_name'?: string, 'merchant_id'?: string, 'mode'?: string, 'platform'?: string, 'refresh_token': string, 'sandbox_id'?: string, 'scope': string, 'scope_mode'?: string, 'session_mode': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OauthReauthorizeCLIDeviceInput extends Model {
    /** @param array{'body': array{'client_id': string, 'context_id'?: string, 'device_name'?: string, 'merchant_id'?: string, 'mode'?: string, 'platform'?: string, 'refresh_token': string, 'sandbox_id'?: string, 'scope': string, 'scope_mode'?: string, 'session_mode': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OauthReauthorizeCLIDeviceInput')); }
    /** The request body for: Review CLI session consent.
     * @return array{'client_id': string, 'context_id'?: string, 'device_name'?: string, 'merchant_id'?: string, 'mode'?: string, 'platform'?: string, 'refresh_token': string, 'sandbox_id'?: string, 'scope': string, 'scope_mode'?: string, 'session_mode': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
