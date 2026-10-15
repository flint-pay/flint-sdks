<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'destination': mixed, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription': mixed}|object|array{'delivery_method': mixed, 'delivery_method_id': string, 'mode': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPreviewsCreateInput extends Model {
    /** @param array{'body': array{'destination': mixed, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription': mixed}|object|array{'delivery_method': mixed, 'delivery_method_id': string, 'mode': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewsCreateInput')); }
    /** @return array{'destination': mixed, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription': mixed}|object|array{'delivery_method': mixed, 'delivery_method_id': string, 'mode': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
