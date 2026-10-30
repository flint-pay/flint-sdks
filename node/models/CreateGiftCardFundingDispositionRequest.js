import { d214 as c0 } from '../descriptors/data/10.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d214 as d214 } from '../descriptors/data/10.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d214;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardFundingDispositionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardFundingDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
