<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class IncomingWebhook6ec2eb9e3a41PayloadInput extends Model {
    /** @param array{'data': array{'initiated_by': string, 'next_billing_at': string|\DateTimeInterface, 'subscription_id': string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key': string}|object|null, 'test'?: bool, 'webhook_event_id': string, ...}|object|array{'data': array{'environment_grant_id': string, 'environment_id'?: string, 'initiated_by': string, 'merchant_id': string, 'mode': string, 'next_billing_at': string|\DateTimeInterface, 'partner_app_install_id': string, 'source_type': mixed, 'subscription_id': string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'partner_app_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IncomingWebhook6ec2eb9e3a41PayloadInput')); }
}
