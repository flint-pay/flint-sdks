<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventPayoutSettingsUpdatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutSettingsUpdatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutSettingsUpdatedData')); }
    /** Shape $ (Value): {@see WebhookEventPayoutSettingsUpdatedDataObject}. The merchant's payout schedule and preferences.
     * @return WebhookEventPayoutSettingsUpdatedDataObject
     */
    public function getObject(): WebhookEventPayoutSettingsUpdatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
