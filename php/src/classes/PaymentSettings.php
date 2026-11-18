<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $statement_descriptor
 * @property-read ?StatementDescriptorStatus $statement_descriptor_status
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSettings extends Model {
    /** @param array{'statement_descriptor': string|null, 'statement_descriptor_status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSettings')); }
    /** Static text shown on buyers' statements for new payments. `null` when the provider default is used. Changing it does not change past payments. Once this setting has been applied, changes made directly in the processor are overwritten by Flint's applied value.
     * @return string|null
     */
    public function getStatementDescriptor(): string|null { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Stripe's current decision, returned by GET /v1/settings and GET /v1/settings/effective. A successful save does not guarantee Stripe will accept the name. Stripe's current decision about the card statement name.
     * @return ?StatementDescriptorStatus
     */
    public function getStatementDescriptorStatus(): ?StatementDescriptorStatus { return $this->get('statement_descriptor_status'); }
    public function hasStatementDescriptorStatus(): bool { return $this->has('statement_descriptor_status'); }
}
