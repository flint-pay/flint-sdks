import { d6008 as c0, d6017 as c5 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d310 as c1 } from '../descriptors/data/18.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4268 as c2 } from '../descriptors/data/179.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c3 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d977 as c4 } from '../descriptors/data/45.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5278 as c6 } from '../descriptors/data/236.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d2286 as c7 } from '../descriptors/data/98.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d2297 as c8 } from '../descriptors/data/99.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6091 as c9, d6092 as c10 } from '../descriptors/data/281.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4331 as c11 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d310 as d310 } from '../descriptors/data/18.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d310;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["CreateShipmentRequest"]:c1(),["Dimensions"]:c2(),["MetadataRequest"]:c3(),["PackageCreateRequest"]:c4(),["ReturnShipmentLineItemAllocationRequest"]:c5(),["SharedCodec322"]:c6(),["SharedCodec323"]:c7(),["SharedCodec324"]:c8(),["SharedCodec580"]:c9(),["SharedCodec581"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
