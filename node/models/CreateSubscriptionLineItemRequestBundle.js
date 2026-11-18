import { d413 as c0 } from '../descriptors/data/25.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d413 as d413 } from '../descriptors/data/25.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d413;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionLineItemRequestBundle"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionLineItemRequestBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
