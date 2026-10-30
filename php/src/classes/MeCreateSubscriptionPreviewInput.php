<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'destination': array{'customer_address_id': string, 'type': string}|object|array{'address': mixed, 'type': string}|object, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateSubscriptionPreviewInput extends Model {
    /** @param array{'body': array{'destination': array{'customer_address_id': string, 'type': string}|object|array{'address': mixed, 'type': string}|object, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateSubscriptionPreviewInput')); }
    /** The request body for: Preview subscription.
     * @return array{'destination': array{'customer_address_id': string, 'type': string}|object|array{'address': mixed, 'type': string}|object, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
