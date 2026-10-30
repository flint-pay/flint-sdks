<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $dispute_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputesGetInput extends Model {
    /** @param array{'dispute_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputesGetInput')); }
    /** Flint dispute ID. Example: "du_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Supported expansions: customer, order, payment_intent. Expansion requires payments.disputes.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. [] enum: "customer", "order", "payment_intent". Value enum: "customer", "order", "payment_intent". anyOf[1] (Value): Array of string.  [] enum: "customer", "order", "payment_intent". anyOf[1][] (Value): string.  Value enum: "customer", "order", "payment_intent". anyOf[2] (Value): string.  Value enum: "customer", "order", "payment_intent".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
