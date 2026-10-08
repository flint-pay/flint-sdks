<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<array{'billing_interval': string, 'billing_interval_count': int}|object> $billing_interval_options
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read list<string> $product_ids
 * @property-read string|null $promotion_id
 * @property-read string $status
 * @property-read list<string> $subscription_delivery_method_ids
 * @property-read list<string> $variant_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionOfferRequestInput extends Model {
    /** @param array{'billing_interval_options': list<array{'billing_interval': string, 'billing_interval_count': int}|object>, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'product_ids'?: list<string>, 'promotion_id'?: string|null, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'variant_ids'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionOfferRequestInput')); }
    /** @return list<array{'billing_interval': string, 'billing_interval_count': int}|object>
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return list<string>
     * @throws SdkError When product_ids is omitted; use hasProductIds() or valueOrDefault().
     */
    public function getProductIds(): array { return $this->get('product_ids'); }
    public function hasProductIds(): bool { return $this->has('product_ids'); }
    /** @return string|null
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return list<string>
     * @throws SdkError When subscription_delivery_method_ids is omitted; use hasSubscriptionDeliveryMethodIds() or valueOrDefault().
     */
    public function getSubscriptionDeliveryMethodIds(): array { return $this->get('subscription_delivery_method_ids'); }
    public function hasSubscriptionDeliveryMethodIds(): bool { return $this->has('subscription_delivery_method_ids'); }
    /** @return list<string>
     * @throws SdkError When variant_ids is omitted; use hasVariantIds() or valueOrDefault().
     */
    public function getVariantIds(): array { return $this->get('variant_ids'); }
    public function hasVariantIds(): bool { return $this->has('variant_ids'); }
}
