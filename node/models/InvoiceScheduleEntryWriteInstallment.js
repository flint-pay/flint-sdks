import { d7994 as c0, d7995 as c1 } from '../descriptors/data/370.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d920 as c2 } from '../descriptors/data/45.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c3 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7061 as c4, d7062 as c5, d7063 as c6, d7064 as c7, d7065 as c8, d7066 as c9, d7067 as c10 } from '../descriptors/data/318.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8014 as c11, d8015 as c12, d8016 as c13, d8017 as c14, d8018 as c15, d8021 as c16, d8022 as c17, d8024 as c18, d8026 as c19, d8027 as c20 } from '../descriptors/data/371.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d920 as d920 } from '../descriptors/data/45.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d920;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteInstallment"]:c2(),["MoneyValue"]:c3(),["SharedCodec1285"]:c4(),["SharedCodec1286"]:c5(),["SharedCodec1287"]:c6(),["SharedCodec1288"]:c7(),["SharedCodec1289"]:c8(),["SharedCodec1290"]:c9(),["SharedCodec1291"]:c10(),["SharedCodec1295"]:c11(),["SharedCodec1296"]:c12(),["SharedCodec1297"]:c13(),["SharedCodec1298"]:c14(),["SharedCodec1299"]:c15(),["SharedCodec1302"]:c16(),["SharedCodec1303"]:c17(),["SharedCodec1305"]:c18(),["SharedCodec1307"]:c19(),["SharedCodec1308"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteInstallment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
