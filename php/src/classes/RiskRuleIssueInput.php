<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $message
 * @property-read string $path
 * @property-read string $unavailable_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskRuleIssueInput extends Model {
    /** @param array{'code': string, 'message': string, 'path': string, 'unavailable_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRuleIssueInput')); }
    /** Extensible rule issue code. Accept new codes as they are added. Risk rules and previews share these issue codes; invalid rule writes use the standard error codes. Value enum: "invalid_predicate", "invalid_predicate_node", "invalid_predicate_group", "unknown_predicate_field", "unknown_attribute", "attribute_unavailable", "invalid_operator", "invalid_operand", "invalid_list_alias", "invalid_money", "invalid_rule_action", "rule_action_unavailable_at_stage", "list_not_found", "list_archived", "list_type_mismatch".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Description of the rule issue and how to correct it.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Public request field path, as used by error param: predicate for the root, predicate.all[0].attribute for a nested field, or action.
     * @return string
     * @throws SdkError When path is omitted; use hasPath() or valueOrDefault().
     */
    public function getPath(): string { return $this->get('path'); }
    public function hasPath(): bool { return $this->has('path'); }
    /** Why an attribute is unavailable. Present only for attribute_unavailable issues. Value enum: "risk_scoring_not_enabled", "ip_geolocation_not_enabled".
     * @return string
     * @throws SdkError When unavailable_reason is omitted; use hasUnavailableReason() or valueOrDefault().
     */
    public function getUnavailableReason(): string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
