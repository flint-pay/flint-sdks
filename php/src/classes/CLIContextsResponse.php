<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ContextSummary> $contexts
 * @property-read string $oauth_session_id
 * Presence-aware response; omitted optional fields return null. */
final class CLIContextsResponse extends Model {
    /** @param array{'contexts': list<mixed>, 'oauth_session_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CLIContextsResponse')); }
    /** maxItems: 100. [] (Value): {@see ContextSummary}. A context the CLI is authorized to use: a sandbox or live account, with its ID, merchant ID, and name.
     * @return list<ContextSummary>
     */
    public function getContexts(): array { return $this->get('contexts'); }
    public function hasContexts(): bool { return $this->has('contexts'); }
    /** oauth_session_id
     * @return string
     */
    public function getOauthSessionId(): string { return $this->get('oauth_session_id'); }
    public function hasOauthSessionId(): bool { return $this->has('oauth_session_id'); }
}
