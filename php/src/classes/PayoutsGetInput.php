<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payout_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutsGetInput extends Model {
    /** @param array{'payout_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutsGetInput')); }
    /** Flint payout ID. Example: "po_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payout_id is omitted; use hasPayoutId() or valueOrDefault().
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Supported expansions: original_payout, payout_destination, reversed_by_payout. Expansion requires money_movement.payouts.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=original_payout&expand=payout_destination, or pass one comma-separated value. [] enum: "original_payout", "payout_destination", "reversed_by_payout". Value enum: "original_payout", "payout_destination", "reversed_by_payout". anyOf[1] (Value): Array of string.  [] enum: "original_payout", "payout_destination", "reversed_by_payout". anyOf[1][] (Value): string.  Value enum: "original_payout", "payout_destination", "reversed_by_payout". anyOf[2] (Value): string.  Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
