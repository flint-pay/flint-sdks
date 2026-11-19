<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPreviewsCreateParams extends Model {
    /** @param array{'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'subscription_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'mode': string, 'subscription': CreateSubscriptionRequestInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'delivery_method': UpdateDeliveryMethodRequestInput|array<array-key, mixed>|\stdClass, 'delivery_method_id': string, 'mode': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'delivery'?: SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int, 'line_items'?: list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'subscription_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'billing_interval'?: string, 'billing_interval_count'?: int, 'billing_starts': string, 'line_items'?: list<SubscriptionPlanChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'subscription_id': string, 'subscription_plan_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'billing_starts': string, 'expected_version'?: int, 'line_items': list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'subscription_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'first_cycle'?: int, 'mode': string, 'promotion': PromotionRefRequestInput|array<array-key, mixed>|\stdClass, 'replace_promotion_id'?: string, 'subscription_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewsCreateParams')); }
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
