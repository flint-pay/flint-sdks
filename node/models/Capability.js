import { d168 as c0, d167 as c1, d1818 as c2, d1823 as c3, d1822 as c4, d14 as c5, d1821 as c6 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d168 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Capability"]:c0(),["CapabilityRequirements"]:c1(),["MoneyMovementBlockedReason"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["SharedCodec1"]:c5(),["SharedCodec487"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
