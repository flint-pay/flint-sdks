<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class IncomingWebhook525b56e32d02PayloadInput extends Model {
    /** @param array{'data': array{'customer_id'?: string, 'delivery_hold': SubscriptionDeliveryHoldInput|array<array-key, mixed>|\stdClass, 'reason': string, 'subscription_id': string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key': string}|object|null, 'test'?: bool, 'webhook_event_id': string, ...}|object|array{'data': array{'customer_id'?: string, 'delivery_hold': SubscriptionDeliveryHoldInput|array<array-key, mixed>|\stdClass, 'environment_grant_id': string, 'environment_id'?: string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'reason': string, 'source_type': mixed, 'subscription_id': string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'partner_app_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IncomingWebhook525b56e32d02PayloadInput')); }
}
