<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'api_version'?: string, 'description'?: string, 'enabled_events': list<string>, 'event_sources'?: list<string>, 'installed_merchant_modes'?: list<string>, 'partner_app_id'?: string, 'signing_methods'?: list<mixed>, 'status'?: string, 'url': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEndpointsCreateInput extends Model {
    /** @param array{'body': array{'api_version'?: string, 'description'?: string, 'enabled_events': list<string>, 'event_sources'?: list<string>, 'installed_merchant_modes'?: list<string>, 'partner_app_id'?: string, 'signing_methods'?: list<mixed>, 'status'?: string, 'url': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointsCreateInput')); }
    /** The request body for: Create webhook endpoint. Example: {"description":"Primary production endpoint","enabled_events":["order.paid","payment_intent.succeeded"],"event_sources":["merchant"],"status":"active","url":"https://example.com/webhooks/flint"}.
     * @return array{'api_version'?: string, 'description'?: string, 'enabled_events': list<string>, 'event_sources'?: list<string>, 'installed_merchant_modes'?: list<string>, 'partner_app_id'?: string, 'signing_methods'?: list<mixed>, 'status'?: string, 'url': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
