import { d535 as c0, d536 as c1 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d536 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d536;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerAccountDNSRecord"]:c0(),["CustomerAccountDomainStatus"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountDomainStatus(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
