<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_window_id
 * @property-read string $instructions
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionInstructionsRequestInput extends Model {
    /** @param array{'delivery_window_id'?: string, 'instructions'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionInstructionsRequestInput')); }
    /** @return string
     * @throws SdkError When delivery_window_id is omitted; use hasDeliveryWindowId() or valueOrDefault().
     */
    public function getDeliveryWindowId(): string { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
}
