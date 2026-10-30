<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass> $billing_interval_options
 * @property-read string $external_reference_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read list<string> $product_ids
 * @property-read string|null $promotion_id
 * @property-read string $status
 * @property-read list<string> $subscription_delivery_method_ids
 * @property-read list<string> $variant_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionOffersCreateParams extends Model {
    /** @param array{'billing_interval_options': list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'external_reference_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'product_ids'?: list<string>, 'promotion_id'?: string|null, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'variant_ids'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionOffersCreateParams')); }
    /** minItems: 1. maxItems: 12. uniqueItems: true. [] (Value): {@see SubscriptionIntervalOptionInput}. A billing interval, such as every 2 months, offered by a subscription plan.
     * @return list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
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
    /** minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Catalog targets for new signups. At least one product or variant is required. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When product_ids is omitted; use hasProductIds() or valueOrDefault().
     */
    public function getProductIds(): array { return $this->get('product_ids'); }
    public function hasProductIds(): bool { return $this->has('product_ids'); }
    /** An active promotion with forever recurrence. On PATCH, null removes the discount for new signups; omission keeps it. minLength: 1. Example: "promo_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string|null
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Delivery methods offered at signup. An empty array uses the store's checkout defaults. Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When subscription_delivery_method_ids is omitted; use hasSubscriptionDeliveryMethodIds() or valueOrDefault().
     */
    public function getSubscriptionDeliveryMethodIds(): array { return $this->get('subscription_delivery_method_ids'); }
    public function hasSubscriptionDeliveryMethodIds(): bool { return $this->has('subscription_delivery_method_ids'); }
    /** Catalog targets for new signups. At least one product or variant is required. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When variant_ids is omitted; use hasVariantIds() or valueOrDefault().
     */
    public function getVariantIds(): array { return $this->get('variant_ids'); }
    public function hasVariantIds(): bool { return $this->has('variant_ids'); }
}
