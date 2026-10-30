import { d6008 as c0, d6017 as c4, d6026 as c5, d6027 as c6 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4268 as c1 } from '../descriptors/data/179.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d594 as c2 } from '../descriptors/data/31.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c3 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5278 as c7 } from '../descriptors/data/236.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6088 as c8, d6089 as c9, d6090 as c10, d6091 as c11, d6092 as c12 } from '../descriptors/data/281.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6108 as c13 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4331 as c14 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d594 as d594 } from '../descriptors/data/31.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d594;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["Dimensions"]:c1(),["FulfillmentSinglePackageRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1253"]:c5(),["SharedCodec1254"]:c6(),["SharedCodec322"]:c7(),["SharedCodec577"]:c8(),["SharedCodec578"]:c9(),["SharedCodec579"]:c10(),["SharedCodec580"]:c11(),["SharedCodec581"]:c12(),["SinglePackageCreateRequest"]:c13(),["Weight"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentSinglePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
