import { d9292 as c0, d9293 as c1, d9294 as c2 } from '../descriptors/data/421.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c3 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8367 as c4, d8368 as c5, d8369 as c6, d8370 as c7, d8371 as c8, d8372 as c9, d8373 as c10 } from '../descriptors/data/370.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9312 as c11, d9313 as c12, d9314 as c13, d9315 as c14, d9316 as c15, d9317 as c16, d9318 as c17, d9319 as c18, d9320 as c19, d9321 as c20 } from '../descriptors/data/422.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9322 as c21, d9323 as c22, d9324 as c23, d9325 as c24, d9326 as c25, d9327 as c26, d9328 as c27, d9329 as c28 } from '../descriptors/data/423.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9294 as d9294 } from '../descriptors/data/421.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9294;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec1666"]:c4(),["SharedCodec1667"]:c5(),["SharedCodec1668"]:c6(),["SharedCodec1669"]:c7(),["SharedCodec1670"]:c8(),["SharedCodec1671"]:c9(),["SharedCodec1672"]:c10(),["SharedCodec1687"]:c11(),["SharedCodec1688"]:c12(),["SharedCodec1689"]:c13(),["SharedCodec1690"]:c14(),["SharedCodec1691"]:c15(),["SharedCodec1696"]:c16(),["SharedCodec1697"]:c17(),["SharedCodec1698"]:c18(),["SharedCodec1699"]:c19(),["SharedCodec1700"]:c20(),["SharedCodec1701"]:c21(),["SharedCodec1702"]:c22(),["SharedCodec1703"]:c23(),["SharedCodec1704"]:c24(),["SharedCodec1705"]:c25(),["SharedCodec1706"]:c26(),["SharedCodec1707"]:c27(),["SharedCodec1708"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
