import { d8974 as c0, d8975 as c4, d8976 as c5 } from '../descriptors/data/401.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8657 as c1, d8658 as c6 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c2 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1391 as c3 } from '../descriptors/data/69.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1391 as d1391 } from '../descriptors/data/69.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1391;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["MetadataRequest"]:c2(),["PackageCreateInputCreated"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec506"]:c5(),["WeightRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageCreateInputCreated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
