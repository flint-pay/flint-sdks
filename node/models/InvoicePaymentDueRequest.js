import { d6842 as c0 } from '../descriptors/data/312.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6025 as c1, d6026 as c2, d6028 as c3, d6030 as c4 } from '../descriptors/data/268.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6887 as c5, d6888 as c6, d6889 as c7, d6890 as c8, d6891 as c9, d6892 as c10, d6893 as c11 } from '../descriptors/data/314.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6842 as d6842 } from '../descriptors/data/312.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6842;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec867"]:c1(),["SharedCodec868"]:c2(),["SharedCodec870"]:c3(),["SharedCodec872"]:c4(),["SharedCodec873"]:c5(),["SharedCodec874"]:c6(),["SharedCodec875"]:c7(),["SharedCodec876"]:c8(),["SharedCodec877"]:c9(),["SharedCodec878"]:c10(),["SharedCodec879"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
