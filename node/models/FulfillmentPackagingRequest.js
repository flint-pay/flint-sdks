import { d8974 as c0, d8975 as c4, d8977 as c8, d8976 as c14, d8972 as c15 } from '../descriptors/data/401.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8657 as c1, d8658 as c16 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8927 as c2, d8929 as c5, d8930 as c6, d8931 as c7, d8932 as c10, d8933 as c11, d8934 as c12, d8935 as c13 } from '../descriptors/data/398.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c3 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8978 as c9 } from '../descriptors/data/402.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8927 as d8927 } from '../descriptors/data/398.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8927;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentPackagingRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1251"]:c5(),["SharedCodec1252"]:c6(),["SharedCodec1253"]:c7(),["SharedCodec1254"]:c8(),["SharedCodec1255"]:c9(),["SharedCodec1259"]:c10(),["SharedCodec1260"]:c11(),["SharedCodec2830"]:c12(),["SharedCodec2831"]:c13(),["SharedCodec506"]:c14(),["SinglePackageCreateRequest"]:c15(),["WeightRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
