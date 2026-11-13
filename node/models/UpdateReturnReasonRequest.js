import { d8373 as c0 } from '../descriptors/data/407.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5679 as c1 } from '../descriptors/data/250.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5679 as d5679 } from '../descriptors/data/250.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5679;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1792"]:c0(),["UpdateReturnReasonRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReasonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
