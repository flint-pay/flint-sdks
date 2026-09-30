


/** One-time hosted checkout access details for redirecting a buyer into Flint-hosted checkout. */ export type HostedCheckout = { /** Checkout-session auth token for clients that operate the created checkout session directly. The hosted URL uses a separate launch credential. */ "checkout_auth_token": string; /** Hosted checkout URL for the created or reused checkout session. */ "url": string; };
