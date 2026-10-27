import { d4084 as c0 } from '../descriptors/data/174.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4012 as c1, d4013 as c2, d4014 as c3, d4015 as c4, d4011 as c5, d4008 as c6, d4009 as c7, d4010 as c8 } from '../descriptors/data/170.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4084 as d4084 } from '../descriptors/data/174.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4084;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec147"]:c2(),["SharedCodec148"]:c3(),["SharedCodec149"]:c4(),["SharedCodec150"]:c5(),["SharedCodec837"]:c6(),["SharedCodec838"]:c7(),["SharedCodec839"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
