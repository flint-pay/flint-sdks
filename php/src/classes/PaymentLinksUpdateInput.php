<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_link_id
 * @property-read array{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: int, 'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string|null, 'donation_max_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_min_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'image'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'inactive_message'?: string|null, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'sales_end_at'?: string|\DateTimeInterface|null, 'status'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinksUpdateInput extends Model {
    /** @param array{'payment_link_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: int, 'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string|null, 'donation_max_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_min_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'image'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'inactive_message'?: string|null, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'sales_end_at'?: string|\DateTimeInterface|null, 'status'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinksUpdateInput')); }
    /** Flint payment link ID. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
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
    /** The request body for: Update payment link.
     * @return array{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: int, 'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string|null, 'donation_max_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_min_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'image'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'inactive_message'?: string|null, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'sales_end_at'?: string|\DateTimeInterface|null, 'status'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
