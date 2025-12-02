import { Room } from "@/types/Room";

export const ROOMS: Room[] = [
  {
    id: "backside-staircase",
    name: "Backside Staircase",
    fill: "#B5F1C2",
    stroke: "#429554",
    doors: [{ id: "backside-staircase", x: 508, y: 207 }],
    element: (
      <>
        <path
          d="M348.5 296.5V177H405.5H420H435H452.5H468.5H481.5H497H520V296.5H514H497H481.5H468.5H452.5H435H420H405.5H348.5Z"
          fill="#B5F1C2"
        />
        <path
          d="M405.5 177H348.5V296.5H405.5M405.5 177H420M405.5 177V232.5M405.5 296.5H420M405.5 296.5V240M420 296.5V177M420 296.5H435M420 177H435M435 177V296.5M435 177H452.5M435 296.5H452.5M452.5 296.5V177M452.5 296.5H468.5M452.5 177H468.5M468.5 177V296.5M468.5 177H481.5M468.5 296.5H481.5M481.5 296.5V177M481.5 296.5H497M481.5 177H497M497 177H520V296.5H514M497 177V296.5M497 296.5H514M514 296.5V212.5V179L519 178V232.5M405.5 240H519V232.5M405.5 240V232.5M405.5 232.5H519"
          stroke="#429554"
          strokeWidth="4"
        />
        <text
          id="Staircase_2"
          transform="matrix(0 -1 1 0 366 282)"
          fill="black"
          xmlSpace="preserve"
          fontSize="20"
        >
          <tspan x="0" y="22.2727">
            Staircase
          </tspan>
        </text>
      </>
    ),
  },
  {
    id: "lift",
    name: "Lift",
    fill: "#B5F1C2",
    stroke: "#429554",
    doors: [{ id: "lift-door", x: 649, y: 244 }],
    element: (
      <>
        <path
          d="M641 272V222H646.5V203H729.5V301H646.5V272H641Z"
          fill="#B5F1C2"
          stroke="#429554"
          strokeWidth="4"
        />
        <text
          id="Lift_2"
          transform="translate(703.413 232.383) rotate(90.609)"
          fill="black"
          xmlSpace="preserve"
        >
          <tspan x="0" y="26.7273">
            Lift
          </tspan>
        </text>
      </>
    ),
  },
  {
    id: "exhibition-area",
    name: "Exhibition Area",
    fill: "#F5CFFF",
    stroke: "#AA30CB",
    doors: [
      {
        id: "exhibition-entrance-1",
        x: 342,
        y: 1292,
      },
    ],
    element: (
      <>
        <path
          d="M229 1152L223.5 1116.5V1095H289V1087H521V838.5V375H546.5V406.5H622V375H643.5V770.5H891V795.5V806.5L888 829C886.167 837.5 882.5 854.8 882.5 856C882.5 857.2 875.167 882.833 871.5 895.5L863.5 911.5L857 925C857.167 928.333 857.4 935.6 857 938C856.6 940.4 858.5 949.333 859.5 953.5L863.5 964L868.5 980L854.5 989L827 1009L789.5 1045.5V1183.5L755.5 1223.5L767 1242L732 1282L849.5 1397.5L826 1419.5L809.5 1402H799.5L699.5 1316L648 1369.5H596.5L597 1282H574.5V1297V1425H563H534L496.5 1419.5L455 1407L422.5 1392.5L391.5 1373.5L371.5 1358.5L348.5 1337.5L366.5 1316L330 1268L300 1289.5L281 1260.5L263.5 1233.5L248.5 1203L237.5 1178L229 1152Z"
          fill="#F5CFFF"
        />
        <path
          d="M223.5 1087V1095M223.5 1095V1116.5L229 1152L237.5 1178L248.5 1203L263.5 1233.5L281 1260.5L300 1289.5L330 1268L366.5 1316L348.5 1337.5L371.5 1358.5L391.5 1373.5L422.5 1392.5L455 1407L496.5 1419.5L534 1425H563H574.5V1297V1282H597L596.5 1369.5H648L699.5 1316L799.5 1402H809.5L826 1419.5L849.5 1397.5L732 1282L767 1242L755.5 1223.5L789.5 1183.5V1045.5L827 1009L854.5 989L868.5 980L863.5 964L859.5 953.5C858.5 949.333 856.6 940.4 857 938C857.4 935.6 857.167 928.333 857 925L863.5 911.5L871.5 895.5C875.167 882.833 882.5 857.2 882.5 856C882.5 854.8 886.167 837.5 888 829L891 806.5V795.5V770.5H643.5V375H622V406.5H546.5V375H521V838.5V1087H289V1095H223.5Z"
          stroke="#AA30CB"
          strokeWidth="4"
        />
        <text id="Exhibition Area_2" fill="black" xmlSpace="preserve">
          <tspan x="561" y="972.727">
            Exhibition Area
          </tspan>
        </text>
      </>
    ),
  },
  {
    id: "washroom",
    name: "Washroom",
    fill: "#CBD6FA",
    stroke: "#2546AB",
    doors: [
      { id: "washroom-door-1", x: 775, y: 1196 },
      // { id: "washroom-door-2", x: 757, y: 1260 },
    ],
    element: (
      <>
        <path
          d="M928 1322L789.5 1187.5L787 1189.5L756 1223L772 1239.5L733 1280L851 1395.5L928 1322Z"
          fill="#CBD6FA"
          stroke="#2546AB"
          strokeWidth="4"
        />
        <text
          id="washroom_2"
          transform="translate(800.366 1245.26) rotate(44.7655)"
          fill="black"
          xmlSpace="preserve"
        >
          <tspan x="0" y="26.7273">
            washroom
          </tspan>
        </text>
      </>
    ),
  },
  {
    id: "model-sampling-lab",
    name: "Model Sampling Lab",
    fill: "#BCFCFF",
    stroke: "#25A6AB",
    doors: [{ id: "model-sampling-lab-door", x: 843, y: 994 }],
    element: (
      <>
        <path
          d="M794.5 1187V1047L827.704 1011.81L844.5 1032.5L868 1011L854 993L862 989L869 985.5L875.5 984L889 982H901L909 983L912.5 985.5L918.5 990.5L921.5 995.5H1213.5V1282.5H894L794.5 1187Z"
          fill="#BCFCFF"
        />
        <path
          d="M828 1011.5L827.704 1011.81M827.704 1011.81L794.5 1047V1187L894 1282.5H1213.5V995.5H921.5L918.5 990.5L912.5 985.5L909 983L901 982H889L875.5 984L869 985.5L862 989L854 993L868 1011L844.5 1032.5L827.704 1011.81Z"
          stroke="#25A6AB"
          strokeWidth="4"
        />
        <text id="Model Sampling Lab" fill="black" xmlSpace="preserve">
          <tspan x="919" y="1140.73">
            Model Sampling Lab
          </tspan>
        </text>
      </>
    ),
  },
  {
    id: "staircase",
    name: "Main Staircase",
    fill: "#B5F1C2",
    stroke: "#429554",
    doors: [{ id: "staircase-door", x: 618, y: 1370 }],
    element: (
      <>
        <path
          d="M595.5 1373.5H651.5L667.5 1355L703 1315L797.5 1407L752.583 1452.5L741.231 1464L731 1474.36L682 1524H595.5V1448.75V1436V1421.5V1411V1397.5V1385.5V1373.5Z"
          fill="#B5F1C2"
        />
        <path
          d="M651.5 1373.5H595.5V1385.5M651.5 1373.5L667.5 1355M651.5 1373.5V1385.5M667.5 1355L703 1315M667.5 1355L710 1394L703 1407L752.583 1452.5M703 1315L797.5 1407L752.583 1452.5M703 1315L747 1363L710 1397.5L690.909 1417.5M651.5 1448L657.5 1452.5M651.5 1448L595.5 1448.75M651.5 1448V1436M657.5 1452.5L665.375 1444.25M657.5 1452.5L703 1500L711.5 1492L665.375 1444.25M752.583 1452.5L741.231 1464M741.231 1464L682 1524H595.5V1448.75M741.231 1464L690.909 1417.5M690.909 1417.5L682 1426.83M682 1426.83L731 1474.36L720.5 1483L673.25 1436M682 1426.83L673.25 1436M673.25 1436L665.375 1444.25M595.5 1448.75V1436M651.5 1436H595.5M651.5 1436V1421.5M595.5 1436V1421.5M595.5 1421.5H651.5M595.5 1421.5V1411M651.5 1421.5V1411M651.5 1411H595.5M651.5 1411V1397.5M595.5 1411V1397.5M595.5 1397.5H651.5M595.5 1397.5V1385.5M651.5 1397.5V1385.5M651.5 1385.5H595.5"
          stroke="#429554"
          strokeWidth="4"
        />
        <text id="Staircase_4" fill="black" xmlSpace="preserve">
          <tspan x="603" y="1494.82">
            Staircase
          </tspan>
        </text>
      </>
    ),
  },
  {
    id: "office",
    name: "Office",
    fill: "#F3D2D2",
    stroke: "#CB7777",
    doors: [{ id: "office-door", x: 518, y: 1057 }],
    element: (
      <>
        <path
          d="M516 839H123V1080H472.5V1031.5H516V839Z"
          fill="#F3D2D2"
          stroke="#CB7777"
          strokeWidth="4"
        />
        <text id="Office_2" fill="black" xmlSpace="preserve">
          <tspan x="277" y="968.727">
            Office
          </tspan>
        </text>
      </>
    ),
  },
  {
    id: "computer-lab",
    name: "Computer Lab",
    fill: "#EFC7A2",
    stroke: "#D6873E",
    doors: [{ id: "computer-lab-door", x: 518, y: 786 }],
    element: (
      <>
        <path
          d="M119.5 839V375.5H518V760.5H479.5V807H518V839H119.5Z"
          fill="#EFC7A2"
          stroke="#D6873E"
          strokeWidth="4"
        />
        <text fill="black" xmlSpace="preserve">
          <tspan x="236" y="615.727">
            Computer Lab
          </tspan>
        </text>
      </>
    ),
  },
  {
    id: "seminar-hall",
    name: "Seminar Hall",
    fill: "#E9F5C2",
    stroke: "#B3D63E",
    doors: [
      { id: "seminar-hall-door-1", x: 733, y: 766 },
      { id: "seminar-hall-door-2", x: 647, y: 393 },
    ],
    element: (
      <>
        <path
          d="M1213.5 767V375.5H683.5V417.5H646.5V767H708.5V727H753.5V767H1213.5Z"
          fill="#E9F5C2"
        />
        <path
          d="M646.5 375.5H683.5M683.5 375.5H1213.5V767H753.5V727H708.5V767H646.5V417.5H683.5V375.5Z"
          stroke="#B3D63E"
          strokeWidth="4"
        />
        <text id="Seminar Hall_2" fill="black" xmlSpace="preserve">
          <tspan x="857" y="570.727">
            Seminar Hall
          </tspan>
        </text>
      </>
    ),
  },
  {
    id: "staff-lounge",
    name: "Staff Lounge",
    fill: "#F8F5A8",
    stroke: "#EBE52D",
    doors: [{ id: "staff-lounge-door", x: 891, y: 790 }],
    element: (
      <>
        <path
          d="M889.5 842.5L895 806.5V803H926.5V769H1212.5V990.5L923.5 992L922 990.5L917 985L911 981L901 979H893.5H884L874.5 981L873 979L870 973L868.5 967.5L866 960L863 953.5L861 943V925.5L870 910L880 879L889.5 842.5Z"
          fill="#F8F5A8"
        />
        <path
          d="M895 769H926.5M926.5 769H1212.5V990.5L923.5 992L922 990.5L917 985L911 981L901 979H893.5H884L874.5 981L873 979L870 973L868.5 967.5L866 960L863 953.5L861 943V925.5L870 910L880 879L889.5 842.5L895 806.5V803H926.5V769Z"
          stroke="#EBE52D"
          strokeWidth="4"
        />
        <text id="Staff Lounge_2" fill="black" xmlSpace="preserve">
          <tspan x="977" y="899.727">
            Staff Lounge
          </tspan>
        </text>
      </>
    ),
  },
  {
    id: "back-exit",
    name: "Back Exit",
    fill: "#D9D9D9",
    stroke: "black",
    doors: [
      {
        id: "back-exit-door",
        x: 582,
        y: 385,
      },
    ],
    element: (
      <>
        <path
          d="M519 315V176H388V102.5H639V349.5H619.5V405H549V349.5H514.5V315H519Z"
          fill="#D9D9D9"
          stroke="black"
        />
        <path
          id="Arrow 1"
          d="M628.707 326.707C629.098 326.317 629.098 325.683 628.707 325.293L622.343 318.929C621.953 318.538 621.319 318.538 620.929 318.929C620.538 319.319 620.538 319.953 620.929 320.343L626.586 326L620.929 331.657C620.538 332.047 620.538 332.681 620.929 333.071C621.319 333.462 621.953 333.462 622.343 333.071L628.707 326.707ZM597 326V327H628V326V325H597V326Z"
          fill="black"
        />
        <path
          id="Arrow 2"
          d="M525.293 325.293C524.902 325.683 524.902 326.317 525.293 326.707L531.657 333.071C532.047 333.462 532.681 333.462 533.071 333.071C533.462 332.681 533.462 332.047 533.071 331.657L527.414 326L533.071 320.343C533.462 319.953 533.462 319.319 533.071 318.929C532.681 318.538 532.047 318.538 531.657 318.929L525.293 325.293ZM557 326V325H526V326V327H557V326Z"
          fill="black"
        />
        <text
          id="Back Exit"
          transform="translate(602.307 282.441) rotate(90.7014)"
          fill="black"
          xmlSpace="preserve"
        >
          <tspan x="0" y="26.7273">
            Back Exit
          </tspan>
        </text>
      </>
    ),
  },
];
