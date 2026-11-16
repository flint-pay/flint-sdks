import { d319 as c0 } from '../descriptors/data/19.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8890 as c1 } from '../descriptors/data/424.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d319 as d319 } from '../descriptors/data/19.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentMethodDomainRequest"]:c0(),["SharedCodec466"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
