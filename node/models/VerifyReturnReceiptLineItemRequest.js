import { d4227 as c0 } from '../descriptors/data/177.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4227 as d4227 } from '../descriptors/data/177.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["VerifyReturnReceiptLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVerifyReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
