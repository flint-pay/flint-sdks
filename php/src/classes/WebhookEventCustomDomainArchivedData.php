<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventCustomDomainArchivedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventCustomDomainArchivedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventCustomDomainArchivedData')); }
    /** Shape $ (Value): {@see WebhookEventCustomDomainArchivedDataObject}. A merchant hostname for hosted checkout or customer account pages.
     * @return WebhookEventCustomDomainArchivedDataObject
     */
    public function getObject(): WebhookEventCustomDomainArchivedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
