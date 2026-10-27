<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_link_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinksGetPublicInput extends Model {
    /** @param array{'payment_link_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinksGetPublicInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
}
