import { d6745 as c0 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6841 as c1 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8669 as c2, d8670 as c3, d8671 as c4, d8672 as c5 } from '../descriptors/data/413.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6499 as c6 } from '../descriptors/data/284.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6499 as d6499 } from '../descriptors/data/284.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6499;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2406"]:c0(),["SharedCodec2409"]:c1(),["SharedCodec2469"]:c2(),["SharedCodec2470"]:c3(),["SharedCodec2471"]:c4(),["SharedCodec2472"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
