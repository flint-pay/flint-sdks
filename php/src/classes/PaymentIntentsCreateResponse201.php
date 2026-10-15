<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentIntentsCreateResponse201Data $data
 * @property-read ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentIntentsCreateResponse201 extends Model {
    /** @param array{'data': object{'add_on_fees'?: list<mixed>, 'amount_money': mixed, 'authorization_expires_at'?: string, 'authorized_at'?: string, 'authorized_money'?: mixed, 'cancellation_reason'?: string, 'capturable_money'?: mixed, 'capture_method'?: string, 'captured_at'?: string, 'captured_money'?: mixed, 'created_at'?: string, 'current_payment_action'?: mixed, 'customer'?: mixed, 'customer_id'?: string, 'dispute_status'?: string, 'external_reference_id'?: string, 'fulfillment_hold'?: mixed, 'invoice'?: mixed, 'invoice_id'?: string, 'last_payment_error': mixed, 'merchant_id'?: string, 'merchant_net_money'?: mixed, 'metadata'?: \stdClass, 'order'?: mixed, 'order_id'?: string, 'origin'?: string, 'payment_flow': string, 'payment_intent_id': string, 'payment_options': list<string>, 'payment_source'?: mixed, 'processing_fee_money'?: mixed, 'receipt_email'?: string, 'refund_status'?: string, 'refunded_money'?: mixed, 'released_money'?: mixed, 'risk': mixed, 'selected_payment_option'?: string, 'settlement_status'?: string, 'status': string, 'support_reference': string, 'tip_money'?: mixed, 'transaction_purpose'?: string, 'updated_at'?: string, 'payment_collection': mixed}, 'meta'?: mixed, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsCreateResponse201')); }
    /** @return PaymentIntentsCreateResponse201Data
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): PaymentIntentsCreateResponse201Data { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** @return ResponseMeta
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
