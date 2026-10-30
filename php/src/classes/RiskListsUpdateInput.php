<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $risk_list_id
 * @property-read array{'expected_version'?: int, 'name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskListsUpdateInput extends Model {
    /** @param array{'risk_list_id': string, 'body': array{'expected_version'?: int, 'name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListsUpdateInput')); }
    /** Flint risk list ID. Example: "rl_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When risk_list_id is omitted; use hasRiskListId() or valueOrDefault().
     */
    public function getRiskListId(): string { return $this->get('risk_list_id'); }
    public function hasRiskListId(): bool { return $this->has('risk_list_id'); }
    /** The request body for: Update a risk list.
     * @return array{'expected_version'?: int, 'name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
