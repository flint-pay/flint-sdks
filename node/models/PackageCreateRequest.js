import { d6008 as c0, d6017 as c4 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4268 as c1 } from '../descriptors/data/179.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c2 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d977 as c3 } from '../descriptors/data/45.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5278 as c5 } from '../descriptors/data/236.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6091 as c6, d6092 as c7 } from '../descriptors/data/281.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4331 as c8 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d977 as d977 } from '../descriptors/data/45.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d977;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["Dimensions"]:c1(),["MetadataRequest"]:c2(),["PackageCreateRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec322"]:c5(),["SharedCodec580"]:c6(),["SharedCodec581"]:c7(),["Weight"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
