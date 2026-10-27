<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $dispute_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputesGetInput extends Model {
    /** @param array{'dispute_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputesGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer", "order", "payment_intent". Shape $[] (Value): string.  Value enum: "customer", "order", "payment_intent".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
