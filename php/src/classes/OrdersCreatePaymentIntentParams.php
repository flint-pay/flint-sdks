<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $capture_method
 * @property-read string $external_reference_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read list<string> $payment_options
 * @property-read string $payment_return_url
 * @property-read OrderPaymentSourceSelectionInput|array<array-key, mixed>|\stdClass $payment_source_selection
 * @property-read PlatformFeeRequestInput|array<array-key, mixed>|\stdClass $platform_fee
 * @property-read bool $request_overcapture
 * @property-read list<PaymentSplitRequestInput|array<array-key, mixed>|\stdClass> $splits
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersCreatePaymentIntentParams extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'external_reference_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'payment_options'?: list<string>, 'payment_return_url'?: string, 'payment_source_selection'?: OrderPaymentSourceSelectionInput|array<array-key, mixed>|\stdClass, 'platform_fee'?: PlatformFeeRequestInput|array<array-key, mixed>|\stdClass, 'request_overcapture'?: bool, 'splits'?: list<PaymentSplitRequestInput|array<array-key, mixed>|\stdClass>, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersCreatePaymentIntentParams')); }
    /** Amount to collect toward the order, in the order currency. Omit it to collect the whole remaining balance: the amount still outstanding minus what the order's other open payments hold, meaning payments in requires_payment_method, requires_confirmation, requires_action, processing, or requires_capture. For a payment started from an invoice's checkout, the outstanding amount is the invoice's outstanding_money. A sent amount must use the order currency, otherwise the request fails with INVALID_REQUEST and NOT_ALLOWED on amount_money.currency. An amount above the remaining balance fails with LIMIT_EXCEEDED and maximum_money, and so does any amount when open payments already hold the whole balance, with a maximum of zero. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** automatic collects the payment when it is confirmed. manual places a hold at confirmation that you capture or cancel later. Defaults to automatic. Value enum: "automatic", "manual".
     * @return string
     * @throws SdkError When capture_method is omitted; use hasCaptureMethod() or valueOrDefault().
     */
    public function getCaptureMethod(): string { return $this->get('capture_method'); }
    public function hasCaptureMethod(): bool { return $this->has('capture_method'); }
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
    /** Payment options the buyer can use for this payment. Name at least one. Omit it, and payment_source_selection, to offer card where your payment option settings and the order allow it; a checkout credential uses its checkout session's options instead. Affirm is offered only when named here. card_present must be the only option; confirm it with a reader credential. payment_return_url is required with affirm and not accepted with card_present. Can't be combined with payment_source_selection: sending both fails with INVALID_REQUEST and NOT_ALLOWED. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
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
    /** Offer the card payment source, and choose which digital wallets appear with it, as an alternative to payment_options. Sending card with no digital_wallets offers card alone; apple_pay and google_pay add those wallets. Can't be combined with payment_options. If nothing in the selection is available for the order, the request fails with PAYMENT_OPTION_UNAVAILABLE. The payment source options you choose when creating an order payment intent.
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
    /** Let one capture collect more than the authorization where the card network allows it, for example the final bill plus a tip. Needs capture_method manual and payment_options limited to card, apple_pay, google_pay or card_present; otherwise INVALID_REQUEST with NOT_ALLOWED on request_overcapture. On an order, the bill can't exceed this payment's share of the order, so an overcapture adds a tip. Card networks allow overcapture only where the final amount isn't known at authorization, such as tips and services, and you're responsible for following their rules. Default: false.
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
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
