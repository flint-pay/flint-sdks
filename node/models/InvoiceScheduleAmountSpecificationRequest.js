import { d7994 as c0 } from '../descriptors/data/370.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c1 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7061 as c2, d7062 as c3, d7063 as c4, d7064 as c5, d7065 as c6, d7066 as c7, d7067 as c8 } from '../descriptors/data/318.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7994 as d7994 } from '../descriptors/data/370.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7994;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1285"]:c2(),["SharedCodec1286"]:c3(),["SharedCodec1287"]:c4(),["SharedCodec1288"]:c5(),["SharedCodec1289"]:c6(),["SharedCodec1290"]:c7(),["SharedCodec1291"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
