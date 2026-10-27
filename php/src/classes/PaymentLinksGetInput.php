<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_link_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinksGetInput extends Model {
    /** @param array{'payment_link_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinksGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "sales_summary", "subscription_plan". Shape $[] (Value): string.  Value enum: "sales_summary", "subscription_plan".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
