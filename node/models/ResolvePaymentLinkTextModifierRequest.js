import { d8841 as c0 } from '../descriptors/data/420.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6675 as c1 } from '../descriptors/data/295.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8841 as d8841 } from '../descriptors/data/420.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8841;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkTextModifierRequest"]:c0(),["TextModifierRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkTextModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
