import { d389 as c0 } from '../descriptors/data/24.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9670 as c1 } from '../descriptors/data/470.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d389 as d389 } from '../descriptors/data/24.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d389;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateTaxRegistrationRequest"]:c0(),["SharedCodec533"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateTaxRegistrationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
