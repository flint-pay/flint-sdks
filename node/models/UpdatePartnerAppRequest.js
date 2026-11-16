import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8697 as c1 } from '../descriptors/data/415.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8721 as c2, d8722 as c3, d8723 as c4, d8724 as c5, d8725 as c6, d8726 as c7, d8727 as c8, d8728 as c9, d8729 as c10, d8730 as c11, d8731 as c12, d8732 as c13 } from '../descriptors/data/416.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6500 as c14 } from '../descriptors/data/284.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6500 as d6500 } from '../descriptors/data/284.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6500;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec2473"]:c2(),["SharedCodec2474"]:c3(),["SharedCodec2475"]:c4(),["SharedCodec2476"]:c5(),["SharedCodec2477"]:c6(),["SharedCodec2478"]:c7(),["SharedCodec2479"]:c8(),["SharedCodec2480"]:c9(),["SharedCodec2481"]:c10(),["SharedCodec2482"]:c11(),["SharedCodec2483"]:c12(),["SharedCodec2484"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
