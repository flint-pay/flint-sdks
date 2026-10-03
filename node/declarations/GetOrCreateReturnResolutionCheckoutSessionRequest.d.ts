


export type GetOrCreateReturnResolutionCheckoutSessionRequest = { /** Where the checkout sends the buyer after paying, such as the Return's page in the customer account. It must be an HTTPS address of the merchant's customer account: /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the host of customer_account.merchant_account_url when the merchant hosts the account. HTTP is accepted only for localhost in test mode. Anything else fails with INVALID_RETURN_URL. Format: uri. maxLength: 2048. */ "return_url"?: string; };
