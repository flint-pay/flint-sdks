import { d264 as c0 } from '../descriptors/data/13.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8441 as c1 } from '../descriptors/data/371.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c2 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d264 as d264 } from '../descriptors/data/13.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d264;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryLocationSetRequest"]:c0(),["DeliveryLocationSetConfiguration"]:c1(),["MetadataRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
