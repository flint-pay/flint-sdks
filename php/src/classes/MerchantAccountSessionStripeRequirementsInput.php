<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $only
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeRequirementsInput extends Model {
    /** @param array{'only': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeRequirementsInput')); }
    /** @return list<string>
     * @throws SdkError When only is omitted; use hasOnly() or valueOrDefault().
     */
    public function getOnly(): array { return $this->get('only'); }
    public function hasOnly(): bool { return $this->has('only'); }
}
