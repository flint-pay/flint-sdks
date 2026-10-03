


export type CheckoutRedirectsConfig = { "cancel_redirect_url"?: string; /** Deprecated. Hosted checkout sends the buyer to this URL whenever an open checkout first loads, so a checkout that sets it cannot be paid on Flint's page. On a payment link with max_completions, the buyer's Continue creates the checkout and counts it toward the cap before the redirect. There is no direct replacement: send buyers to your own page before you create the checkout. */ "on_load_redirect_url"?: string; "success_redirect_url"?: string; };
