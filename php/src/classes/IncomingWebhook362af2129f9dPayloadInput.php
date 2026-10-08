<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class IncomingWebhook362af2129f9dPayloadInput extends Model {
    /** @param array{'data': array{'status': string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key': string}|object|null, 'test'?: bool, 'webhook_event_id': string, ...}|object|array{'data': array{'environment_grant_id': string, 'environment_id'?: string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'source_type': mixed, 'status': string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'partner_app_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IncomingWebhook362af2129f9dPayloadInput')); }
}
