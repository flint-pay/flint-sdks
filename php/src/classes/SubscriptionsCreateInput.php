<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'billing_anchor_day'?: int, 'billing_schedule'?: mixed, 'billing_start': mixed, 'customer_id': string, 'delivery'?: mixed, 'end_after'?: array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone'?: string, 'type': string}|object|null, 'external_reference_id'?: string, 'gift_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null, 'metadata'?: mixed, 'payment_method_id'?: string, 'promotions'?: list<mixed>, 'prorate_first_period'?: bool, 'service_location'?: mixed, 'tax'?: mixed, 'terms': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionsCreateInput extends Model {
    /** @param array{'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'billing_anchor_day'?: int, 'billing_schedule'?: mixed, 'billing_start': mixed, 'customer_id': string, 'delivery'?: mixed, 'end_after'?: array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone'?: string, 'type': string}|object|null, 'external_reference_id'?: string, 'gift_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null, 'metadata'?: mixed, 'payment_method_id'?: string, 'promotions'?: list<mixed>, 'prorate_first_period'?: bool, 'service_location'?: mixed, 'tax'?: mixed, 'terms': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionsCreateInput')); }
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
    /** The request body for: Create subscription. Example: {"billing_anchor_day":15,"billing_schedule":{"owner":"flint"},"billing_start":{"type":"immediate"},"customer_id":"cus_01KEZF7C003ACYXT6Q5EQZ78EE","metadata":{"source":"api"},"payment_method_id":"pm_01KEZF7C00WX8CKEVFDMRMYMBM","terms":{"subscription_plan_id":"plan_01KEZF7C00S177Q3KK6BKXGXV7","type":"subscription_plan"}}.
     * @return array{'billing_anchor_day'?: int, 'billing_schedule'?: mixed, 'billing_start': mixed, 'customer_id': string, 'delivery'?: mixed, 'end_after'?: array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone'?: string, 'type': string}|object|null, 'external_reference_id'?: string, 'gift_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null, 'metadata'?: mixed, 'payment_method_id'?: string, 'promotions'?: list<mixed>, 'prorate_first_period'?: bool, 'service_location'?: mixed, 'tax'?: mixed, 'terms': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
