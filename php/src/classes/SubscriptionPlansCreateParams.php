<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionRequestInput|array<array-key, mixed>|\stdClass> $billing_interval_options
 * @property-read int $contract_term_months
 * @property-read string $currency
 * @property-read string|null $delivery_interval
 * @property-read int|null $delivery_interval_count
 * @property-read string $description
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $early_termination_fee_money
 * @property-read array{'cycle_count': int, 'type': string}|object|null $end_after
 * @property-read string $external_reference_id
 * @property-read bool $gifts_enabled
 * @property-read list<ImageRequestInput|array<array-key, mixed>|\stdClass> $images
 * @property-read InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read list<SubscriptionPlanLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read list<SubscriptionPlanChangeOptionRequestInput|array<array-key, mixed>|\stdClass> $plan_change_options
 * @property-read list<int> $quantity_options
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $setup_fee_money
 * @property-read string $status
 * @property-read list<string> $subscription_delivery_method_ids
 * @property-read int $trial_period_days
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPlansCreateParams extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionRequestInput|array<array-key, mixed>|\stdClass>, 'contract_term_months'?: int, 'currency': string, 'delivery_interval'?: string|null, 'delivery_interval_count'?: int|null, 'description'?: string, 'early_termination_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'end_after'?: array{'cycle_count': int, 'type': string}|object|null, 'external_reference_id'?: string, 'gifts_enabled'?: bool, 'images'?: list<ImageRequestInput|array<array-key, mixed>|\stdClass>, 'inventory_routing_source'?: InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'line_items': list<SubscriptionPlanLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'plan_change_options'?: list<SubscriptionPlanChangeOptionRequestInput|array<array-key, mixed>|\stdClass>, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'trial_period_days'?: int, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlansCreateParams')); }
    /** Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Offered billing interval and count pairs, including the plan's default pair. Line prices are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: 12. uniqueItems: true. [] (Value): {@see SubscriptionIntervalOptionRequestInput}. A billing cadence offered by a subscription plan or offer. Every option bills the same line prices once per period; prices are not scaled by the interval. For a different price per interval, create separate plans.
     * @return list<SubscriptionIntervalOptionRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout and records it on each new subscription (contract_start_at, contract_end_at). Flint does not stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     * @return int
     * @throws SdkError When contract_term_months is omitted; use hasContractTermMonths() or valueOrDefault().
     */
    public function getContractTermMonths(): int { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Delivery cadence, set together with delivery_interval_count. Null when no separate delivery cadence is set; one delivery is made per billing period. Each billing option must be a whole multiple in the same unit family (days/weeks or months/years), with 1 to 24 deliveries per period. Existing subscriptions keep their frozen cadence. Omit both fields on PATCH to keep the cadence; send both as null to clear it. Value enum: "daily", "weekly", "monthly", "yearly", null.
     * @return string|null
     * @throws SdkError When delivery_interval is omitted; use hasDeliveryInterval() or valueOrDefault().
     */
    public function getDeliveryInterval(): string|null { return $this->get('delivery_interval'); }
    public function hasDeliveryInterval(): bool { return $this->has('delivery_interval'); }
    /** Positive number of delivery intervals between deliveries. Set or clear together with delivery_interval. Null when no separate delivery cadence is set; one delivery is made per billing period. Format: int32. minimum: 1.
     * @return int|null
     * @throws SdkError When delivery_interval_count is omitted; use hasDeliveryIntervalCount() or valueOrDefault().
     */
    public function getDeliveryIntervalCount(): int|null { return $this->get('delivery_interval_count'); }
    public function hasDeliveryIntervalCount(): bool { return $this->has('delivery_interval_count'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it at checkout and records it on each new subscription, but never charges it. To collect it, charge the buyer yourself, for example with an order on their saved payment method. Requires contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When early_termination_fee_money is omitted; use hasEarlyTerminationFeeMoney() or valueOrDefault().
     */
    public function getEarlyTerminationFeeMoney(): mixed { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200. Send null for no automatic end. Existing subscriptions keep their recorded condition. Null when no default automatic end is set. anyOf[1] (Value): {@see SubscriptionEndAfterCyclesRequestInput}. A subscription automatic end measured by the total number of charged billing cycles. anyOf[2] (Value): null.
     * @return array{'cycle_count': int, 'type': string}|object|null
     * @throws SdkError When end_after is omitted; use hasEndAfter() or valueOrDefault().
     */
    public function getEndAfter(): mixed { return $this->get('end_after'); }
    public function hasEndAfter(): bool { return $this->has('end_after'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Whether checkout buyers can name a gift recipient. Checkout sessions freeze it when they are created. Defaults to false. You can set gift_recipient on a subscription through the API either way.
     * @return bool
     * @throws SdkError When gifts_enabled is omitted; use hasGiftsEnabled() or valueOrDefault().
     */
    public function getGiftsEnabled(): bool { return $this->get('gifts_enabled'); }
    public function hasGiftsEnabled(): bool { return $this->has('gifts_enabled'); }
    /** The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8. [] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference.
     * @return list<ImageRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Where tracked demand from this plan is routed: a fixed Location, an allocation policy, or an immutable policy revision. Required when any line item tracks inventory. New subscriptions and payment links for the plan copy it, unless the payment link sends its own. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * @return InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** minItems: 1. [] (Value): {@see SubscriptionPlanLineItemRequestInput}. A line item to put on a new subscription plan, from a variant, a bundle, or a custom name and price.
     * @return list<SubscriptionPlanLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Plans subscribers may switch to, in display order, with the billing timing for each target. Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces them and requires expected_version. Send [] to clear. Null is invalid. maxItems: 25. [] (Value): {@see SubscriptionPlanChangeOptionRequestInput}. A target plan subscribers may switch to and the billing timing for that change.
     * @return list<SubscriptionPlanChangeOptionRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When plan_change_options is omitted; use hasPlanChangeOptions() or valueOrDefault().
     */
    public function getPlanChangeOptions(): array { return $this->get('plan_change_options'); }
    public function hasPlanChangeOptions(): bool { return $this->has('plan_change_options'); }
    /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100.
     * @return list<int>
     * @throws SdkError When quantity_options is omitted; use hasQuantityOptions() or valueOrDefault().
     */
    public function getQuantityOptions(): array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_fee_money is omitted; use hasSetupFeeMoney() or valueOrDefault().
     */
    public function getSetupFeeMoney(): mixed { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /**  [] (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return list<string>
     * @throws SdkError When subscription_delivery_method_ids is omitted; use hasSubscriptionDeliveryMethodIds() or valueOrDefault().
     */
    public function getSubscriptionDeliveryMethodIds(): array { return $this->get('subscription_delivery_method_ids'); }
    public function hasSubscriptionDeliveryMethodIds(): bool { return $this->has('subscription_delivery_method_ids'); }
    /** Days of free trial before the first charge, from 0 to 365; 0 means no trial. Not allowed on plans with lines that ship. Format: int32. minimum: 0. maximum: 365.
     * @return int
     * @throws SdkError When trial_period_days is omitted; use hasTrialPeriodDays() or valueOrDefault().
     */
    public function getTrialPeriodDays(): int { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
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
