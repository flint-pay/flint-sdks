<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fulfillment_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentsGetInput extends Model {
    /** @param array{'fulfillment_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "order", "packages", "shipments". Shape $[] (Value): string.  Value enum: "order", "packages", "shipments".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
