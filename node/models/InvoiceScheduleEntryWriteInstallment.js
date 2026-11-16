import { d9017 as c0, d9018 as c1 } from '../descriptors/data/406.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1145 as c2 } from '../descriptors/data/57.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c3 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8085 as c4, d8086 as c5, d8087 as c6, d8088 as c7, d8089 as c8, d8090 as c9, d8091 as c10 } from '../descriptors/data/354.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9037 as c11, d9038 as c12, d9039 as c13, d9040 as c14, d9041 as c15, d9044 as c16, d9045 as c17, d9047 as c18, d9049 as c19, d9050 as c20 } from '../descriptors/data/407.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1145 as d1145 } from '../descriptors/data/57.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteInstallment"]:c2(),["MoneyValue"]:c3(),["SharedCodec1653"]:c4(),["SharedCodec1654"]:c5(),["SharedCodec1655"]:c6(),["SharedCodec1656"]:c7(),["SharedCodec1657"]:c8(),["SharedCodec1658"]:c9(),["SharedCodec1659"]:c10(),["SharedCodec1674"]:c11(),["SharedCodec1675"]:c12(),["SharedCodec1676"]:c13(),["SharedCodec1677"]:c14(),["SharedCodec1678"]:c15(),["SharedCodec1685"]:c16(),["SharedCodec1686"]:c17(),["SharedCodec1688"]:c18(),["SharedCodec1690"]:c19(),["SharedCodec1691"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteInstallment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
