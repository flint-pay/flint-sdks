import { d377 as c0, d1664 as c1, d1682 as c2, d74 as c3, d1662 as c4, d1663 as c5, d1674 as c6, d1673 as c7, d1675 as c8, d1676 as c9, d1677 as c10, d1678 as c11 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d377 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d377;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicy"]:c1(),["InvoicePaymentTermCalculation"]:c2(),["MoneyValue"]:c3(),["SharedCodec448"]:c4(),["SharedCodec449"]:c5(),["SharedCodec451"]:c6(),["SharedCodec452"]:c7(),["SharedCodec453"]:c8(),["SharedCodec454"]:c9(),["SharedCodec455"]:c10(),["SharedCodec456"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
