import { d9827 as c0, d9823 as c1, d9828 as c2, d9825 as c10 } from '../descriptors/data/454.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c3 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9830 as c4, d9840 as c6, d9841 as c7, d9842 as c8, d9843 as c9 } from '../descriptors/data/455.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c5 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9828 as d9828 } from '../descriptors/data/454.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9828;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupRequest"]:c2(),["MetadataRequest"]:c3(),["ModifierOverrideRequest"]:c4(),["MoneyValue"]:c5(),["SharedCodec478"]:c6(),["SharedCodec479"]:c7(),["SharedCodec480"]:c8(),["SharedCodec481"]:c9(),["TextModifierConfigRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
