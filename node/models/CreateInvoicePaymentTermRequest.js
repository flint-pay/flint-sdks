import { d310 as c0 } from '../descriptors/data/16.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8997 as c1, d8999 as c2 } from '../descriptors/data/405.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c3 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8042 as c4 } from '../descriptors/data/351.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8043 as c5, d8044 as c6, d8045 as c7, d8046 as c8, d8047 as c9, d8048 as c10, d8049 as c11, d8050 as c12, d8051 as c13, d8052 as c14, d8053 as c15, d8054 as c16, d8055 as c17, d8056 as c18 } from '../descriptors/data/352.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d310 as d310 } from '../descriptors/data/16.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d310;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec116"]:c4(),["SharedCodec117"]:c5(),["SharedCodec118"]:c6(),["SharedCodec119"]:c7(),["SharedCodec1622"]:c8(),["SharedCodec1623"]:c9(),["SharedCodec1624"]:c10(),["SharedCodec1625"]:c11(),["SharedCodec1626"]:c12(),["SharedCodec1627"]:c13(),["SharedCodec1628"]:c14(),["SharedCodec1629"]:c15(),["SharedCodec1630"]:c16(),["SharedCodec1631"]:c17(),["SharedCodec1632"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
