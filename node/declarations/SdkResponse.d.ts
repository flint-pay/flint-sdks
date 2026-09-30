import type { Result } from '../runtime.js';


export interface SdkResponse<T> { body: T; meta: Result<T>['meta']; raw: Result<T>['raw']; }
