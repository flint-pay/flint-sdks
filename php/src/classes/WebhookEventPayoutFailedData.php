<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventPayoutFailedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutFailedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutFailedData')); }
    /** Shape $ (Value): {@see WebhookEventPayoutFailedDataObject}. Funds sent from a merchant balance to a payout destination.
     * @return WebhookEventPayoutFailedDataObject
     */
    public function getObject(): WebhookEventPayoutFailedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
