/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 658.0, "minX": 0.0, "maxY": 24848.0, "series": [{"data": [[0.0, 658.0], [0.1, 658.0], [0.2, 671.0], [0.3, 671.0], [0.4, 702.0], [0.5, 721.0], [0.6, 721.0], [0.7, 774.0], [0.8, 774.0], [0.9, 780.0], [1.0, 840.0], [1.1, 840.0], [1.2, 857.0], [1.3, 861.0], [1.4, 861.0], [1.5, 883.0], [1.6, 883.0], [1.7, 889.0], [1.8, 893.0], [1.9, 893.0], [2.0, 917.0], [2.1, 917.0], [2.2, 930.0], [2.3, 935.0], [2.4, 935.0], [2.5, 938.0], [2.6, 942.0], [2.7, 942.0], [2.8, 954.0], [2.9, 954.0], [3.0, 966.0], [3.1, 997.0], [3.2, 997.0], [3.3, 1009.0], [3.4, 1013.0], [3.5, 1013.0], [3.6, 1021.0], [3.7, 1021.0], [3.8, 1047.0], [3.9, 1056.0], [4.0, 1056.0], [4.1, 1066.0], [4.2, 1066.0], [4.3, 1093.0], [4.4, 1099.0], [4.5, 1099.0], [4.6, 1113.0], [4.7, 1121.0], [4.8, 1121.0], [4.9, 1122.0], [5.0, 1122.0], [5.1, 1130.0], [5.2, 1131.0], [5.3, 1131.0], [5.4, 1136.0], [5.5, 1136.0], [5.6, 1136.0], [5.7, 1140.0], [5.8, 1140.0], [5.9, 1140.0], [6.0, 1147.0], [6.1, 1147.0], [6.2, 1151.0], [6.3, 1151.0], [6.4, 1155.0], [6.5, 1161.0], [6.6, 1161.0], [6.7, 1168.0], [6.8, 1171.0], [6.9, 1171.0], [7.0, 1178.0], [7.1, 1178.0], [7.2, 1181.0], [7.3, 1182.0], [7.4, 1182.0], [7.5, 1192.0], [7.6, 1192.0], [7.7, 1192.0], [7.8, 1199.0], [7.9, 1199.0], [8.0, 1215.0], [8.1, 1222.0], [8.2, 1222.0], [8.3, 1226.0], [8.4, 1226.0], [8.5, 1230.0], [8.6, 1235.0], [8.7, 1235.0], [8.8, 1238.0], [8.9, 1251.0], [9.0, 1251.0], [9.1, 1263.0], [9.2, 1263.0], [9.3, 1265.0], [9.4, 1272.0], [9.5, 1272.0], [9.6, 1274.0], [9.7, 1282.0], [9.8, 1282.0], [9.9, 1283.0], [10.0, 1283.0], [10.1, 1286.0], [10.2, 1288.0], [10.3, 1288.0], [10.4, 1293.0], [10.5, 1293.0], [10.6, 1304.0], [10.7, 1323.0], [10.8, 1323.0], [10.9, 1325.0], [11.0, 1327.0], [11.1, 1327.0], [11.2, 1331.0], [11.3, 1331.0], [11.4, 1332.0], [11.5, 1349.0], [11.6, 1349.0], [11.7, 1359.0], [11.8, 1360.0], [11.9, 1360.0], [12.0, 1365.0], [12.1, 1365.0], [12.2, 1372.0], [12.3, 1376.0], [12.4, 1376.0], [12.5, 1383.0], [12.6, 1383.0], [12.7, 1395.0], [12.8, 1416.0], [12.9, 1416.0], [13.0, 1417.0], [13.1, 1440.0], [13.2, 1440.0], [13.3, 1455.0], [13.4, 1455.0], [13.5, 1480.0], [13.6, 1485.0], [13.7, 1485.0], [13.8, 1487.0], [13.9, 1508.0], [14.0, 1508.0], [14.1, 1510.0], [14.2, 1510.0], [14.3, 1522.0], [14.4, 1522.0], [14.5, 1522.0], [14.6, 1535.0], [14.7, 1535.0], [14.8, 1552.0], [14.9, 1555.0], [15.0, 1555.0], [15.1, 1560.0], [15.2, 1566.0], [15.3, 1566.0], [15.4, 1578.0], [15.5, 1578.0], [15.6, 1592.0], [15.7, 1594.0], [15.8, 1594.0], [15.9, 1611.0], [16.0, 1612.0], [16.1, 1612.0], [16.2, 1627.0], [16.3, 1627.0], [16.4, 1628.0], [16.5, 1631.0], [16.6, 1631.0], [16.7, 1637.0], [16.8, 1637.0], [16.9, 1640.0], [17.0, 1651.0], [17.1, 1651.0], [17.2, 1656.0], [17.3, 1670.0], [17.4, 1670.0], [17.5, 1678.0], [17.6, 1678.0], [17.7, 1686.0], [17.8, 1688.0], [17.9, 1688.0], [18.0, 1690.0], [18.1, 1711.0], [18.2, 1711.0], [18.3, 1719.0], [18.4, 1719.0], [18.5, 1728.0], [18.6, 1728.0], [18.7, 1728.0], [18.8, 1737.0], [18.9, 1737.0], [19.0, 1739.0], [19.1, 1742.0], [19.2, 1742.0], [19.3, 1753.0], [19.4, 1755.0], [19.5, 1755.0], [19.6, 1761.0], [19.7, 1761.0], [19.8, 1764.0], [19.9, 1775.0], [20.0, 1775.0], [20.1, 1779.0], [20.2, 1788.0], [20.3, 1788.0], [20.4, 1797.0], [20.5, 1797.0], [20.6, 1802.0], [20.7, 1853.0], [20.8, 1853.0], [20.9, 1854.0], [21.0, 1854.0], [21.1, 1870.0], [21.2, 1871.0], [21.3, 1871.0], [21.4, 1883.0], [21.5, 1884.0], [21.6, 1884.0], [21.7, 1898.0], [21.8, 1898.0], [21.9, 1909.0], [22.0, 1922.0], [22.1, 1922.0], [22.2, 1933.0], [22.3, 1942.0], [22.4, 1942.0], [22.5, 1959.0], [22.6, 1959.0], [22.7, 1965.0], [22.8, 1972.0], [22.9, 1972.0], [23.0, 1976.0], [23.1, 1976.0], [23.2, 1985.0], [23.3, 2000.0], [23.4, 2000.0], [23.5, 2016.0], [23.6, 2019.0], [23.7, 2019.0], [23.8, 2030.0], [23.9, 2030.0], [24.0, 2031.0], [24.1, 2031.0], [24.2, 2031.0], [24.3, 2039.0], [24.4, 2041.0], [24.5, 2041.0], [24.6, 2053.0], [24.7, 2053.0], [24.8, 2070.0], [24.9, 2073.0], [25.0, 2073.0], [25.1, 2080.0], [25.2, 2080.0], [25.3, 2101.0], [25.4, 2107.0], [25.5, 2107.0], [25.6, 2112.0], [25.7, 2117.0], [25.8, 2117.0], [25.9, 2144.0], [26.0, 2144.0], [26.1, 2146.0], [26.2, 2152.0], [26.3, 2152.0], [26.4, 2169.0], [26.5, 2183.0], [26.6, 2183.0], [26.7, 2191.0], [26.8, 2191.0], [26.9, 2194.0], [27.0, 2197.0], [27.1, 2197.0], [27.2, 2204.0], [27.3, 2204.0], [27.4, 2206.0], [27.5, 2210.0], [27.6, 2210.0], [27.7, 2211.0], [27.8, 2237.0], [27.9, 2237.0], [28.0, 2238.0], [28.1, 2238.0], [28.2, 2241.0], [28.3, 2248.0], [28.4, 2248.0], [28.5, 2249.0], [28.6, 2252.0], [28.7, 2252.0], [28.8, 2253.0], [28.9, 2253.0], [29.0, 2267.0], [29.1, 2271.0], [29.2, 2271.0], [29.3, 2292.0], [29.4, 2292.0], [29.5, 2299.0], [29.6, 2311.0], [29.7, 2311.0], [29.8, 2319.0], [29.9, 2334.0], [30.0, 2334.0], [30.1, 2344.0], [30.2, 2344.0], [30.3, 2351.0], [30.4, 2356.0], [30.5, 2356.0], [30.6, 2384.0], [30.7, 2411.0], [30.8, 2411.0], [30.9, 2412.0], [31.0, 2412.0], [31.1, 2415.0], [31.2, 2419.0], [31.3, 2419.0], [31.4, 2425.0], [31.5, 2425.0], [31.6, 2447.0], [31.7, 2459.0], [31.8, 2459.0], [31.9, 2545.0], [32.0, 2568.0], [32.1, 2568.0], [32.2, 2573.0], [32.3, 2573.0], [32.4, 2573.0], [32.5, 2613.0], [32.6, 2613.0], [32.7, 2658.0], [32.8, 2682.0], [32.9, 2682.0], [33.0, 2688.0], [33.1, 2688.0], [33.2, 2703.0], [33.3, 2709.0], [33.4, 2709.0], [33.5, 2733.0], [33.6, 2733.0], [33.7, 2747.0], [33.8, 2755.0], [33.9, 2755.0], [34.0, 2761.0], [34.1, 2773.0], [34.2, 2773.0], [34.3, 2778.0], [34.4, 2778.0], [34.5, 2788.0], [34.6, 2803.0], [34.7, 2803.0], [34.8, 2804.0], [34.9, 2816.0], [35.0, 2816.0], [35.1, 2833.0], [35.2, 2833.0], [35.3, 2862.0], [35.4, 2872.0], [35.5, 2872.0], [35.6, 2884.0], [35.7, 2884.0], [35.8, 2910.0], [35.9, 2911.0], [36.0, 2911.0], [36.1, 2944.0], [36.2, 2952.0], [36.3, 2952.0], [36.4, 3016.0], [36.5, 3016.0], [36.6, 3090.0], [36.7, 3094.0], [36.8, 3094.0], [36.9, 3109.0], [37.0, 3150.0], [37.1, 3150.0], [37.2, 3165.0], [37.3, 3165.0], [37.4, 3189.0], [37.5, 3202.0], [37.6, 3202.0], [37.7, 3218.0], [37.8, 3218.0], [37.9, 3231.0], [38.0, 3237.0], [38.1, 3237.0], [38.2, 3261.0], [38.3, 3266.0], [38.4, 3266.0], [38.5, 3269.0], [38.6, 3269.0], [38.7, 3277.0], [38.8, 3286.0], [38.9, 3286.0], [39.0, 3307.0], [39.1, 3339.0], [39.2, 3339.0], [39.3, 3360.0], [39.4, 3360.0], [39.5, 3362.0], [39.6, 3370.0], [39.7, 3370.0], [39.8, 3373.0], [39.9, 3373.0], [40.0, 3385.0], [40.1, 3394.0], [40.2, 3394.0], [40.3, 3407.0], [40.4, 3413.0], [40.5, 3413.0], [40.6, 3415.0], [40.7, 3415.0], [40.8, 3427.0], [40.9, 3443.0], [41.0, 3443.0], [41.1, 3468.0], [41.2, 3469.0], [41.3, 3469.0], [41.4, 3479.0], [41.5, 3479.0], [41.6, 3515.0], [41.7, 3535.0], [41.8, 3535.0], [41.9, 3547.0], [42.0, 3547.0], [42.1, 3557.0], [42.2, 3590.0], [42.3, 3590.0], [42.4, 3591.0], [42.5, 3602.0], [42.6, 3602.0], [42.7, 3609.0], [42.8, 3609.0], [42.9, 3615.0], [43.0, 3622.0], [43.1, 3622.0], [43.2, 3656.0], [43.3, 3671.0], [43.4, 3671.0], [43.5, 3704.0], [43.6, 3704.0], [43.7, 3719.0], [43.8, 3720.0], [43.9, 3720.0], [44.0, 3734.0], [44.1, 3734.0], [44.2, 3767.0], [44.3, 3772.0], [44.4, 3772.0], [44.5, 3789.0], [44.6, 3800.0], [44.7, 3800.0], [44.8, 3801.0], [44.9, 3801.0], [45.0, 3830.0], [45.1, 3874.0], [45.2, 3874.0], [45.3, 3874.0], [45.4, 3877.0], [45.5, 3877.0], [45.6, 3906.0], [45.7, 3906.0], [45.8, 3907.0], [45.9, 3922.0], [46.0, 3922.0], [46.1, 3926.0], [46.2, 3926.0], [46.3, 3967.0], [46.4, 3978.0], [46.5, 3978.0], [46.6, 3982.0], [46.7, 3993.0], [46.8, 3993.0], [46.9, 3997.0], [47.0, 3997.0], [47.1, 4009.0], [47.2, 4016.0], [47.3, 4016.0], [47.4, 4018.0], [47.5, 4052.0], [47.6, 4052.0], [47.7, 4057.0], [47.8, 4057.0], [47.9, 4060.0], [48.0, 4065.0], [48.1, 4065.0], [48.2, 4120.0], [48.3, 4120.0], [48.4, 4147.0], [48.5, 4148.0], [48.6, 4148.0], [48.7, 4150.0], [48.8, 4156.0], [48.9, 4156.0], [49.0, 4169.0], [49.1, 4169.0], [49.2, 4184.0], [49.3, 4184.0], [49.4, 4184.0], [49.5, 4191.0], [49.6, 4214.0], [49.7, 4214.0], [49.8, 4227.0], [49.9, 4227.0], [50.0, 4242.0], [50.1, 4256.0], [50.2, 4256.0], [50.3, 4260.0], [50.4, 4260.0], [50.5, 4271.0], [50.6, 4278.0], [50.7, 4278.0], [50.8, 4282.0], [50.9, 4287.0], [51.0, 4287.0], [51.1, 4293.0], [51.2, 4293.0], [51.3, 4391.0], [51.4, 4439.0], [51.5, 4439.0], [51.6, 4477.0], [51.7, 4525.0], [51.8, 4525.0], [51.9, 4530.0], [52.0, 4530.0], [52.1, 4536.0], [52.2, 4561.0], [52.3, 4561.0], [52.4, 4592.0], [52.5, 4592.0], [52.6, 4642.0], [52.7, 4644.0], [52.8, 4644.0], [52.9, 4656.0], [53.0, 4683.0], [53.1, 4683.0], [53.2, 4685.0], [53.3, 4685.0], [53.4, 4688.0], [53.5, 4704.0], [53.6, 4704.0], [53.7, 4721.0], [53.8, 4757.0], [53.9, 4757.0], [54.0, 4765.0], [54.1, 4765.0], [54.2, 4796.0], [54.3, 4803.0], [54.4, 4803.0], [54.5, 4847.0], [54.6, 4847.0], [54.7, 4862.0], [54.8, 4865.0], [54.9, 4865.0], [55.0, 4881.0], [55.1, 4899.0], [55.2, 4899.0], [55.3, 4914.0], [55.4, 4914.0], [55.5, 4927.0], [55.6, 4946.0], [55.7, 4946.0], [55.8, 4959.0], [55.9, 4970.0], [56.0, 4970.0], [56.1, 4988.0], [56.2, 4988.0], [56.3, 4998.0], [56.4, 5004.0], [56.5, 5004.0], [56.6, 5041.0], [56.7, 5041.0], [56.8, 5065.0], [56.9, 5080.0], [57.0, 5080.0], [57.1, 5120.0], [57.2, 5128.0], [57.3, 5128.0], [57.4, 5139.0], [57.5, 5139.0], [57.6, 5164.0], [57.7, 5173.0], [57.8, 5173.0], [57.9, 5186.0], [58.0, 5194.0], [58.1, 5194.0], [58.2, 5206.0], [58.3, 5206.0], [58.4, 5223.0], [58.5, 5256.0], [58.6, 5256.0], [58.7, 5296.0], [58.8, 5296.0], [58.9, 5299.0], [59.0, 5302.0], [59.1, 5302.0], [59.2, 5304.0], [59.3, 5316.0], [59.4, 5316.0], [59.5, 5335.0], [59.6, 5335.0], [59.7, 5339.0], [59.8, 5370.0], [59.9, 5370.0], [60.0, 5372.0], [60.1, 5382.0], [60.2, 5382.0], [60.3, 5409.0], [60.4, 5409.0], [60.5, 5420.0], [60.6, 5422.0], [60.7, 5422.0], [60.8, 5452.0], [60.9, 5452.0], [61.0, 5530.0], [61.1, 5542.0], [61.2, 5542.0], [61.3, 5580.0], [61.4, 5591.0], [61.5, 5591.0], [61.6, 5592.0], [61.7, 5592.0], [61.8, 5619.0], [61.9, 5632.0], [62.0, 5632.0], [62.1, 5655.0], [62.2, 5687.0], [62.3, 5687.0], [62.4, 5697.0], [62.5, 5697.0], [62.6, 5717.0], [62.7, 5788.0], [62.8, 5788.0], [62.9, 5839.0], [63.0, 5839.0], [63.1, 5851.0], [63.2, 5868.0], [63.3, 5868.0], [63.4, 5876.0], [63.5, 5890.0], [63.6, 5890.0], [63.7, 5900.0], [63.8, 5900.0], [63.9, 5984.0], [64.0, 5984.0], [64.1, 5984.0], [64.2, 5998.0], [64.3, 6014.0], [64.4, 6014.0], [64.5, 6035.0], [64.6, 6035.0], [64.7, 6043.0], [64.8, 6079.0], [64.9, 6079.0], [65.0, 6122.0], [65.1, 6122.0], [65.2, 6145.0], [65.3, 6163.0], [65.4, 6163.0], [65.5, 6170.0], [65.6, 6239.0], [65.7, 6239.0], [65.8, 6253.0], [65.9, 6253.0], [66.0, 6264.0], [66.1, 6291.0], [66.2, 6291.0], [66.3, 6350.0], [66.4, 6371.0], [66.5, 6371.0], [66.6, 6482.0], [66.7, 6482.0], [66.8, 6482.0], [66.9, 6554.0], [67.0, 6554.0], [67.1, 6577.0], [67.2, 6577.0], [67.3, 6608.0], [67.4, 6622.0], [67.5, 6622.0], [67.6, 6648.0], [67.7, 6653.0], [67.8, 6653.0], [67.9, 6675.0], [68.0, 6675.0], [68.1, 6716.0], [68.2, 6743.0], [68.3, 6743.0], [68.4, 6747.0], [68.5, 6752.0], [68.6, 6752.0], [68.7, 6754.0], [68.8, 6754.0], [68.9, 6766.0], [69.0, 6767.0], [69.1, 6767.0], [69.2, 6795.0], [69.3, 6795.0], [69.4, 6826.0], [69.5, 6843.0], [69.6, 6843.0], [69.7, 6895.0], [69.8, 6910.0], [69.9, 6910.0], [70.0, 6986.0], [70.1, 6986.0], [70.2, 6992.0], [70.3, 7008.0], [70.4, 7008.0], [70.5, 7082.0], [70.6, 7136.0], [70.7, 7136.0], [70.8, 7138.0], [70.9, 7138.0], [71.0, 7178.0], [71.1, 7211.0], [71.2, 7211.0], [71.3, 7251.0], [71.4, 7251.0], [71.5, 7272.0], [71.6, 7299.0], [71.7, 7299.0], [71.8, 7309.0], [71.9, 7373.0], [72.0, 7373.0], [72.1, 7393.0], [72.2, 7393.0], [72.3, 7485.0], [72.4, 7509.0], [72.5, 7509.0], [72.6, 7568.0], [72.7, 7572.0], [72.8, 7572.0], [72.9, 7600.0], [73.0, 7600.0], [73.1, 7769.0], [73.2, 7802.0], [73.3, 7802.0], [73.4, 7838.0], [73.5, 7838.0], [73.6, 7842.0], [73.7, 7870.0], [73.8, 7870.0], [73.9, 7886.0], [74.0, 7887.0], [74.1, 7887.0], [74.2, 7890.0], [74.3, 7890.0], [74.4, 7905.0], [74.5, 7940.0], [74.6, 7940.0], [74.7, 8028.0], [74.8, 8057.0], [74.9, 8057.0], [75.0, 8102.0], [75.1, 8102.0], [75.2, 8118.0], [75.3, 8177.0], [75.4, 8177.0], [75.5, 8233.0], [75.6, 8233.0], [75.7, 8245.0], [75.8, 8299.0], [75.9, 8299.0], [76.0, 8363.0], [76.1, 8394.0], [76.2, 8394.0], [76.3, 8400.0], [76.4, 8400.0], [76.5, 8425.0], [76.6, 8427.0], [76.7, 8427.0], [76.8, 8539.0], [76.9, 8565.0], [77.0, 8565.0], [77.1, 8591.0], [77.2, 8591.0], [77.3, 8604.0], [77.4, 8660.0], [77.5, 8660.0], [77.6, 8664.0], [77.7, 8664.0], [77.8, 8703.0], [77.9, 8703.0], [78.0, 8703.0], [78.1, 8773.0], [78.2, 8805.0], [78.3, 8805.0], [78.4, 8819.0], [78.5, 8819.0], [78.6, 8827.0], [78.7, 8829.0], [78.8, 8829.0], [78.9, 8899.0], [79.0, 8981.0], [79.1, 8981.0], [79.2, 8991.0], [79.3, 8991.0], [79.4, 9033.0], [79.5, 9066.0], [79.6, 9066.0], [79.7, 9086.0], [79.8, 9086.0], [79.9, 9097.0], [80.0, 9128.0], [80.1, 9128.0], [80.2, 9130.0], [80.3, 9133.0], [80.4, 9133.0], [80.5, 9173.0], [80.6, 9173.0], [80.7, 9205.0], [80.8, 9226.0], [80.9, 9226.0], [81.0, 9259.0], [81.1, 9267.0], [81.2, 9267.0], [81.3, 9292.0], [81.4, 9292.0], [81.5, 9306.0], [81.6, 9326.0], [81.7, 9326.0], [81.8, 9336.0], [81.9, 9336.0], [82.0, 9338.0], [82.1, 9339.0], [82.2, 9339.0], [82.3, 9358.0], [82.4, 9381.0], [82.5, 9381.0], [82.6, 9398.0], [82.7, 9398.0], [82.8, 9486.0], [82.9, 9637.0], [83.0, 9637.0], [83.1, 9781.0], [83.2, 9782.0], [83.3, 9782.0], [83.4, 9845.0], [83.5, 9845.0], [83.6, 9876.0], [83.7, 9918.0], [83.8, 9918.0], [83.9, 9932.0], [84.0, 9932.0], [84.1, 9962.0], [84.2, 10018.0], [84.3, 10018.0], [84.4, 10029.0], [84.5, 10036.0], [84.6, 10036.0], [84.7, 10058.0], [84.8, 10058.0], [84.9, 10172.0], [85.0, 10232.0], [85.1, 10232.0], [85.2, 10239.0], [85.3, 10264.0], [85.4, 10264.0], [85.5, 10268.0], [85.6, 10268.0], [85.7, 10402.0], [85.8, 10406.0], [85.9, 10406.0], [86.0, 10410.0], [86.1, 10410.0], [86.2, 10493.0], [86.3, 10518.0], [86.4, 10518.0], [86.5, 10574.0], [86.6, 10607.0], [86.7, 10607.0], [86.8, 10679.0], [86.9, 10679.0], [87.0, 10743.0], [87.1, 10747.0], [87.2, 10747.0], [87.3, 10787.0], [87.4, 10795.0], [87.5, 10795.0], [87.6, 10841.0], [87.7, 10841.0], [87.8, 10861.0], [87.9, 11053.0], [88.0, 11053.0], [88.1, 11060.0], [88.2, 11060.0], [88.3, 11113.0], [88.4, 11131.0], [88.5, 11131.0], [88.6, 11143.0], [88.7, 11148.0], [88.8, 11148.0], [88.9, 11178.0], [89.0, 11178.0], [89.1, 11356.0], [89.2, 11413.0], [89.3, 11413.0], [89.4, 11511.0], [89.5, 11642.0], [89.6, 11642.0], [89.7, 11682.0], [89.8, 11682.0], [89.9, 11747.0], [90.0, 11750.0], [90.1, 11750.0], [90.2, 11754.0], [90.3, 11754.0], [90.4, 11847.0], [90.5, 11937.0], [90.6, 11937.0], [90.7, 12007.0], [90.8, 12132.0], [90.9, 12132.0], [91.0, 12173.0], [91.1, 12173.0], [91.2, 12176.0], [91.3, 12289.0], [91.4, 12289.0], [91.5, 12295.0], [91.6, 12455.0], [91.7, 12455.0], [91.8, 12570.0], [91.9, 12570.0], [92.0, 12584.0], [92.1, 12619.0], [92.2, 12619.0], [92.3, 12744.0], [92.4, 12744.0], [92.5, 12781.0], [92.6, 12831.0], [92.7, 12831.0], [92.8, 12832.0], [92.9, 12889.0], [93.0, 12889.0], [93.1, 13080.0], [93.2, 13080.0], [93.3, 13161.0], [93.4, 13171.0], [93.5, 13171.0], [93.6, 13221.0], [93.7, 13326.0], [93.8, 13326.0], [93.9, 13416.0], [94.0, 13416.0], [94.1, 13445.0], [94.2, 13523.0], [94.3, 13523.0], [94.4, 13751.0], [94.5, 13751.0], [94.6, 13828.0], [94.7, 14240.0], [94.8, 14240.0], [94.9, 14251.0], [95.0, 14268.0], [95.1, 14268.0], [95.2, 14657.0], [95.3, 14657.0], [95.4, 14781.0], [95.5, 15106.0], [95.6, 15106.0], [95.7, 15289.0], [95.8, 15292.0], [95.9, 15292.0], [96.0, 15345.0], [96.1, 15345.0], [96.2, 15383.0], [96.3, 15666.0], [96.4, 15666.0], [96.5, 15790.0], [96.6, 15790.0], [96.7, 15889.0], [96.8, 15926.0], [96.9, 15926.0], [97.0, 16030.0], [97.1, 16289.0], [97.2, 16289.0], [97.3, 16345.0], [97.4, 16345.0], [97.5, 16345.0], [97.6, 16395.0], [97.7, 16395.0], [97.8, 16887.0], [97.9, 17130.0], [98.0, 17130.0], [98.1, 17336.0], [98.2, 17336.0], [98.3, 17893.0], [98.4, 18006.0], [98.5, 18006.0], [98.6, 19117.0], [98.7, 19117.0], [98.8, 19159.0], [98.9, 19167.0], [99.0, 19167.0], [99.1, 20072.0], [99.2, 20941.0], [99.3, 20941.0], [99.4, 21212.0], [99.5, 21212.0], [99.6, 23070.0], [99.7, 23431.0], [99.8, 23431.0], [99.9, 24848.0], [100.0, 24848.0]], "isOverall": false, "label": "GET / Startseite laden", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 21.0, "series": [{"data": [[600.0, 2.0], [700.0, 4.0], [800.0, 6.0], [900.0, 8.0], [1000.0, 8.0], [1100.0, 21.0], [1200.0, 16.0], [1300.0, 14.0], [1400.0, 7.0], [1500.0, 12.0], [1600.0, 14.0], [1700.0, 15.0], [1800.0, 8.0], [1900.0, 9.0], [2000.0, 12.0], [2100.0, 12.0], [2200.0, 15.0], [2300.0, 7.0], [2400.0, 7.0], [2500.0, 4.0], [2600.0, 4.0], [2800.0, 7.0], [2700.0, 9.0], [2900.0, 4.0], [3000.0, 3.0], [3100.0, 4.0], [3300.0, 8.0], [3200.0, 9.0], [3400.0, 8.0], [3500.0, 6.0], [3700.0, 7.0], [3600.0, 6.0], [3800.0, 6.0], [3900.0, 9.0], [4000.0, 7.0], [4100.0, 9.0], [4200.0, 10.0], [4300.0, 1.0], [4500.0, 5.0], [4400.0, 2.0], [4600.0, 6.0], [4800.0, 6.0], [4700.0, 5.0], [5000.0, 4.0], [5100.0, 7.0], [4900.0, 7.0], [5200.0, 5.0], [5300.0, 8.0], [5400.0, 4.0], [5500.0, 5.0], [5600.0, 5.0], [5800.0, 5.0], [5700.0, 2.0], [6000.0, 4.0], [6100.0, 4.0], [5900.0, 4.0], [6300.0, 2.0], [6200.0, 4.0], [6400.0, 2.0], [6600.0, 5.0], [6500.0, 2.0], [6700.0, 8.0], [6900.0, 3.0], [6800.0, 3.0], [7100.0, 3.0], [7000.0, 2.0], [7300.0, 3.0], [7400.0, 1.0], [7200.0, 4.0], [7500.0, 3.0], [7600.0, 1.0], [7900.0, 2.0], [7800.0, 7.0], [7700.0, 1.0], [8000.0, 2.0], [8100.0, 3.0], [8500.0, 3.0], [8600.0, 3.0], [8700.0, 3.0], [8400.0, 3.0], [8200.0, 3.0], [8300.0, 2.0], [8800.0, 5.0], [9000.0, 4.0], [8900.0, 2.0], [9100.0, 4.0], [9200.0, 5.0], [9600.0, 1.0], [9300.0, 8.0], [9400.0, 1.0], [9700.0, 2.0], [9800.0, 2.0], [10000.0, 4.0], [10200.0, 4.0], [10100.0, 1.0], [9900.0, 3.0], [10700.0, 4.0], [10400.0, 4.0], [10600.0, 2.0], [10500.0, 2.0], [11000.0, 2.0], [10800.0, 2.0], [11100.0, 5.0], [11600.0, 2.0], [11700.0, 3.0], [11400.0, 1.0], [11300.0, 1.0], [11500.0, 1.0], [12200.0, 2.0], [12100.0, 3.0], [12000.0, 1.0], [11800.0, 1.0], [11900.0, 1.0], [12600.0, 1.0], [12700.0, 2.0], [12400.0, 1.0], [12500.0, 2.0], [12800.0, 3.0], [13000.0, 1.0], [13200.0, 1.0], [13100.0, 2.0], [13300.0, 1.0], [13800.0, 1.0], [13400.0, 2.0], [13700.0, 1.0], [13500.0, 1.0], [14200.0, 3.0], [14700.0, 1.0], [14600.0, 1.0], [15200.0, 2.0], [15300.0, 2.0], [15100.0, 1.0], [15600.0, 1.0], [15800.0, 1.0], [15700.0, 1.0], [15900.0, 1.0], [16200.0, 1.0], [16300.0, 3.0], [16000.0, 1.0], [16800.0, 1.0], [17100.0, 1.0], [17300.0, 1.0], [18000.0, 1.0], [17800.0, 1.0], [19100.0, 3.0], [20000.0, 1.0], [20900.0, 1.0], [21200.0, 1.0], [23400.0, 1.0], [23000.0, 1.0], [24800.0, 1.0]], "isOverall": false, "label": "GET / Startseite laden", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 86.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 533.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 86.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 533.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 60.416, "minX": 1.75280784E12, "maxY": 95.45951417004049, "series": [{"data": [[1.7528079E12, 60.416], [1.75280784E12, 95.45951417004049]], "isOverall": false, "label": "Testfall_1_Spike_Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7528079E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 917.0, "minX": 1.0, "maxY": 19167.0, "series": [{"data": [[3.0, 8672.0], [4.0, 10239.0], [5.0, 6035.0], [6.0, 10264.0], [7.0, 10861.0], [8.0, 15289.0], [9.0, 10679.0], [10.0, 11148.0], [11.0, 6043.0], [12.0, 5998.0], [13.0, 7393.0], [14.0, 15106.0], [15.0, 7138.0], [16.0, 11511.0], [17.0, 10493.0], [18.0, 10574.0], [19.0, 8660.0], [20.0, 8805.0], [21.0, 10410.0], [22.0, 7802.0], [23.0, 10607.0], [24.0, 5984.0], [25.0, 4688.0], [26.0, 8703.0], [27.0, 13326.0], [28.0, 9932.0], [29.0, 2920.5], [30.0, 3905.6666666666665], [31.0, 6910.0], [33.0, 14240.0], [32.0, 5120.0], [35.0, 5851.0], [34.0, 10058.0], [36.0, 2443.0], [37.0, 5505.0], [39.0, 2401.0], [38.0, 9259.0], [41.0, 3726.5], [40.0, 5372.0], [42.0, 3865.3333333333335], [43.0, 10029.0], [45.0, 2957.0], [44.0, 19167.0], [46.0, 3710.0], [47.0, 2994.0], [48.0, 3485.5], [49.0, 5173.0], [51.0, 2684.5], [50.0, 7842.0], [52.0, 2535.3333333333335], [53.0, 2935.0], [55.0, 2386.0], [54.0, 5697.0], [56.0, 3742.6666666666665], [57.0, 3626.0], [59.0, 8394.0], [58.0, 6608.0], [61.0, 8206.0], [60.0, 5335.0], [63.0, 3279.2], [65.0, 2161.0], [66.0, 4244.0], [67.0, 11750.0], [64.0, 6482.0], [69.0, 3615.75], [70.0, 4255.0], [71.0, 4282.0], [68.0, 2803.0], [72.0, 6573.5], [73.0, 3276.5], [74.0, 4838.5], [75.0, 2334.0], [78.0, 2684.0], [79.0, 3093.0], [77.0, 2169.0], [76.0, 1728.0], [80.0, 2275.3333333333335], [81.0, 1780.25], [82.0, 2228.5], [83.0, 1677.0], [84.0, 4991.0], [86.0, 1819.0], [87.0, 3879.0], [85.0, 1323.0], [88.0, 7449.0], [89.0, 4863.0], [90.0, 1645.0], [91.0, 10747.0], [94.0, 7382.0], [95.0, 2382.5], [93.0, 1739.0], [92.0, 1274.0], [96.0, 1889.0], [97.0, 9599.5], [99.0, 3767.0], [98.0, 917.0], [100.0, 5774.82236842105], [1.0, 8028.0]], "isOverall": false, "label": "GET / Startseite laden", "isController": false}, {"data": [[88.38287560581591, 5583.843295638118]], "isOverall": false, "label": "GET / Startseite laden-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1450.0, "minX": 1.75280784E12, "maxY": 70079.55, "series": [{"data": [[1.7528079E12, 70079.55], [1.75280784E12, 68344.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7528079E12, 1450.0], [1.75280784E12, 5730.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7528079E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 5192.449392712544, "minX": 1.75280784E12, "maxY": 7130.6320000000005, "series": [{"data": [[1.7528079E12, 7130.6320000000005], [1.75280784E12, 5192.449392712544]], "isOverall": false, "label": "GET / Startseite laden", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7528079E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 5191.967611336036, "minX": 1.75280784E12, "maxY": 7101.144000000003, "series": [{"data": [[1.7528079E12, 7101.144000000003], [1.75280784E12, 5191.967611336036]], "isOverall": false, "label": "GET / Startseite laden", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7528079E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 226.49600000000004, "minX": 1.75280784E12, "maxY": 1091.0850202429147, "series": [{"data": [[1.7528079E12, 226.49600000000004], [1.75280784E12, 1091.0850202429147]], "isOverall": false, "label": "GET / Startseite laden", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7528079E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 658.0, "minX": 1.75280784E12, "maxY": 24848.0, "series": [{"data": [[1.7528079E12, 24848.0], [1.75280784E12, 23431.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7528079E12, 721.0], [1.75280784E12, 658.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7528079E12, 11824.800000000001], [1.75280784E12, 11750.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7528079E12, 23370.93999999997], [1.75280784E12, 20115.45000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7528079E12, 6608.0], [1.75280784E12, 3769.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7528079E12, 14540.299999999996], [1.75280784E12, 14383.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7528079E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1013.0, "minX": 1.0, "maxY": 10251.5, "series": [{"data": [[10.0, 5259.5], [11.0, 6163.0], [12.0, 3769.5], [13.0, 4083.0], [14.0, 3146.5], [15.0, 5851.0], [1.0, 1013.0], [16.0, 5219.0], [17.0, 3535.0], [18.0, 2112.0], [19.0, 5398.0], [20.0, 5786.5], [21.0, 5206.0], [24.0, 10251.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1007.0, "minX": 1.0, "maxY": 10222.0, "series": [{"data": [[10.0, 5259.5], [11.0, 6163.0], [12.0, 3769.0], [13.0, 4082.5], [14.0, 3145.5], [15.0, 5821.0], [1.0, 1007.0], [16.0, 5218.5], [17.0, 3535.0], [18.0, 2111.5], [19.0, 5382.5], [20.0, 5754.0], [21.0, 5172.0], [24.0, 10222.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.45, "minX": 1.75280784E12, "maxY": 9.866666666666667, "series": [{"data": [[1.7528079E12, 0.45], [1.75280784E12, 9.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7528079E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.0833333333333335, "minX": 1.75280784E12, "maxY": 8.233333333333333, "series": [{"data": [[1.7528079E12, 2.0833333333333335], [1.75280784E12, 8.233333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7528079E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.0833333333333335, "minX": 1.75280784E12, "maxY": 8.233333333333333, "series": [{"data": [[1.7528079E12, 2.0833333333333335], [1.75280784E12, 8.233333333333333]], "isOverall": false, "label": "GET / Startseite laden-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7528079E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.0833333333333335, "minX": 1.75280784E12, "maxY": 8.233333333333333, "series": [{"data": [[1.7528079E12, 2.0833333333333335], [1.75280784E12, 8.233333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7528079E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

