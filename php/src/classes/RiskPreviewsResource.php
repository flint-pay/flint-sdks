<?php
declare(strict_types=1);
namespace Flint;
final class RiskPreviewsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Validates a rule without saving anything. Send mode inline with action and predicate to check a draft; add risk_rule_id to check them as an edit to that rule. Send mode stored_rule with risk_rule_id, and no action or predicate, to check the saved rule as it is. Requires risk.read. Rule content issues return 200 with is_valid false, every issue in order, analysis null, and empty warnings. A valid rule returns analysis and any warnings about how the change would affect evaluation. List reference issues are reported at the list_alias path. A new rule at the active-rule limit gets a risk_rule_limit_reached warning. A malformed request returns 400, and an unknown risk_rule_id returns 404. Proposing a different action or predicate for a Flint default rule returns 409 ACTION_NOT_ALLOWED with reason managed_externally.
     * @param RiskPreviewsCreateParams|array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return RiskPreview
     */
    public function create(array|Model $params, ?RequestOptions $options = null): RiskPreview { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (true) $input['body'] = (object) $rest; return Runtime::responsePayload($this->runtime->request('createRiskPreview', $input, $options), ['data']); }
}
