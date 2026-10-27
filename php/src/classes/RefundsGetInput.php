<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $refund_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundsGetInput extends Model {
    /** @param array{'refund_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer", "order", "payment_intent", "payment_refunds.payment_intent". Shape $[] (Value): string.  Value enum: "customer", "order", "payment_intent", "payment_refunds.payment_intent".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
