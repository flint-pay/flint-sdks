<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'amount_money': mixed, 'capture_method'?: string, 'customer_id'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'payment_options': list<string>, 'payment_return_url'?: string, 'receipt_email'?: string, 'tip_money'?: mixed, 'transaction_purpose'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsCreateInput extends Model {
    /** @param array{'body': array{'amount_money': mixed, 'capture_method'?: string, 'customer_id'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'payment_options': list<string>, 'payment_return_url'?: string, 'receipt_email'?: string, 'tip_money'?: mixed, 'transaction_purpose'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsCreateInput')); }
    /** The request body for: Create standalone payment intent.
     * @return array{'amount_money': mixed, 'capture_method'?: string, 'customer_id'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'payment_options': list<string>, 'payment_return_url'?: string, 'receipt_email'?: string, 'tip_money'?: mixed, 'transaction_purpose'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
