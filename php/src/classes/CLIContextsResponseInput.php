<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ContextSummaryInput|array<array-key, mixed>|\stdClass> $contexts
 * @property-read string $oauth_session_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CLIContextsResponseInput extends Model {
    /** @param array{'contexts': list<ContextSummaryInput|array<array-key, mixed>|\stdClass>, 'oauth_session_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CLIContextsResponseInput')); }
    /** maxItems: 100. [] (Value): {@see ContextSummaryInput}. A context the CLI is authorized to use: a sandbox or live account, with its ID, merchant ID, and name.
     * @return list<ContextSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When contexts is omitted; use hasContexts() or valueOrDefault().
     */
    public function getContexts(): array { return $this->get('contexts'); }
    public function hasContexts(): bool { return $this->has('contexts'); }
    /** oauth_session_id
     * @return string
     * @throws SdkError When oauth_session_id is omitted; use hasOauthSessionId() or valueOrDefault().
     */
    public function getOauthSessionId(): string { return $this->get('oauth_session_id'); }
    public function hasOauthSessionId(): bool { return $this->has('oauth_session_id'); }
}
