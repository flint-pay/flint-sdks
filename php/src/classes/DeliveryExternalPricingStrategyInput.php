<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_rate_callback_id
 * @property-read string $delivery_rate_callback_revision_id
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $maximum_fee_currency_options
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $minimum_fee_currency_options
 * @property-read bool $preview_enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryExternalPricingStrategyInput extends Model {
    /** @param array{'delivery_rate_callback_id'?: string, 'delivery_rate_callback_revision_id'?: string, 'maximum_fee_currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'minimum_fee_currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'preview_enabled'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryExternalPricingStrategyInput')); }
    /** @return string
     * @throws SdkError When delivery_rate_callback_id is omitted; use hasDeliveryRateCallbackId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** @return string
     * @throws SdkError When delivery_rate_callback_revision_id is omitted; use hasDeliveryRateCallbackRevisionId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackRevisionId(): string { return $this->get('delivery_rate_callback_revision_id'); }
    public function hasDeliveryRateCallbackRevisionId(): bool { return $this->has('delivery_rate_callback_revision_id'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When maximum_fee_currency_options is omitted; use hasMaximumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMaximumFeeCurrencyOptions(): array|object { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When minimum_fee_currency_options is omitted; use hasMinimumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMinimumFeeCurrencyOptions(): array|object { return $this->get('minimum_fee_currency_options'); }
    public function hasMinimumFeeCurrencyOptions(): bool { return $this->has('minimum_fee_currency_options'); }
    /** @return bool
     * @throws SdkError When preview_enabled is omitted; use hasPreviewEnabled() or valueOrDefault().
     */
    public function getPreviewEnabled(): bool { return $this->get('preview_enabled'); }
    public function hasPreviewEnabled(): bool { return $this->has('preview_enabled'); }
}
