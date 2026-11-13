import { d8701 as c0, d8702 as c1 } from '../descriptors/data/425.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8717 as c2 } from '../descriptors/data/426.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8717 as d8717 } from '../descriptors/data/426.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8717;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1645"]:c0(),["SharedCodec1646"]:c1(),["SubscriptionTaxRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
