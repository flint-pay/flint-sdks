<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $page_origin
 * @property-read string $payment_return_url
 * @property-read CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string $return_url
 * @property-read string $surface
 * Presence-aware input; omitted fields throw when accessed. */
final class GetOrCreateReturnResolutionCheckoutSessionRequestInput extends Model {
    /** @param array{'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass, 'return_url'?: string, 'surface'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GetOrCreateReturnResolutionCheckoutSessionRequestInput')); }
    /** Origin of the page where you render this embedded checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When page_origin is omitted; use hasPageOrigin() or valueOrDefault().
     */
    public function getPageOrigin(): string { return $this->get('page_origin'); }
    public function hasPageOrigin(): bool { return $this->has('page_origin'); }
    /** Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When payment_return_url is omitted; use hasPaymentReturnUrl() or valueOrDefault().
     */
    public function getPaymentReturnUrl(): string { return $this->get('payment_return_url'); }
    public function hasPaymentReturnUrl(): bool { return $this->has('payment_return_url'); }
    /** Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     * @return CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Where the checkout sends the buyer after paying, such as the Return's page in the customer account. Limited to 2048 characters (Unicode code points) before trimming surrounding whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the host of customer_account.merchant_account_url when the merchant hosts the account. In test mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout or payment_return_url on embedded checkout; keep them consistent when sending both. Format: uri. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
    /** Defaults to hosted. The same surface reuses the open checkout. A different surface replaces it only while no payment is in progress; otherwise the request returns 409 ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted", "embedded".
     * @return string
     * @throws SdkError When surface is omitted; use hasSurface() or valueOrDefault().
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
}
