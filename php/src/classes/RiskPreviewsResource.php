<?php
declare(strict_types=1);
namespace Flint;
final class RiskPreviewsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Validates a draft rule, or an existing rule by risk_rule_id, without saving anything. An invalid rule has is_valid: false and its problems in issues. The warnings array says how the change would affect evaluation. Requires risk.read. Rule content issues return 200 with is_valid false, every issue in order, analysis null, and empty warnings. Valid rules return analysis and any warnings. When risk_rule_id is omitted, action and predicate are required. Malformed requests return 400; a missing risk_rule_id resource returns 404. Proposing action or predicate changes to a system rule returns 409 ACTION_NOT_ALLOWED with reason managed_externally. List reference issues are included at the list_alias path. A new rule at the active-rule limit receives a risk_rule_limit_reached warning.
     * @param array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return RiskPreview
     */
    public function create(array|Model $params, ?RequestOptions $options = null): RiskPreview { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'Expected associative params', 'not_sent'); if (true) $input['body'] = (object) $rest; return SdkResponse::payload($this->runtime->request('createRiskPreview', (new RiskPreviewsCreateInput($input))->toInputArray(), $options), ['data']); }
    /** @return SdkResponse<RiskPreviewsCreateResponse200> */
    public function createWithResponse(array|Model $params, ?RequestOptions $options = null): SdkResponse { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'Expected associative params', 'not_sent'); if (true) $input['body'] = (object) $rest; $result = $this->runtime->request('createRiskPreview', (new RiskPreviewsCreateInput($input))->toInputArray(), $options); return new SdkResponse($result->data, $result->meta, $result->raw); }
}
