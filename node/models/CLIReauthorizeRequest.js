import { d115 as c0 } from '../descriptors/data/5.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7664 as c1 } from '../descriptors/data/369.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d115 as d115 } from '../descriptors/data/5.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d115;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CLIReauthorizeRequest"]:c0(),["SharedCodec176"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCLIReauthorizeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
