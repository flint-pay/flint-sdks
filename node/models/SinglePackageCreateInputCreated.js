import { d8657 as c0, d8658 as c4 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8976 as c2 } from '../descriptors/data/401.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7514 as c3 } from '../descriptors/data/315.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7514 as d7514 } from '../descriptors/data/315.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7514;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DimensionsRequest"]:c0(),["MetadataRequest"]:c1(),["SharedCodec506"]:c2(),["SinglePackageCreateInputCreated"]:c3(),["WeightRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSinglePackageCreateInputCreated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
