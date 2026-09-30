<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $component
 * @property-read MerchantAccountSessionStripeComponentPropsInput|array<array-key, mixed>|\stdClass $component_props
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeComponentLaunchInput extends Model {
    /** @param array{'component': string, 'component_props': MerchantAccountSessionStripeComponentPropsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeComponentLaunchInput')); }
    /** @return string
     * @throws SdkError When component is omitted; use hasComponent() or valueOrDefault().
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** @return MerchantAccountSessionStripeComponentPropsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When component_props is omitted; use hasComponentProps() or valueOrDefault().
     */
    public function getComponentProps(): mixed { return $this->get('component_props'); }
    public function hasComponentProps(): bool { return $this->has('component_props'); }
}
