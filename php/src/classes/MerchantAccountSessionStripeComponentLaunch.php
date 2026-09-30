<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $component
 * @property-read MerchantAccountSessionStripeComponentProps $component_props
 * Presence-aware response; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeComponentLaunch extends Model {
    /** @param array{'component': string, 'component_props': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeComponentLaunch')); }
    /** @return string
     * @throws SdkError When component is omitted; use hasComponent() or valueOrDefault().
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** @return MerchantAccountSessionStripeComponentProps
     * @throws SdkError When component_props is omitted; use hasComponentProps() or valueOrDefault().
     */
    public function getComponentProps(): MerchantAccountSessionStripeComponentProps { return $this->get('component_props'); }
    public function hasComponentProps(): bool { return $this->has('component_props'); }
}
