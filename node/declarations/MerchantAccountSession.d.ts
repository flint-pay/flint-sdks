
import type { MerchantAccountSessionClientSession } from './MerchantAccountSessionClientSession.js';
import type { MerchantAccountSessionEffectivePolicy } from './MerchantAccountSessionEffectivePolicy.js';
import type { OnboardingRequirements } from './OnboardingRequirements.js';

export type MerchantAccountSession = { /** Browser initialization data required to mount embedded account-management components. These instructions are not merchant account resource state. */ "client_session": MerchantAccountSessionClientSession; /** minItems: 1. */ "components": Array<"account_onboarding" | "account_management" | "payouts" | "balances" | "tax_documents" | "notification_banner" | (string & {})>; "effective_policy": MerchantAccountSessionEffectivePolicy; /** Signed Flint token to exchange at POST /v1/merchant-account-sessions/refresh. Each successful refresh rotates this token. The caller must still authenticate and authorize the human using the session. */ "launch_token": string; /** Expiry of launch_token in UTC. After expiry, create a new merchant account session. Format: date-time. */ "launch_token_expires_at": string; "requirements": OnboardingRequirements; };
