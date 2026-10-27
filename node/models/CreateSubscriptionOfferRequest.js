import { d235 as c0 } from '../descriptors/data/13.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3216 as c1 } from '../descriptors/data/128.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d235 as d235 } from '../descriptors/data/13.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionOfferRequest"]:c0(),["SubscriptionIntervalOption"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionOfferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
