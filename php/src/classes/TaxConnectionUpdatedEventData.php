<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxConnectionUpdatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class TaxConnectionUpdatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionUpdatedEventData')); }
    /** The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook.
     * @return TaxConnectionUpdatedEventDataObject
     */
    public function getObject(): TaxConnectionUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
