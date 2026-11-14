<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOption> $billing_interval_options
 * @property-read ?int $contract_term_months
 * @property-read string $created_at
 * @property-read string $currency
 * @property-read string|null $delivery_interval
 * @property-read int|null $delivery_interval_count
 * @property-read list<SubscriptionDeliveryMethodCounts> $delivery_method_subscription_counts
 * @property-read bool $delivery_required
 * @property-read ?string $description
 * @property-read ?MoneyValue $early_termination_fee_money
 * @property-read SubscriptionEndAfterCycles|null $end_after
 * @property-read ?string $external_reference_id
 * @property-read bool $gifts_enabled
 * @property-read list<ImageAttachment> $images
 * @property-read ?InventoryRoutingSource $inventory_routing_source
 * @property-read list<SubscriptionPlanLineItemsItemVariant|SubscriptionPlanLineItemsItemBundle|SubscriptionPlanLineItemsItemCustom|\stdClass>|null $line_items
 * @property-read string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read list<SubscriptionPlanChangeOption> $plan_change_options
 * @property-read list<int> $quantity_options
 * @property-read ?MoneyValue $setup_fee_money
 * @property-read string $status
 * @property-read list<string> $subscription_delivery_method_ids
 * @property-read string $subscription_plan_id
 * @property-read ?int $trial_period_days
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPlan extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options': list<mixed>, 'contract_term_months'?: int, 'created_at': string, 'currency': string, 'delivery_interval': string|null, 'delivery_interval_count': int|null, 'delivery_method_subscription_counts': list<mixed>, 'delivery_required': bool, 'description'?: string, 'early_termination_fee_money'?: mixed, 'end_after': mixed, 'external_reference_id'?: string, 'gifts_enabled': bool, 'images': list<mixed>, 'inventory_routing_source'?: mixed, 'line_items'?: list<mixed>, 'merchant_id': string, 'metadata'?: mixed, 'name': string, 'plan_change_options': list<mixed>, 'quantity_options': list<int>, 'setup_fee_money'?: mixed, 'status': string, 'subscription_delivery_method_ids': list<string>, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlan')); }
    /** Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Format: int32.
     * @return int
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: 12. uniqueItems: true. [] (Value): {@see SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery, and each option charges for all deliveries in its period. Without a delivery cadence there is one delivery per period, so every option bills the same line prices once per period. With a delivery cadence, a longer period bills more deliveries of the lines that ship; other lines bill once per period. For a different price per interval with no delivery cadence, create separate plans.
     * @return list<SubscriptionIntervalOption>
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout and records it on each new subscription (contract_start_at, contract_end_at). Flint does not stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     * @return ?int
     */
    public function getContractTermMonths(): ?int { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Delivery cadence. Null when no separate delivery cadence is set; one delivery is made per billing period. Every billing option must be a whole multiple in the same unit family (days/weeks or months/years), with 1 to 24 deliveries per period. Existing subscriptions keep their frozen cadence. Value enum: "daily", "weekly", "monthly", "yearly", null.
     * @return string|null
     */
    public function getDeliveryInterval(): string|null { return $this->get('delivery_interval'); }
    public function hasDeliveryInterval(): bool { return $this->has('delivery_interval'); }
    /** Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: int32. minimum: 1.
     * @return int|null
     */
    public function getDeliveryIntervalCount(): int|null { return $this->get('delivery_interval_count'); }
    public function hasDeliveryIntervalCount(): bool { return $this->has('delivery_interval_count'); }
    /**  [] (Value): {@see SubscriptionDeliveryMethodCounts}. Subscription counts by status for one delivery method.
     * @return list<SubscriptionDeliveryMethodCounts>
     */
    public function getDeliveryMethodSubscriptionCounts(): array { return $this->get('delivery_method_subscription_counts'); }
    public function hasDeliveryMethodSubscriptionCounts(): bool { return $this->has('delivery_method_subscription_counts'); }
    /** delivery_required
     * @return bool
     */
    public function getDeliveryRequired(): bool { return $this->get('delivery_required'); }
    public function hasDeliveryRequired(): bool { return $this->has('delivery_required'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it at checkout and records it on each new subscription, but never charges it. To collect it, charge the buyer yourself, for example with an order on their saved payment method. Requires contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getEarlyTerminationFeeMoney(): ?MoneyValue { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200. Send null for no automatic end. Existing subscriptions keep their recorded condition. Null when no default automatic end is set. anyOf[1] (Value): {@see SubscriptionEndAfterCycles}. A subscription automatic end measured by the total number of charged billing cycles. anyOf[2] (Value): null.
     * @return SubscriptionEndAfterCycles|null
     */
    public function getEndAfter(): SubscriptionEndAfterCycles|null { return $this->get('end_after'); }
    public function hasEndAfter(): bool { return $this->has('end_after'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Whether checkout buyers can name a gift recipient. Checkout sessions freeze it when they are created. Defaults to false. You can set gift_recipient on a subscription through the API either way.
     * @return bool
     */
    public function getGiftsEnabled(): bool { return $this->get('gifts_enabled'); }
    public function hasGiftsEnabled(): bool { return $this->has('gifts_enabled'); }
    /**  [] (Value): {@see ImageAttachment}. An image attached to a resource, with its display properties and attachment metadata.
     * @return list<ImageAttachment>
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Where tracked demand from this plan is routed. New subscriptions and payment links for the plan copy it. Absent when the plan has no source. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.
     * @return ?InventoryRoutingSource
     */
    public function getInventoryRoutingSource(): ?InventoryRoutingSource { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /**  [] (Value): {@see SubscriptionPlanLineItem}. A line item on a subscription plan.
     * @return list<SubscriptionPlanLineItemsItemVariant|SubscriptionPlanLineItemsItemBundle|SubscriptionPlanLineItemsItemCustom|\stdClass>|null
     */
    public function getLineItems(): ?array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** ID of the merchant this resource belongs to.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Plans subscribers may switch to, in display order, with the billing timing for each target. Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces them and requires expected_version. Send [] to clear. Null is invalid. maxItems: 25. [] (Value): {@see SubscriptionPlanChangeOption}. A target plan subscribers may switch to and the billing timing for that change.
     * @return list<SubscriptionPlanChangeOption>
     */
    public function getPlanChangeOptions(): array { return $this->get('plan_change_options'); }
    public function hasPlanChangeOptions(): bool { return $this->has('plan_change_options'); }
    /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100.
     * @return list<int>
     */
    public function getQuantityOptions(): array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getSetupFeeMoney(): ?MoneyValue { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /**  [] (Value): string.
     * @return list<string>
     */
    public function getSubscriptionDeliveryMethodIds(): array { return $this->get('subscription_delivery_method_ids'); }
    public function hasSubscriptionDeliveryMethodIds(): bool { return $this->has('subscription_delivery_method_ids'); }
    /** Unique identifier for this subscription plan, prefixed `plan_`.
     * @return string
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Format: int32.
     * @return ?int
     */
    public function getTrialPeriodDays(): ?int { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: uint64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
