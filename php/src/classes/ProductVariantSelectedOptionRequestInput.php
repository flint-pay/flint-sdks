<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_option_key
 * @property-read string $client_value_key
 * @property-read string $option_value_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductVariantSelectedOptionRequestInput extends Model {
    /** @param array{'client_option_key'?: string, 'client_value_key'?: string, 'option_value_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantSelectedOptionRequestInput')); }
    /** @return string
     * @throws SdkError When client_option_key is omitted; use hasClientOptionKey() or valueOrDefault().
     */
    public function getClientOptionKey(): string { return $this->get('client_option_key'); }
    public function hasClientOptionKey(): bool { return $this->has('client_option_key'); }
    /** @return string
     * @throws SdkError When client_value_key is omitted; use hasClientValueKey() or valueOrDefault().
     */
    public function getClientValueKey(): string { return $this->get('client_value_key'); }
    public function hasClientValueKey(): bool { return $this->has('client_value_key'); }
    /** @return string
     * @throws SdkError When option_value_id is omitted; use hasOptionValueId() or valueOrDefault().
     */
    public function getOptionValueId(): string { return $this->get('option_value_id'); }
    public function hasOptionValueId(): bool { return $this->has('option_value_id'); }
}
