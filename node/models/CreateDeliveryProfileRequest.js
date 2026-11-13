import { d231 as c0 } from '../descriptors/data/11.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6550 as c1, d6553 as c2 } from '../descriptors/data/299.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c3 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6564 as c4, d6565 as c5, d6566 as c6, d6567 as c7, d6568 as c8, d6569 as c9, d6570 as c10, d6571 as c11, d6572 as c12, d6573 as c13, d6574 as c14, d6575 as c15, d6576 as c16, d6577 as c17 } from '../descriptors/data/300.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d231 as d231 } from '../descriptors/data/11.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d231;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec594"]:c4(),["SharedCodec595"]:c5(),["SharedCodec596"]:c6(),["SharedCodec597"]:c7(),["SharedCodec598"]:c8(),["SharedCodec599"]:c9(),["SharedCodec600"]:c10(),["SharedCodec601"]:c11(),["SharedCodec602"]:c12(),["SharedCodec606"]:c13(),["SharedCodec607"]:c14(),["SharedCodec608"]:c15(),["SharedCodec609"]:c16(),["SharedCodec610"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
