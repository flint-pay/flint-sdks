import { d537 as c0, d538 as c1 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d538 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d538;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerAccountDNSRecord"]:c0(),["CustomerAccountDomainStatus"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountDomainStatus(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
