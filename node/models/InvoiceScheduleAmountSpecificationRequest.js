import { d6844 as c0 } from '../descriptors/data/312.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c1 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6041 as c2, d6042 as c3, d6043 as c4, d6044 as c5, d6045 as c6, d6046 as c7, d6047 as c8 } from '../descriptors/data/269.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6844 as d6844 } from '../descriptors/data/312.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6844;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec897"]:c2(),["SharedCodec898"]:c3(),["SharedCodec899"]:c4(),["SharedCodec900"]:c5(),["SharedCodec901"]:c6(),["SharedCodec902"]:c7(),["SharedCodec903"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
