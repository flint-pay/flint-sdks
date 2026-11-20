import { d9294 as c0, d9295 as c1, d9296 as c2 } from '../descriptors/data/422.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c3 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8369 as c4, d8370 as c5, d8371 as c6, d8372 as c7, d8373 as c8, d8374 as c9, d8375 as c10 } from '../descriptors/data/371.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9314 as c11, d9315 as c12, d9316 as c13, d9317 as c14, d9318 as c15, d9319 as c16, d9320 as c17, d9321 as c18, d9322 as c19, d9323 as c20 } from '../descriptors/data/423.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9324 as c21, d9325 as c22, d9326 as c23, d9327 as c24, d9328 as c25, d9329 as c26, d9330 as c27, d9331 as c28 } from '../descriptors/data/424.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9296 as d9296 } from '../descriptors/data/422.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec1666"]:c4(),["SharedCodec1667"]:c5(),["SharedCodec1668"]:c6(),["SharedCodec1669"]:c7(),["SharedCodec1670"]:c8(),["SharedCodec1671"]:c9(),["SharedCodec1672"]:c10(),["SharedCodec1687"]:c11(),["SharedCodec1688"]:c12(),["SharedCodec1689"]:c13(),["SharedCodec1690"]:c14(),["SharedCodec1691"]:c15(),["SharedCodec1696"]:c16(),["SharedCodec1697"]:c17(),["SharedCodec1698"]:c18(),["SharedCodec1699"]:c19(),["SharedCodec1700"]:c20(),["SharedCodec1701"]:c21(),["SharedCodec1702"]:c22(),["SharedCodec1703"]:c23(),["SharedCodec1704"]:c24(),["SharedCodec1705"]:c25(),["SharedCodec1706"]:c26(),["SharedCodec1707"]:c27(),["SharedCodec1708"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
