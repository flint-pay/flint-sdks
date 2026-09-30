import type { RequestOptions as RuntimeRequestOptions } from '../runtime.js';
import type { AuthMode } from './AuthMode.js';
import type { Credentials } from './Credentials.js';

export type RequestOptions<M extends AuthMode = AuthMode> = Omit<RuntimeRequestOptions, 'authMode' | 'credentials'> & { "apiKey"?: "merchant" extends M ? string : never; "customerToken"?: "customer" extends M ? string : never; "invoiceToken"?: "invoice" extends M ? string : never; "onboardingToken"?: "onboarding" extends M ? string : never; "token"?: "merchant" extends M ? string : never; } & ({ authMode?: undefined; credentials?: Credentials[M] } | { [K in M]: { authMode: K; credentials?: Credentials[K] } }[M]);
