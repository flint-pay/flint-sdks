import { d5969 as c0, d5970 as c3, d5966 as c10 } from '../descriptors/data/274.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4398 as c1 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4414 as c2, d4416 as c7 } from '../descriptors/data/188.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d918 as c4 } from '../descriptors/data/43.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c5 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5987 as c6 } from '../descriptors/data/276.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d3959 as c8, d3960 as c9 } from '../descriptors/data/163.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d918 as d918 } from '../descriptors/data/43.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d918;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["MetadataRequest"]:c1(),["ModifierOverride"]:c2(),["ModifierRequest"]:c3(),["ModifierSetGroupRequest"]:c4(),["MoneyValue"]:c5(),["SharedCodec246"]:c6(),["SharedCodec247"]:c7(),["SharedCodec872"]:c8(),["SharedCodec873"]:c9(),["TextModifierConfigRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
