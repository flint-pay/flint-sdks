import { d535 as c0, d536 as c1 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d536 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d536;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerAccountDNSRecord"]:c0(),["CustomerAccountDomainStatus"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountDomainStatus(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
