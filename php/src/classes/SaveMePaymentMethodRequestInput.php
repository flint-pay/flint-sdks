<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SaveMePaymentMethodRequestInput extends Model {
    /** @param array{'type'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SaveMePaymentMethodRequestInput')); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
