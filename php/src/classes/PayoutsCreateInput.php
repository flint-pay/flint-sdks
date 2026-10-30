<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'amount_money': mixed, 'balance_source_type'?: string, 'description'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'method'?: string, 'payout_destination_id'?: string, 'statement_descriptor'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutsCreateInput extends Model {
    /** @param array{'body': array{'amount_money': mixed, 'balance_source_type'?: string, 'description'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'method'?: string, 'payout_destination_id'?: string, 'statement_descriptor'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutsCreateInput')); }
    /** The request body for: Create a payout.
     * @return array{'amount_money': mixed, 'balance_source_type'?: string, 'description'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'method'?: string, 'payout_destination_id'?: string, 'statement_descriptor'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
