<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class IncomingWebhook6abcc176d530PayloadInput extends Model {
    /** @param array{'data': array{'changed_fields': list<string>, 'initiated_by': string, 'previous_values': array<array-key, mixed>|\stdClass, 'resource_updated_at': string|\DateTimeInterface, 'subscription_id': string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key': string}|object|null, 'test'?: bool, 'webhook_event_id': string, ...}|object|array{'data': array{'changed_fields': list<string>, 'environment_grant_id': string, 'environment_id'?: string, 'initiated_by': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'previous_values': array<array-key, mixed>|\stdClass, 'resource_updated_at': string|\DateTimeInterface, 'source_type': mixed, 'subscription_id': string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'partner_app_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IncomingWebhook6abcc176d530PayloadInput')); }
}
