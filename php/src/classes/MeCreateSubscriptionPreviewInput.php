<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'destination': mixed, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateSubscriptionPreviewInput extends Model {
    /** @param array{'body': array{'destination': mixed, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateSubscriptionPreviewInput')); }
    /** Shape $ (Value): Alternative shapes (see declared variants). The request body for: Preview subscription.
     * @return array{'destination': mixed, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
