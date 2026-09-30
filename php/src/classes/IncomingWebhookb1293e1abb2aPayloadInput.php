<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class IncomingWebhookb1293e1abb2aPayloadInput extends Model {
    /** @param array{'data': array{'card_brand'?: string, 'card_exp_month'?: int, 'card_exp_year'?: int, 'card_last4'?: string, 'card_wallet'?: string, 'customer_id'?: string, 'payment_method_id': string, 'resource_updated_at': string|\DateTimeInterface, 'status': string, 'usage'?: string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key': string}|object|null, 'test'?: bool, 'webhook_event_id': string, ...}|object|array{'data': array{'card_brand'?: string, 'card_exp_month'?: int, 'card_exp_year'?: int, 'card_last4'?: string, 'card_wallet'?: string, 'customer_id'?: string, 'environment_grant_id': string, 'environment_id'?: string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'payment_method_id': string, 'resource_updated_at': string|\DateTimeInterface, 'source_type': mixed, 'status': string, 'usage'?: string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'partner_app_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IncomingWebhookb1293e1abb2aPayloadInput')); }
}
