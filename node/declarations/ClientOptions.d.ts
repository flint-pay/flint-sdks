import type { ClientOptions as RuntimeClientOptions } from '../runtime.js';
import type { AuthMode } from './AuthMode.js';
import type { Credentials } from './Credentials.js';

export type ClientOptions = Omit<RuntimeClientOptions, 'baseUrl' | 'token' | 'authMode' | 'credentials'> & { baseUrl?: string; "apiKey"?: string; "customerToken"?: string; "invoiceToken"?: string; "onboardingToken"?: string; "token"?: string; authMode?: AuthMode; credentials?: Partial<Credentials> };
