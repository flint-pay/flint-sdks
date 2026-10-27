<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventPayoutPaidDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutPaidData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutPaidData')); }
    /** Shape $ (Value): {@see WebhookEventPayoutPaidDataObject}. Funds sent from a merchant balance to a payout destination.
     * @return WebhookEventPayoutPaidDataObject
     */
    public function getObject(): WebhookEventPayoutPaidDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
