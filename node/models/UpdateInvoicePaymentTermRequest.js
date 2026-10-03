import { d1664 as c0, d1682 as c1, d74 as c2, d1662 as c3, d1663 as c4, d1674 as c5, d1673 as c6, d1675 as c7, d1676 as c8, d1677 as c9, d1678 as c10, d2409 as c11, d2410 as c12 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2410 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2410;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec448"]:c3(),["SharedCodec449"]:c4(),["SharedCodec451"]:c5(),["SharedCodec452"]:c6(),["SharedCodec453"]:c7(),["SharedCodec454"]:c8(),["SharedCodec455"]:c9(),["SharedCodec456"]:c10(),["SharedCodec636"]:c11(),["UpdateInvoicePaymentTermRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
