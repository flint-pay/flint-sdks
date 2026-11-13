import { d6550 as c0, d6553 as c1 } from '../descriptors/data/299.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5894 as c2 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5978 as c3 } from '../descriptors/data/269.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6299 as c4 } from '../descriptors/data/286.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6564 as c5, d6565 as c6, d6566 as c7, d6567 as c8, d6568 as c9, d6569 as c10, d6570 as c11, d6571 as c12, d6572 as c13, d6573 as c14, d6574 as c15, d6575 as c16, d6576 as c17, d6577 as c18 } from '../descriptors/data/300.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5633 as c19 } from '../descriptors/data/246.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5633 as d5633 } from '../descriptors/data/246.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5633;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1695"]:c2(),["SharedCodec1698"]:c3(),["SharedCodec1706"]:c4(),["SharedCodec594"]:c5(),["SharedCodec595"]:c6(),["SharedCodec596"]:c7(),["SharedCodec597"]:c8(),["SharedCodec598"]:c9(),["SharedCodec599"]:c10(),["SharedCodec600"]:c11(),["SharedCodec601"]:c12(),["SharedCodec602"]:c13(),["SharedCodec606"]:c14(),["SharedCodec607"]:c15(),["SharedCodec608"]:c16(),["SharedCodec609"]:c17(),["SharedCodec610"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
