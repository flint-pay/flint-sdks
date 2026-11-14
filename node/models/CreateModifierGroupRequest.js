import { d294 as c0 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7617 as c1, d7619 as c4 } from '../descriptors/data/366.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c2 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d294 as d294 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d294;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["TextModifierConfigRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
