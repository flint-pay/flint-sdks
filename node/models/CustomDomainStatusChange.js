import { d517 as c0, d519 as c1, d524 as c2, d518 as c3 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d519 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d519;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["SharedCodec179"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomDomainStatusChange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
