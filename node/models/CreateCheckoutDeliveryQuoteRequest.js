import { d3087 as c0, d3088 as c1 } from '../descriptors/data/120.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d114 as c2 } from '../descriptors/data/4.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3165 as c3, d3151 as c4, d3152 as c11, d3153 as c12 } from '../descriptors/data/124.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3179 as c5, d3180 as c9, d3181 as c10 } from '../descriptors/data/126.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3097 as c6, d3100 as c7 } from '../descriptors/data/121.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c8 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3113 as c13, d3114 as c14, d3115 as c15 } from '../descriptors/data/122.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d114 as d114 } from '../descriptors/data/4.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d114;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec241"]:c9(),["SharedCodec242"]:c10(),["SharedCodec243"]:c11(),["SharedCodec244"]:c12(),["SharedCodec39"]:c13(),["SharedCodec40"]:c14(),["SharedCodec41"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
