import { d517 as c0, d519 as c1, d524 as c2, d518 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d519 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d519;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["SharedCodec179"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomDomainStatusChange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
