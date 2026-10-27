import { d229 as c0 } from '../descriptors/data/13.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3025 as c1 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3889 as c2 } from '../descriptors/data/164.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3867 as c3, d3868 as c4, d3869 as c5 } from '../descriptors/data/163.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d229 as d229 } from '../descriptors/data/13.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentRequest"]:c0(),["ReturnShipmentLineItemAllocation"]:c1(),["SharedCodec226"]:c2(),["SharedCodec227"]:c3(),["SharedCodec228"]:c4(),["SharedCodec229"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
