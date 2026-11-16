import { d7992 as c0 } from '../descriptors/data/370.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7047 as c1, d7048 as c2, d7050 as c3, d7052 as c4 } from '../descriptors/data/317.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8007 as c5, d8008 as c6, d8009 as c7, d8010 as c8, d8011 as c9, d8012 as c10, d8013 as c11 } from '../descriptors/data/371.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7992 as d7992 } from '../descriptors/data/370.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7992;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1166"]:c1(),["SharedCodec1167"]:c2(),["SharedCodec1169"]:c3(),["SharedCodec1171"]:c4(),["SharedCodec1261"]:c5(),["SharedCodec1262"]:c6(),["SharedCodec1263"]:c7(),["SharedCodec1264"]:c8(),["SharedCodec1265"]:c9(),["SharedCodec1266"]:c10(),["SharedCodec1267"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
