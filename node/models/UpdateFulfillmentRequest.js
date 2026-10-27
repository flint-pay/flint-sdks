import { d3148 as c0 } from '../descriptors/data/124.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3872 as c1, d3869 as c9, d3870 as c11, d3871 as c12 } from '../descriptors/data/163.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3841 as c2, d3842 as c3, d3843 as c4, d3844 as c5, d3845 as c6 } from '../descriptors/data/161.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3432 as c7 } from '../descriptors/data/139.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3868 as c8 } from '../descriptors/data/162.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2433 as c10 } from '../descriptors/data/96.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2433 as d2433 } from '../descriptors/data/96.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2433;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["FulfillmentRecipientRequest"]:c1(),["SharedCodec1175"]:c2(),["SharedCodec1176"]:c3(),["SharedCodec1177"]:c4(),["SharedCodec1178"]:c5(),["SharedCodec1179"]:c6(),["SharedCodec951"]:c7(),["UpdateDeliveryFulfillmentDetails"]:c8(),["UpdateDigitalFulfillmentDetails"]:c9(),["UpdateFulfillmentRequest"]:c10(),["UpdatePickupFulfillmentDetails"]:c11(),["UpdateServiceFulfillmentDetails"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
