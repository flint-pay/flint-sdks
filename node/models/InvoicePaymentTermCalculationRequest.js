import { d8999 as c0 } from '../descriptors/data/405.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8046 as c1, d8047 as c2, d8048 as c3, d8049 as c4, d8050 as c5, d8051 as c6, d8052 as c7, d8053 as c8, d8054 as c9, d8055 as c10, d8056 as c11 } from '../descriptors/data/352.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8999 as d8999 } from '../descriptors/data/405.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8999;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1622"]:c1(),["SharedCodec1623"]:c2(),["SharedCodec1624"]:c3(),["SharedCodec1625"]:c4(),["SharedCodec1626"]:c5(),["SharedCodec1627"]:c6(),["SharedCodec1628"]:c7(),["SharedCodec1629"]:c8(),["SharedCodec1630"]:c9(),["SharedCodec1631"]:c10(),["SharedCodec1632"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
