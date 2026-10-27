<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $return_resolution_ids
 * Presence-aware response; omitted optional fields return null. */
final class BuyerPayBalanceActionOptions extends Model {
    /** @param array{'return_resolution_ids': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPayBalanceActionOptions')); }
    /** Shape $ (Value): Array of string. Payable resolutions in creation order. Read each amount with GET /v1/me/return-resolutions/{return_resolution_id}, then create its checkout session with POST /v1/me/return-resolutions/{return_resolution_id}/checkout-session. minItems: 1. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getReturnResolutionIds(): array { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
}
