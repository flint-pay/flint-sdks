<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fulfillment_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeGetFulfillmentInput extends Model {
    /** @param array{'fulfillment_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeGetFulfillmentInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
}
