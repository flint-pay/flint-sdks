<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventPartnerAppInstallCreatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPartnerAppInstallCreatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPartnerAppInstallCreatedData')); }
    /** Shape $ (Value): {@see WebhookEventPartnerAppInstallCreatedDataObject}. A merchant's authorization of a partner application.
     * @return WebhookEventPartnerAppInstallCreatedDataObject
     */
    public function getObject(): WebhookEventPartnerAppInstallCreatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
