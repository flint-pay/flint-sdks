<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventEnvironmentGrantCreatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventEnvironmentGrantCreatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventEnvironmentGrantCreatedData')); }
    /** Shape $ (Value): {@see WebhookEventEnvironmentGrantCreatedDataObject}. A partner application's authorization to access an environment.
     * @return WebhookEventEnvironmentGrantCreatedDataObject
     */
    public function getObject(): WebhookEventEnvironmentGrantCreatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
