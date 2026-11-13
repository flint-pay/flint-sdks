<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'business_name'?: string, 'code_challenge': string, 'code_challenge_method': string, 'external_reference_id'?: string, 'modes': list<string>, 'owner': mixed, 'partner_app_id': string, 'requested_permission_ids'?: list<string>, 'sandbox_initial_onboarding'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSignupsCreateInput extends Model {
    /** @param array{'body': array{'business_name'?: string, 'code_challenge': string, 'code_challenge_method': string, 'external_reference_id'?: string, 'modes': list<string>, 'owner': mixed, 'partner_app_id': string, 'requested_permission_ids'?: list<string>, 'sandbox_initial_onboarding'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupsCreateInput')); }
    /** The request body for: Create a merchant signup. Example: {"business_name":"Tidewater Yoga","code_challenge":"E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM","code_challenge_method":"S256","external_reference_id":"studio_8812","modes":["test","live"],"owner":{"email":"maya@tidewateryoga.example","first_name":"Maya","last_name":"Okafor"},"partner_app_id":"papp_01KEZF7C00D8DXK5AXR7NPRJ0J","requested_permission_ids":["setup_payments","sell"],"sandbox_initial_onboarding":"not_started"}.
     * @return array{'business_name'?: string, 'code_challenge': string, 'code_challenge_method': string, 'external_reference_id'?: string, 'modes': list<string>, 'owner': mixed, 'partner_app_id': string, 'requested_permission_ids'?: list<string>, 'sandbox_initial_onboarding'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
