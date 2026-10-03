import { d1681 as c0, d74 as c1, d1662 as c2, d1663 as c3, d1679 as c4, d1674 as c5, d1673 as c6, d1675 as c7, d1676 as c8, d1677 as c9, d1678 as c10, d1680 as c11 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1681 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1681;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["MoneyValue"]:c1(),["SharedCodec448"]:c2(),["SharedCodec449"]:c3(),["SharedCodec450"]:c4(),["SharedCodec451"]:c5(),["SharedCodec452"]:c6(),["SharedCodec453"]:c7(),["SharedCodec454"]:c8(),["SharedCodec455"]:c9(),["SharedCodec456"]:c10(),["SharedCodec457"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTerm(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
