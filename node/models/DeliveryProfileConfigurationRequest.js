import { d6550 as c0, d6553 as c1 } from '../descriptors/data/299.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6564 as c2, d6565 as c3, d6566 as c4, d6567 as c5, d6568 as c6, d6569 as c7, d6570 as c8, d6571 as c9, d6572 as c10, d6573 as c11, d6574 as c12, d6575 as c13, d6576 as c14, d6577 as c15 } from '../descriptors/data/300.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6550 as d6550 } from '../descriptors/data/299.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6550;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec594"]:c2(),["SharedCodec595"]:c3(),["SharedCodec596"]:c4(),["SharedCodec597"]:c5(),["SharedCodec598"]:c6(),["SharedCodec599"]:c7(),["SharedCodec600"]:c8(),["SharedCodec601"]:c9(),["SharedCodec602"]:c10(),["SharedCodec606"]:c11(),["SharedCodec607"]:c12(),["SharedCodec608"]:c13(),["SharedCodec609"]:c14(),["SharedCodec610"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
