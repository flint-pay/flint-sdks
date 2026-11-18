import { d396 as c0 } from '../descriptors/data/24.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10581 as c3, d10596 as c4, d10583 as c5, d10584 as c6 } from '../descriptors/data/496.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10659 as c7 } from '../descriptors/data/501.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9664 as c8 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d396 as d396 } from '../descriptors/data/24.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d396;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequestCorrection"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["SharedCodec551"]:c4(),["SharedCodec555"]:c5(),["SharedCodec556"]:c6(),["SharedCodec557"]:c7(),["SharedCodec98"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequestCorrection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
