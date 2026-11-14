import { d7621 as c0, d7617 as c1, d7622 as c2, d7624 as c5, d7619 as c11 } from '../descriptors/data/366.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d297 as c3 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c4 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c6 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7634 as c7, d7635 as c8, d7636 as c9, d7637 as c10 } from '../descriptors/data/367.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d297 as d297 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d297;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupRequest"]:c2(),["CreateModifierSetRequest"]:c3(),["MetadataRequest"]:c4(),["ModifierOverrideRequest"]:c5(),["MoneyValue"]:c6(),["SharedCodec326"]:c7(),["SharedCodec327"]:c8(),["SharedCodec328"]:c9(),["SharedCodec329"]:c10(),["TextModifierConfigRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
