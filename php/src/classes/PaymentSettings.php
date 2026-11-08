<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $statement_descriptor
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSettings extends Model {
    /** @param array{'statement_descriptor': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSettings')); }
    /** Static text shown on buyers' statements for new payments. `null` when the provider default is used. Changing it does not change past payments. Once this setting has been applied, changes made directly in the processor are overwritten by Flint's applied value.
     * @return string|null
     */
    public function getStatementDescriptor(): string|null { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
}
