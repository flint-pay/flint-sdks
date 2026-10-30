import { d5868 as c0, d5869 as c1, d5871 as c2, d5872 as c3, d5873 as c4, d5874 as c5 } from '../descriptors/data/269.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5869 as d5869 } from '../descriptors/data/269.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5869;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequest"]:c0(),["ReturnEligibilitySelection"]:c1(),["SharedCodec1153"]:c2(),["SharedCodec1154"]:c3(),["SharedCodec1155"]:c4(),["SharedCodec1156"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
