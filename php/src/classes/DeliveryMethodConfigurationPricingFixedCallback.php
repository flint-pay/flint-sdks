<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $delivery_rate_callback_id
 * @property-read ?string $delivery_rate_callback_revision_id
 * @property-read array<array-key, DeliveryMethodConfigurationPricingFixedCallbackMaximumFeeCurrencyOptionsValue> $maximum_fee_currency_options
 * @property-read array<array-key, DeliveryMethodConfigurationPricingFixedCallbackMinimumFeeCurrencyOptionsValue> $minimum_fee_currency_options
 * @property-read ?bool $preview_enabled
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingFixedCallback extends Model {
    /** @param array{'delivery_rate_callback_id'?: string, 'delivery_rate_callback_revision_id'?: string, 'maximum_fee_currency_options': \stdClass, 'minimum_fee_currency_options': \stdClass, 'preview_enabled'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingFixedCallback')); }
    /** delivery_rate_callback_id
     * @return ?string
     */
    public function getDeliveryRateCallbackId(): ?string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** delivery_rate_callback_revision_id
     * @return ?string
     */
    public function getDeliveryRateCallbackRevisionId(): ?string { return $this->get('delivery_rate_callback_revision_id'); }
    public function hasDeliveryRateCallbackRevisionId(): bool { return $this->has('delivery_rate_callback_revision_id'); }
    /** Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. * (Value): {@see DeliveryMethodConfigurationPricingFixedCallbackMaximumFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, DeliveryMethodConfigurationPricingFixedCallbackMaximumFeeCurrencyOptionsValue>
     */
    public function getMaximumFeeCurrencyOptions(): array { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. * (Value): {@see DeliveryMethodConfigurationPricingFixedCallbackMinimumFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, DeliveryMethodConfigurationPricingFixedCallbackMinimumFeeCurrencyOptionsValue>
     */
    public function getMinimumFeeCurrencyOptions(): array { return $this->get('minimum_fee_currency_options'); }
    public function hasMinimumFeeCurrencyOptions(): bool { return $this->has('minimum_fee_currency_options'); }
    /** preview_enabled
     * @return ?bool
     */
    public function getPreviewEnabled(): ?bool { return $this->get('preview_enabled'); }
    public function hasPreviewEnabled(): bool { return $this->has('preview_enabled'); }
}
