


export interface Credentials {
  "checkout": { "CheckoutSessionIDHeader": string; "CheckoutSessionSecretHeader": string; };
  "customer": { "CustomerSessionBearer": string; };
  "invoice": { "InvoiceAccessTokenBearer": string; };
  "merchant": { "BearerAuth": string; };
  "merchantKey": { "ApiKeyHeader": string; };
  "onboarding": { "OnboardingSessionBearer": string; };
}
