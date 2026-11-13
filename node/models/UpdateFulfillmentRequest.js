import { d5981 as c0, d5979 as c1, d5980 as c2, d5978 as c4 } from '../descriptors/data/269.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5894 as c3 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6799 as c5, d6800 as c6, d6801 as c7, d6802 as c8, d6803 as c9, d6804 as c10, d6805 as c11, d6806 as c12, d6807 as c13, d6808 as c14 } from '../descriptors/data/315.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6277 as c15, d6278 as c16 } from '../descriptors/data/284.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5638 as c17 } from '../descriptors/data/246.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5638 as d5638 } from '../descriptors/data/246.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5638;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1695"]:c3(),["SharedCodec1698"]:c4(),["SharedCodec1714"]:c5(),["SharedCodec1715"]:c6(),["SharedCodec1716"]:c7(),["SharedCodec1717"]:c8(),["SharedCodec1718"]:c9(),["SharedCodec1719"]:c10(),["SharedCodec1720"]:c11(),["SharedCodec1721"]:c12(),["SharedCodec1722"]:c13(),["SharedCodec1723"]:c14(),["SharedCodec997"]:c15(),["SharedCodec998"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
