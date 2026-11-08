<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'buyer_fields'?: mixed, 'custom_text'?: mixed, 'delivery_method_ids'?: list<string>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'legal'?: mixed, 'metadata'?: mixed, 'order_id': string, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'replace_checkout_session_id'?: string, 'surface'?: string, 'theme'?: mixed, 'tip'?: mixed, 'type': string}|object|array{'buyer_fields'?: mixed, 'custom_text'?: mixed, 'customer_id'?: string, 'delivery_method_ids'?: list<string>, 'discounts'?: list<mixed>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'legal'?: mixed, 'metadata'?: mixed, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'promotion_config'?: mixed, 'quick_pay_item': mixed, 'redirects'?: mixed, 'surface'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'type': string}|object|array{'buyer_fields'?: mixed, 'custom_text'?: mixed, 'customer_id'?: string, 'delivery_method_ids'?: list<string>, 'discounts'?: list<mixed>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'legal'?: mixed, 'metadata'?: mixed, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'subscription_plan_id': string, 'subscription_terms'?: mixed, 'surface'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'type': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsCreateInput extends Model {
    /** @param array{'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'buyer_fields'?: mixed, 'custom_text'?: mixed, 'delivery_method_ids'?: list<string>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'legal'?: mixed, 'metadata'?: mixed, 'order_id': string, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'replace_checkout_session_id'?: string, 'surface'?: string, 'theme'?: mixed, 'tip'?: mixed, 'type': string}|object|array{'buyer_fields'?: mixed, 'custom_text'?: mixed, 'customer_id'?: string, 'delivery_method_ids'?: list<string>, 'discounts'?: list<mixed>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'legal'?: mixed, 'metadata'?: mixed, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'promotion_config'?: mixed, 'quick_pay_item': mixed, 'redirects'?: mixed, 'surface'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'type': string}|object|array{'buyer_fields'?: mixed, 'custom_text'?: mixed, 'customer_id'?: string, 'delivery_method_ids'?: list<string>, 'discounts'?: list<mixed>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'legal'?: mixed, 'metadata'?: mixed, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'subscription_plan_id': string, 'subscription_terms'?: mixed, 'surface'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'type': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsCreateInput')); }
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
    /** The request body for: Create checkout session.
     * @return array{'buyer_fields'?: mixed, 'custom_text'?: mixed, 'delivery_method_ids'?: list<string>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'legal'?: mixed, 'metadata'?: mixed, 'order_id': string, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'replace_checkout_session_id'?: string, 'surface'?: string, 'theme'?: mixed, 'tip'?: mixed, 'type': string}|object|array{'buyer_fields'?: mixed, 'custom_text'?: mixed, 'customer_id'?: string, 'delivery_method_ids'?: list<string>, 'discounts'?: list<mixed>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'legal'?: mixed, 'metadata'?: mixed, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'promotion_config'?: mixed, 'quick_pay_item': mixed, 'redirects'?: mixed, 'surface'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'type': string}|object|array{'buyer_fields'?: mixed, 'custom_text'?: mixed, 'customer_id'?: string, 'delivery_method_ids'?: list<string>, 'discounts'?: list<mixed>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'legal'?: mixed, 'metadata'?: mixed, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'subscription_plan_id': string, 'subscription_terms'?: mixed, 'surface'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'type': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
