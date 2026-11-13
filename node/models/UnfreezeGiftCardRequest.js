import { d5621 as c0 } from '../descriptors/data/245.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5621 as d5621 } from '../descriptors/data/245.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5621;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UnfreezeGiftCardRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUnfreezeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
