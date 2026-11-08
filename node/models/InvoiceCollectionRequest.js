import { d6838 as c0, d6843 as c2 } from '../descriptors/data/312.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6940 as c1 } from '../descriptors/data/316.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c3 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6022 as c4, d6023 as c5 } from '../descriptors/data/268.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6878 as c6, d6879 as c7, d6880 as c8, d6881 as c9, d6882 as c10, d6883 as c11, d6884 as c12 } from '../descriptors/data/314.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6838 as d6838 } from '../descriptors/data/312.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6838;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec801"]:c4(),["SharedCodec802"]:c5(),["SharedCodec808"]:c6(),["SharedCodec809"]:c7(),["SharedCodec810"]:c8(),["SharedCodec811"]:c9(),["SharedCodec812"]:c10(),["SharedCodec813"]:c11(),["SharedCodec814"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
