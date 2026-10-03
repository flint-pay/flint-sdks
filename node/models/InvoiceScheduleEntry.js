import { d1693 as c0, d1696 as c1, d1697 as c2, d74 as c3, d1689 as c4, d1690 as c5, d1692 as c6, d1691 as c7, d1694 as c8, d1695 as c9, d38 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1697 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1697;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntry"]:c2(),["MoneyValue"]:c3(),["SharedCodec458"]:c4(),["SharedCodec459"]:c5(),["SharedCodec460"]:c6(),["SharedCodec461"]:c7(),["SharedCodec462"]:c8(),["SharedCodec463"]:c9(),["SharedCodec5"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
