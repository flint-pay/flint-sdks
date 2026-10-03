import { d1898 as c0, d1909 as c1 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1898 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1898;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppInstall"]:c0(),["PartnerEnvironmentGrant"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppInstall(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
