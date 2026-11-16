import { d6580 as c0, d6581 as c4 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6910 as c2 } from '../descriptors/data/324.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5505 as c3 } from '../descriptors/data/240.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5505 as d5505 } from '../descriptors/data/240.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5505;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DimensionsRequest"]:c0(),["MetadataRequest"]:c1(),["SharedCodec354"]:c2(),["SinglePackageCreateInputShipped"]:c3(),["WeightRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSinglePackageCreateInputShipped(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
