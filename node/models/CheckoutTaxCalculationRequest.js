import { d6959 as c0 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6413 as c1 } from '../descriptors/data/277.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6959 as d6959 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6959;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutTaxCalculationRequest"]:c0(),["SubscriptionTaxCalculationRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutTaxCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
