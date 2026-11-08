import { d6844 as c0, d6845 as c1 } from '../descriptors/data/312.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d888 as c2 } from '../descriptors/data/41.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c3 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6041 as c4, d6042 as c5, d6043 as c6, d6044 as c7, d6045 as c8, d6046 as c9, d6047 as c10 } from '../descriptors/data/269.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6894 as c11, d6895 as c12, d6896 as c13, d6897 as c14, d6898 as c15 } from '../descriptors/data/314.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6902 as c16, d6904 as c17, d6909 as c18, d6910 as c19, d6911 as c20 } from '../descriptors/data/315.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d888 as d888 } from '../descriptors/data/41.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d888;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteBalance"]:c2(),["MoneyValue"]:c3(),["SharedCodec897"]:c4(),["SharedCodec898"]:c5(),["SharedCodec899"]:c6(),["SharedCodec900"]:c7(),["SharedCodec901"]:c8(),["SharedCodec902"]:c9(),["SharedCodec903"]:c10(),["SharedCodec907"]:c11(),["SharedCodec908"]:c12(),["SharedCodec909"]:c13(),["SharedCodec910"]:c14(),["SharedCodec911"]:c15(),["SharedCodec915"]:c16(),["SharedCodec917"]:c17(),["SharedCodec922"]:c18(),["SharedCodec923"]:c19(),["SharedCodec924"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
