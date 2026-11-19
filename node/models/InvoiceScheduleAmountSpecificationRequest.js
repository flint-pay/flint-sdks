import { d9292 as c0 } from '../descriptors/data/421.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c1 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8367 as c2, d8368 as c3, d8369 as c4, d8370 as c5, d8371 as c6, d8372 as c7, d8373 as c8 } from '../descriptors/data/370.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9292 as d9292 } from '../descriptors/data/421.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1666"]:c2(),["SharedCodec1667"]:c3(),["SharedCodec1668"]:c4(),["SharedCodec1669"]:c5(),["SharedCodec1670"]:c6(),["SharedCodec1671"]:c7(),["SharedCodec1672"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
