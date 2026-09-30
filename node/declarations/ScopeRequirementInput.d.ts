


export type ScopeRequirementInput = { /** How the required scopes are evaluated. all requires every listed scope; any requires at least one listed scope. Example: "all". */ "mode": "all" | "any"; /** Canonical public scope names evaluated for this authorization decision. Example: ["developer.sandboxes.write","accounts.api_keys.write"]. */ "scopes": Array<string>; };
