import { d9294 as c0, d9295 as c1 } from '../descriptors/data/422.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1152 as c2 } from '../descriptors/data/58.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c3 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8369 as c4, d8370 as c5, d8371 as c6, d8372 as c7, d8373 as c8, d8374 as c9, d8375 as c10 } from '../descriptors/data/371.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9314 as c11, d9315 as c12, d9316 as c13, d9317 as c14, d9318 as c15, d9320 as c16, d9321 as c17, d9322 as c18, d9323 as c19 } from '../descriptors/data/423.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9324 as c20 } from '../descriptors/data/424.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1152 as d1152 } from '../descriptors/data/58.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1152;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteDeposit"]:c2(),["MoneyValue"]:c3(),["SharedCodec1666"]:c4(),["SharedCodec1667"]:c5(),["SharedCodec1668"]:c6(),["SharedCodec1669"]:c7(),["SharedCodec1670"]:c8(),["SharedCodec1671"]:c9(),["SharedCodec1672"]:c10(),["SharedCodec1687"]:c11(),["SharedCodec1688"]:c12(),["SharedCodec1689"]:c13(),["SharedCodec1690"]:c14(),["SharedCodec1691"]:c15(),["SharedCodec1697"]:c16(),["SharedCodec1698"]:c17(),["SharedCodec1699"]:c18(),["SharedCodec1700"]:c19(),["SharedCodec1701"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteDeposit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
