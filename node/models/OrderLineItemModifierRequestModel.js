import { d8014 as c0 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9866 as c1 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8689 as c2, d8681 as c3, d8690 as c4, d8682 as c5, d8683 as c6 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7944 as c7 } from '../descriptors/data/342.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9866 as d9866 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9866;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["OrderLineItemModifierRequestModel"]:c1(),["SharedCodec479"]:c2(),["SharedCodec480"]:c3(),["SharedCodec481"]:c4(),["SharedCodec482"]:c5(),["SharedCodec483"]:c6(),["TextModifierRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItemModifierRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
