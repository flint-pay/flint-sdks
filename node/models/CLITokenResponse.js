import { d227 as c0, d225 as c1, d226 as c2 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d227 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CLITokenResponse"]:c0(),["SharedCodec58"]:c1(),["SharedCodec59"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCLITokenResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
