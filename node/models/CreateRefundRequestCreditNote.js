import { d331 as c0 } from '../descriptors/data/20.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c1 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c2 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8244 as c3, d8245 as c4 } from '../descriptors/data/399.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d331 as d331 } from '../descriptors/data/20.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestCreditNote"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec385"]:c3(),["SharedCodec386"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestCreditNote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
