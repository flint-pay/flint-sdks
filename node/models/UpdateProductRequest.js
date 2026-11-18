import { d8024 as c0, d8025 as c1, d8016 as c3, d8017 as c4, d8015 as c5 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8031 as c2, d8036 as c6 } from '../descriptors/data/348.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10325 as c7, d10326 as c8 } from '../descriptors/data/480.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10344 as c9, d10345 as c10 } from '../descriptors/data/481.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7774 as c11 } from '../descriptors/data/328.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7774 as d7774 } from '../descriptors/data/328.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7774;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["SharedCodec3069"]:c3(),["SharedCodec3070"]:c4(),["SharedCodec3071"]:c5(),["SharedCodec3073"]:c6(),["SharedCodec3160"]:c7(),["SharedCodec3161"]:c8(),["UpdateProductOptionRequest"]:c9(),["UpdateProductOptionValueRequest"]:c10(),["UpdateProductRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
