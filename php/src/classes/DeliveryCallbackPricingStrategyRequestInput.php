<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_rate_callback_id
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $maximum_amount
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $minimum_amount
 * @property-read bool $preview_enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCallbackPricingStrategyRequestInput extends Model {
    /** @param array{'delivery_rate_callback_id': string, 'maximum_amount'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'minimum_amount'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'preview_enabled'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCallbackPricingStrategyRequestInput')); }
    /** @return string
     * @throws SdkError When delivery_rate_callback_id is omitted; use hasDeliveryRateCallbackId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When maximum_amount is omitted; use hasMaximumAmount() or valueOrDefault().
     */
    public function getMaximumAmount(): array|object { return $this->get('maximum_amount'); }
    public function hasMaximumAmount(): bool { return $this->has('maximum_amount'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When minimum_amount is omitted; use hasMinimumAmount() or valueOrDefault().
     */
    public function getMinimumAmount(): array|object { return $this->get('minimum_amount'); }
    public function hasMinimumAmount(): bool { return $this->has('minimum_amount'); }
    /** @return bool
     * @throws SdkError When preview_enabled is omitted; use hasPreviewEnabled() or valueOrDefault().
     */
    public function getPreviewEnabled(): bool { return $this->get('preview_enabled'); }
    public function hasPreviewEnabled(): bool { return $this->has('preview_enabled'); }
}
