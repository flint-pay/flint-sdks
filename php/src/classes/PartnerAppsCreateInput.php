<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'redirect_uris': list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppsCreateInput extends Model {
    /** @param array{'body': array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'redirect_uris': list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppsCreateInput')); }
    /** The request body for: Create partner app. Example: {"default_requested_permissions":["manage_orders"],"name":"Acme Commerce Plugin","permission_manifest":[{"description":"Read and update Flint orders for installed merchants.","permission_id":"manage_orders","required_scopes":["commerce.orders.read","commerce.orders.write"],"title":"Manage orders"},{"description":"Read and update customer records for installed merchants.","optional":true,"permission_id":"manage_customers","required_scopes":["customers.read","customers.write"],"title":"Manage customers"},{"description":"Read product, variant, bundle, and SKU lookup catalog records.","optional":true,"permission_id":"read_catalog","required_scopes":["commerce.products.read","commerce.bundles.read","commerce.catalog.read"],"title":"Read catalog"},{"description":"Create and update bundle catalog records for installed merchants.","optional":true,"permission_id":"manage_bundles","required_scopes":["commerce.bundles.write"],"title":"Manage bundles"}],"redirect_uris":["https://plugins.acme.com/flint/oauth/callback","http://localhost:3000/flint/oauth/callback"]}.
     * @return array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'redirect_uris': list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
