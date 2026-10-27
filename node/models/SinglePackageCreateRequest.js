import { d2999 as c0 } from '../descriptors/data/114.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4548 as c1, d4549 as c2 } from '../descriptors/data/200.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3889 as c3 } from '../descriptors/data/164.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4588 as c4 } from '../descriptors/data/203.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3044 as c5 } from '../descriptors/data/118.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4588 as d4588 } from '../descriptors/data/203.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4588;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dimensions"]:c0(),["SharedCodec1140"]:c1(),["SharedCodec1141"]:c2(),["SharedCodec226"]:c3(),["SinglePackageCreateRequest"]:c4(),["Weight"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSinglePackageCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
