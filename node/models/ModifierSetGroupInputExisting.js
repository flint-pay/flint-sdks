import { d9829 as c0, d9824 as c3, d9825 as c7 } from '../descriptors/data/454.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9830 as c2, d9840 as c6 } from '../descriptors/data/455.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1279 as c4 } from '../descriptors/data/62.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c5 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1279 as d1279 } from '../descriptors/data/62.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1279;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["MetadataRequest"]:c1(),["ModifierOverrideRequest"]:c2(),["ModifierRequest"]:c3(),["ModifierSetGroupInputExisting"]:c4(),["MoneyValue"]:c5(),["SharedCodec478"]:c6(),["TextModifierConfigRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetGroupInputExisting(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
