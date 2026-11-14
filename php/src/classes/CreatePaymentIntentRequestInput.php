<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $capture_method
 * @property-read string $customer_id
 * @property-read int $expected_order_version
 * @property-read string $external_reference_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read list<string> $payment_options
 * @property-read string $payment_return_url
 * @property-read OrderPaymentSourceSelectionInput|array<array-key, mixed>|\stdClass $payment_source_selection
 * @property-read PlatformFeeRequestInput|array<array-key, mixed>|\stdClass $platform_fee
 * @property-read string $receipt_email
 * @property-read bool $request_overcapture
 * @property-read list<PaymentSplitRequestInput|array<array-key, mixed>|\stdClass> $splits
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tip_money
 * @property-read string $transaction_purpose
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePaymentIntentRequestInput extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'customer_id'?: string, 'expected_order_version'?: int, 'external_reference_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'order_id'?: string, 'payment_options'?: list<string>, 'payment_return_url'?: string, 'payment_source_selection'?: OrderPaymentSourceSelectionInput|array<array-key, mixed>|\stdClass, 'platform_fee'?: PlatformFeeRequestInput|array<array-key, mixed>|\stdClass, 'receipt_email'?: string, 'request_overcapture'?: bool, 'splits'?: list<PaymentSplitRequestInput|array<array-key, mixed>|\stdClass>, 'tip_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'transaction_purpose'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePaymentIntentRequestInput')); }
    /** Amount to request from the buyer, including any standalone tip_money. Required for standalone payments. On an order, uses the order currency and defaults to its remaining balance; the amount cannot exceed 99999999 minor units, and existing automatic tax rules apply. With capture_method manual, this is the hold amount, and you can capture less later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** automatic collects the payment when it is confirmed. manual places a hold at confirmation that you capture or cancel later. Defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     * @return string
     * @throws SdkError When capture_method is omitted; use hasCaptureMethod() or valueOrDefault().
     */
    public function getCaptureMethod(): string { return $this->get('capture_method'); }
    public function hasCaptureMethod(): bool { return $this->has('capture_method'); }
    /** Customer to link to this payment intent. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Optional order version from the last order read. Accepted only with order_id; the create fails with VERSION_CONFLICT if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_order_version is omitted; use hasExpectedOrderVersion() or valueOrDefault().
     */
    public function getExpectedOrderVersion(): int { return $this->get('expected_order_version'); }
    public function hasExpectedOrderVersion(): bool { return $this->has('expected_order_version'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Order that owns this immutable payment leg. Omit it to create a standalone payment. With order_id, the order supplies customer, receipt, tip and bank-debit purpose; those standalone fields are not accepted. minLength: 1. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Payment options the buyer can use. Required for a standalone payment. On an order, omission uses the order source defaults. Name at least one when supplied. card_present must be the only option; confirm it with a reader credential. payment_return_url is not accepted with card_present. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * @return list<string>
     * @throws SdkError When payment_options is omitted; use hasPaymentOptions() or valueOrDefault().
     */
    public function getPaymentOptions(): array { return $this->get('payment_options'); }
    public function hasPaymentOptions(): bool { return $this->has('payment_options'); }
    /** Where Flint sends the buyer after a redirect or authentication step, adding only payment_intent_id for a payment, or payment_method_id for a setup. The completion message uses type flint.payment_action.completed and exactly that one subject key. Without it, the step ends on a Flint page that tells the parent or opener the step completed. Accepts an absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript, data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode also accepts HTTP loopback URLs. With a checkout credential on order pay, omit payment_return_url; checkout sessions use their own configured return URL. Required when payment_options includes affirm and no checkout session collects the payment. Not accepted with card_present. minLength: 1. pattern: \S.
     * @return string
     * @throws SdkError When payment_return_url is omitted; use hasPaymentReturnUrl() or valueOrDefault().
     */
    public function getPaymentReturnUrl(): string { return $this->get('payment_return_url'); }
    public function hasPaymentReturnUrl(): bool { return $this->has('payment_return_url'); }
    /** Card and wallet selection for an order-owned payment leg. Accepted only with order_id and cannot be combined with nonempty payment_options. The payment source options you choose when creating an order payment intent.
     * @return OrderPaymentSourceSelectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_source_selection is omitted; use hasPaymentSourceSelection() or valueOrDefault().
     */
    public function getPaymentSourceSelection(): mixed { return $this->get('payment_source_selection'); }
    public function hasPaymentSourceSelection(): bool { return $this->has('payment_source_selection'); }
    /** A platform fee your partner app charges on this payment, checked against amount_money. Only a partner app install token can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because Flint's billing creates the renewals. amount_money must be above zero, in the payment's currency, at most the platform fee cap the merchant approved for this amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the payment never fails because of it. Part of the request fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.
     * @return PlatformFeeRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_fee is omitted; use hasPlatformFee() or valueOrDefault().
     */
    public function getPlatformFee(): mixed { return $this->get('platform_fee'); }
    public function hasPlatformFee(): bool { return $this->has('platform_fee'); }
    /** Email address for this payment's receipt. When omitted, Flint uses the customer's email. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     * @return string
     * @throws SdkError When receipt_email is omitted; use hasReceiptEmail() or valueOrDefault().
     */
    public function getReceiptEmail(): string { return $this->get('receipt_email'); }
    public function hasReceiptEmail(): bool { return $this->has('receipt_email'); }
    /** Let one capture collect more than the authorization where the card network allows it, for example a final bill plus a tip. Needs capture_method manual and payment_options limited to card, apple_pay, google_pay or card_present; otherwise INVALID_REQUEST with NOT_ALLOWED on request_overcapture. Card networks allow overcapture only where the final amount isn't known at authorization, such as tips and services, and you're responsible for following their rules. overcapture reports what the processor allows once the payment is authorized. Default: false.
     * @return bool
     * @throws SdkError When request_overcapture is omitted; use hasRequestOvercapture() or valueOrDefault().
     */
    public function getRequestOvercapture(): bool { return $this->get('request_overcapture'); }
    public function hasRequestOvercapture(): bool { return $this->has('request_overcapture'); }
    /** Divide this payment's funds between the collecting merchant and sellers; this is separate from split tender, where a buyer uses several payment methods. Only the collecting merchant's own credentials can send splits. Each install must belong to the same app owned by the collecting merchant, with the seller's approval in this mode and readiness to receive payouts. Test mode needs no platform review; live mode requires the app's active payment_splits capability and Flint support for the collecting account. Can't be combined with platform_fee or saved payment credentials. The total must fit after the largest Flint fee for the offered payment options, leaving one minor unit for the collecting merchant; otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. Fixed after create, except capture's final amounts. Part of the idempotency fingerprint. minItems: 1. maxItems: 25. [] (Value): {@see PaymentSplitRequestInput}. A seller's fixed share of one payment, created with that payment. This divides the payment's funds; split tender divides how the buyer pays.
     * @return list<PaymentSplitRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When splits is omitted; use hasSplits() or valueOrDefault().
     */
    public function getSplits(): array { return $this->get('splits'); }
    public function hasSplits(): bool { return $this->has('splits'); }
    /** Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip_money is omitted; use hasTipMoney() or valueOrDefault().
     */
    public function getTipMoney(): mixed { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
    /** Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Value enum: "goods", "services", "other".
     * @return string
     * @throws SdkError When transaction_purpose is omitted; use hasTransactionPurpose() or valueOrDefault().
     */
    public function getTransactionPurpose(): string { return $this->get('transaction_purpose'); }
    public function hasTransactionPurpose(): bool { return $this->has('transaction_purpose'); }
}
