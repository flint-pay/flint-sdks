<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $return_resolution_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerPayBalanceActionOptionsInput extends Model {
    /** @param array{'return_resolution_ids': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPayBalanceActionOptionsInput')); }
    /** Payable resolutions in creation order. Read each amount with GET /v1/me/return-resolutions/{return_resolution_id}, then create its checkout session with POST /v1/me/return-resolutions/{return_resolution_id}/checkout-sessions. minItems: 1. [] (Value): string.
     * @return list<string>
     * @throws SdkError When return_resolution_ids is omitted; use hasReturnResolutionIds() or valueOrDefault().
     */
    public function getReturnResolutionIds(): array { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
}
