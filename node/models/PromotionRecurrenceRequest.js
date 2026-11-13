import { d8171 as c0 } from '../descriptors/data/394.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7454 as c1, d7455 as c2, d7456 as c3, d7457 as c4, d7458 as c5 } from '../descriptors/data/354.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8171 as d8171 } from '../descriptors/data/394.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8171;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRequest"]:c0(),["SharedCodec1348"]:c1(),["SharedCodec1349"]:c2(),["SharedCodec1350"]:c3(),["SharedCodec1351"]:c4(),["SharedCodec1352"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
