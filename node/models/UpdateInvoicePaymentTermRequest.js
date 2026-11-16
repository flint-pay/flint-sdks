import { d8999 as c0, d9000 as c17, d9001 as c18 } from '../descriptors/data/405.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c1 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8042 as c2 } from '../descriptors/data/351.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8043 as c3, d8044 as c4, d8045 as c5, d8046 as c6, d8047 as c7, d8048 as c8, d8049 as c9, d8050 as c10, d8051 as c11, d8052 as c12, d8053 as c13, d8054 as c14, d8055 as c15, d8056 as c16 } from '../descriptors/data/352.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7508 as c19 } from '../descriptors/data/315.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7508 as d7508 } from '../descriptors/data/315.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7508;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec116"]:c2(),["SharedCodec117"]:c3(),["SharedCodec118"]:c4(),["SharedCodec119"]:c5(),["SharedCodec1622"]:c6(),["SharedCodec1623"]:c7(),["SharedCodec1624"]:c8(),["SharedCodec1625"]:c9(),["SharedCodec1626"]:c10(),["SharedCodec1627"]:c11(),["SharedCodec1628"]:c12(),["SharedCodec1629"]:c13(),["SharedCodec1630"]:c14(),["SharedCodec1631"]:c15(),["SharedCodec1632"]:c16(),["SharedCodec3009"]:c17(),["SharedCodec3010"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
