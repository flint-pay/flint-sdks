import { d6008 as c0, d6011 as c2, d6017 as c4, d6026 as c5, d6027 as c6 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4268 as c1 } from '../descriptors/data/179.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c3 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5278 as c7 } from '../descriptors/data/236.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6088 as c8, d6089 as c9, d6090 as c10, d6091 as c11, d6092 as c12, d6093 as c13, d6094 as c14 } from '../descriptors/data/281.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6108 as c15 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4331 as c16 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6011 as d6011 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6011;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["Dimensions"]:c1(),["FulfillmentPackagingRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1253"]:c5(),["SharedCodec1254"]:c6(),["SharedCodec322"]:c7(),["SharedCodec577"]:c8(),["SharedCodec578"]:c9(),["SharedCodec579"]:c10(),["SharedCodec580"]:c11(),["SharedCodec581"]:c12(),["SharedCodec582"]:c13(),["SharedCodec583"]:c14(),["SinglePackageCreateRequest"]:c15(),["Weight"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
