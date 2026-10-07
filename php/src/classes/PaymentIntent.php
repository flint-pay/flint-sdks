<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PaymentAddOnFee> $add_on_fees
 * @property-read MoneyValue $amount_money
 * @property-read string $authorization_expires_at
 * @property-read string $authorized_at
 * @property-read MoneyValue $authorized_money
 * @property-read string $cancellation_reason
 * @property-read MoneyValue $capturable_money
 * @property-read string $capture_method
 * @property-read string $captured_at
 * @property-read MoneyValue $captured_money
 * @property-read string $created_at
 * @property-read PendingPaymentAction $current_payment_action
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string $customer_id
 * @property-read string $dispute_status
 * @property-read string $external_reference_id
 * @property-read PaymentFulfillmentHold $fulfillment_hold
 * @property-read ExpandedInvoiceSummary|null $invoice
 * @property-read string $invoice_id
 * @property-read PaymentErrorSummary|null $last_payment_error
 * @property-read string $merchant_id
 * @property-read MoneyValue $merchant_net_money
 * @property-read array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read string $origin
 * @property-read string $payment_flow
 * @property-read string $payment_intent_id
 * @property-read list<string> $payment_options
 * @property-read PaymentSourceSummary $payment_source
 * @property-read MoneyValue $processing_fee_money
 * @property-read string $receipt_email
 * @property-read string $refund_status
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $released_money
 * @property-read PaymentRisk|null $risk
 * @property-read string $selected_payment_option
 * @property-read string $settlement_status
 * @property-read string $status
 * @property-read string $support_reference
 * @property-read MoneyValue $tip_money
 * @property-read string $transaction_purpose
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentIntent extends Model {
    /** @param array{'add_on_fees'?: list<mixed>, 'amount_money': mixed, 'authorization_expires_at'?: string, 'authorized_at'?: string, 'authorized_money'?: mixed, 'cancellation_reason'?: string, 'capturable_money'?: mixed, 'capture_method'?: string, 'captured_at'?: string, 'captured_money'?: mixed, 'created_at'?: string, 'current_payment_action'?: mixed, 'customer'?: mixed, 'customer_id'?: string, 'dispute_status'?: string, 'external_reference_id'?: string, 'fulfillment_hold'?: mixed, 'invoice'?: mixed, 'invoice_id'?: string, 'last_payment_error': mixed, 'merchant_id'?: string, 'merchant_net_money'?: mixed, 'metadata'?: \stdClass, 'order'?: mixed, 'order_id'?: string, 'origin'?: string, 'payment_flow': string, 'payment_intent_id': string, 'payment_options': list<string>, 'payment_source'?: mixed, 'processing_fee_money'?: mixed, 'receipt_email'?: string, 'refund_status'?: string, 'refunded_money'?: mixed, 'released_money'?: mixed, 'risk': mixed, 'selected_payment_option'?: string, 'settlement_status'?: string, 'status': string, 'support_reference': string, 'tip_money'?: mixed, 'transaction_purpose'?: string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntent')); }
    /** @return list<PaymentAddOnFee>
     * @throws SdkError When add_on_fees is omitted; use hasAddOnFees() or valueOrDefault().
     */
    public function getAddOnFees(): array { return $this->get('add_on_fees'); }
    public function hasAddOnFees(): bool { return $this->has('add_on_fees'); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When authorization_expires_at is omitted; use hasAuthorizationExpiresAt() or valueOrDefault().
     */
    public function getAuthorizationExpiresAt(): string { return $this->get('authorization_expires_at'); }
    public function hasAuthorizationExpiresAt(): bool { return $this->has('authorization_expires_at'); }
    /** @return string
     * @throws SdkError When authorized_at is omitted; use hasAuthorizedAt() or valueOrDefault().
     */
    public function getAuthorizedAt(): string { return $this->get('authorized_at'); }
    public function hasAuthorizedAt(): bool { return $this->has('authorized_at'); }
    /** @return MoneyValue
     * @throws SdkError When authorized_money is omitted; use hasAuthorizedMoney() or valueOrDefault().
     */
    public function getAuthorizedMoney(): MoneyValue { return $this->get('authorized_money'); }
    public function hasAuthorizedMoney(): bool { return $this->has('authorized_money'); }
    /** @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** @return MoneyValue
     * @throws SdkError When capturable_money is omitted; use hasCapturableMoney() or valueOrDefault().
     */
    public function getCapturableMoney(): MoneyValue { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** @return string
     * @throws SdkError When capture_method is omitted; use hasCaptureMethod() or valueOrDefault().
     */
    public function getCaptureMethod(): string { return $this->get('capture_method'); }
    public function hasCaptureMethod(): bool { return $this->has('capture_method'); }
    /** @return string
     * @throws SdkError When captured_at is omitted; use hasCapturedAt() or valueOrDefault().
     */
    public function getCapturedAt(): string { return $this->get('captured_at'); }
    public function hasCapturedAt(): bool { return $this->has('captured_at'); }
    /** @return MoneyValue
     * @throws SdkError When captured_money is omitted; use hasCapturedMoney() or valueOrDefault().
     */
    public function getCapturedMoney(): MoneyValue { return $this->get('captured_money'); }
    public function hasCapturedMoney(): bool { return $this->has('captured_money'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return PendingPaymentAction
     * @throws SdkError When current_payment_action is omitted; use hasCurrentPaymentAction() or valueOrDefault().
     */
    public function getCurrentPaymentAction(): PendingPaymentAction { return $this->get('current_payment_action'); }
    public function hasCurrentPaymentAction(): bool { return $this->has('current_payment_action'); }
    /** @return ExpandedCustomerSummary|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When dispute_status is omitted; use hasDisputeStatus() or valueOrDefault().
     */
    public function getDisputeStatus(): string { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return PaymentFulfillmentHold
     * @throws SdkError When fulfillment_hold is omitted; use hasFulfillmentHold() or valueOrDefault().
     */
    public function getFulfillmentHold(): PaymentFulfillmentHold { return $this->get('fulfillment_hold'); }
    public function hasFulfillmentHold(): bool { return $this->has('fulfillment_hold'); }
    /** @return ExpandedInvoiceSummary|null
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): ExpandedInvoiceSummary|null { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** @return PaymentErrorSummary|null
     * @throws SdkError When last_payment_error is omitted; use hasLastPaymentError() or valueOrDefault().
     */
    public function getLastPaymentError(): PaymentErrorSummary|null { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return MoneyValue
     * @throws SdkError When merchant_net_money is omitted; use hasMerchantNetMoney() or valueOrDefault().
     */
    public function getMerchantNetMoney(): MoneyValue { return $this->get('merchant_net_money'); }
    public function hasMerchantNetMoney(): bool { return $this->has('merchant_net_money'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return ExpandedOrderSummary|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): string { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** @return string
     * @throws SdkError When payment_flow is omitted; use hasPaymentFlow() or valueOrDefault().
     */
    public function getPaymentFlow(): string { return $this->get('payment_flow'); }
    public function hasPaymentFlow(): bool { return $this->has('payment_flow'); }
    /** @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** @return list<string>
     * @throws SdkError When payment_options is omitted; use hasPaymentOptions() or valueOrDefault().
     */
    public function getPaymentOptions(): array { return $this->get('payment_options'); }
    public function hasPaymentOptions(): bool { return $this->has('payment_options'); }
    /** @return PaymentSourceSummary
     * @throws SdkError When payment_source is omitted; use hasPaymentSource() or valueOrDefault().
     */
    public function getPaymentSource(): PaymentSourceSummary { return $this->get('payment_source'); }
    public function hasPaymentSource(): bool { return $this->has('payment_source'); }
    /** @return MoneyValue
     * @throws SdkError When processing_fee_money is omitted; use hasProcessingFeeMoney() or valueOrDefault().
     */
    public function getProcessingFeeMoney(): MoneyValue { return $this->get('processing_fee_money'); }
    public function hasProcessingFeeMoney(): bool { return $this->has('processing_fee_money'); }
    /** @return string
     * @throws SdkError When receipt_email is omitted; use hasReceiptEmail() or valueOrDefault().
     */
    public function getReceiptEmail(): string { return $this->get('receipt_email'); }
    public function hasReceiptEmail(): bool { return $this->has('receipt_email'); }
    /** @return string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** @return MoneyValue
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return MoneyValue
     * @throws SdkError When released_money is omitted; use hasReleasedMoney() or valueOrDefault().
     */
    public function getReleasedMoney(): MoneyValue { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
    /** @return PaymentRisk|null
     * @throws SdkError When risk is omitted; use hasRisk() or valueOrDefault().
     */
    public function getRisk(): PaymentRisk|null { return $this->get('risk'); }
    public function hasRisk(): bool { return $this->has('risk'); }
    /** @return string
     * @throws SdkError When selected_payment_option is omitted; use hasSelectedPaymentOption() or valueOrDefault().
     */
    public function getSelectedPaymentOption(): string { return $this->get('selected_payment_option'); }
    public function hasSelectedPaymentOption(): bool { return $this->has('selected_payment_option'); }
    /** @return string
     * @throws SdkError When settlement_status is omitted; use hasSettlementStatus() or valueOrDefault().
     */
    public function getSettlementStatus(): string { return $this->get('settlement_status'); }
    public function hasSettlementStatus(): bool { return $this->has('settlement_status'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When support_reference is omitted; use hasSupportReference() or valueOrDefault().
     */
    public function getSupportReference(): string { return $this->get('support_reference'); }
    public function hasSupportReference(): bool { return $this->has('support_reference'); }
    /** @return MoneyValue
     * @throws SdkError When tip_money is omitted; use hasTipMoney() or valueOrDefault().
     */
    public function getTipMoney(): MoneyValue { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
    /** @return string
     * @throws SdkError When transaction_purpose is omitted; use hasTransactionPurpose() or valueOrDefault().
     */
    public function getTransactionPurpose(): string { return $this->get('transaction_purpose'); }
    public function hasTransactionPurpose(): bool { return $this->has('transaction_purpose'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
