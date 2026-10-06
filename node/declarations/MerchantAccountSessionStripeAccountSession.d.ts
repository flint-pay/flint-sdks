


export type MerchantAccountSessionStripeAccountSession = { /** Short-lived account session client secret to return from fetchClientSecret. Return it only to an authenticated human authorized to manage this merchant. */ "client_secret": string; /** Browser initialization operation to perform. load_connect_and_initialize means call loadConnectAndInitialize with publishableKey and fetchClientSecret. */ "stripe_js_call": "load_connect_and_initialize" | (string & {}); };
