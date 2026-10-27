<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payout_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutsGetInput extends Model {
    /** @param array{'payout_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payout_id is omitted; use hasPayoutId() or valueOrDefault().
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "original_payout", "payout_destination", "reversed_by_payout". Shape $[] (Value): string.  Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
