<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventCustomDomainUpdatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventCustomDomainUpdatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventCustomDomainUpdatedData')); }
    /** Shape $ (Value): {@see WebhookEventCustomDomainUpdatedDataObject}. A merchant hostname for hosted checkout or customer account pages.
     * @return WebhookEventCustomDomainUpdatedDataObject
     */
    public function getObject(): WebhookEventCustomDomainUpdatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
