import { d1681 as c0, d1683 as c1, d74 as c2, d1786 as c3, d1785 as c4, d2121 as c5, d2122 as c6, d1662 as c7, d1663 as c8, d1679 as c9, d1674 as c10, d1673 as c11, d1675 as c12, d1676 as c13, d1677 as c14, d1678 as c15, d1680 as c16 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1683 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1683;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["InvoicePaymentTermListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec448"]:c7(),["SharedCodec449"]:c8(),["SharedCodec450"]:c9(),["SharedCodec451"]:c10(),["SharedCodec452"]:c11(),["SharedCodec453"]:c12(),["SharedCodec454"]:c13(),["SharedCodec455"]:c14(),["SharedCodec456"]:c15(),["SharedCodec457"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
