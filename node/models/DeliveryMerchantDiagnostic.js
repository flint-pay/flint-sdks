import { d592 as c0, d608 as c1 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d608 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d608;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryEligibilityMismatch"]:c0(),["DeliveryMerchantDiagnostic"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMerchantDiagnostic(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
