import { d8048 as c0, d8050 as c3, d8051 as c4, d8049 as c5 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9812 as c1, d9804 as c7, d9805 as c8 } from '../descriptors/data/454.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c2 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9814 as c6 } from '../descriptors/data/455.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7771 as c9 } from '../descriptors/data/327.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7771 as d7771 } from '../descriptors/data/327.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7771;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["ModifierRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec3071"]:c3(),["SharedCodec3072"]:c4(),["SharedCodec3073"]:c5(),["SharedCodec3123"]:c6(),["SharedCodec3131"]:c7(),["SharedCodec3132"]:c8(),["UpdateModifierGroupRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
