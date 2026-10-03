import { d665 as c0, d659 as c1, d649 as c2, d657 as c3, d658 as c4, d661 as c5, d660 as c6, d662 as c7, d664 as c8, d663 as c9, d651 as c10 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d665 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d665;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["Dimensions"]:c2(),["SharedCodec213"]:c3(),["SharedCodec214"]:c4(),["SharedCodec215"]:c5(),["SharedCodec216"]:c6(),["SharedCodec217"]:c7(),["SharedCodec218"]:c8(),["SharedCodec219"]:c9(),["Weight"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
