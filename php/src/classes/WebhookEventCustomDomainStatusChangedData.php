<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomDomainStatusChange $object
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventCustomDomainStatusChangedData extends Model {
    /** @param array{'object': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventCustomDomainStatusChangedData')); }
    /** @return CustomDomainStatusChange
     * @throws SdkError When object is omitted; use hasObject() or valueOrDefault().
     */
    public function getObject(): CustomDomainStatusChange { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
