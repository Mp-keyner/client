import { useState } from "react";

const Facebook = ({ color, red }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const fillColor = isHovered ? "#FFFFFF" : color;

  return (
    <a href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: fillColor }}
        >
          <defs>
            <g />
          </defs>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(57.23482, 616.132042)">
              <g>
                <path d="M 188.484375 -138.71875 C 178.566406 -110.414062 168.5625 -83.285156 158.46875 -57.328125 C 148.375 -31.367188 139.988281 -11.628906 133.3125 1.890625 C 126.644531 15.410156 120.785156 24.691406 115.734375 29.734375 C 110.691406 34.785156 105.554688 38.210938 100.328125 40.015625 C 95.097656 41.828125 89.867188 42.550781 84.640625 42.1875 C 79.410156 41.820312 74.09375 41.460938 68.6875 41.109375 C 38.394531 36.421875 29.019531 14.601562 40.5625 -24.34375 C 48.132812 -55.34375 54.265625 -80.664062 58.953125 -100.3125 C 63.640625 -119.96875 67.515625 -136.195312 70.578125 -149 C 73.640625 -161.800781 76.253906 -172.4375 78.421875 -180.90625 C 80.585938 -189.382812 82.929688 -197.769531 85.453125 -206.0625 C 87.972656 -214.351562 91.125 -223.726562 94.90625 -234.1875 C 98.695312 -244.644531 103.660156 -258.523438 109.796875 -275.828125 C 96.085938 -274.023438 83.828125 -275.46875 73.015625 -280.15625 C 57.148438 -287.007812 50.660156 -301.789062 53.546875 -324.5 C 54.984375 -334.957031 60.570312 -344.695312 70.3125 -353.71875 C 75.351562 -358.40625 81.300781 -363.453125 88.15625 -368.859375 C 102.21875 -380.035156 130.160156 -391.929688 171.984375 -404.546875 C 215.253906 -417.523438 252.394531 -423.65625 283.40625 -422.9375 C 291.695312 -424.382812 300.257812 -423.394531 309.09375 -419.96875 C 317.925781 -416.539062 325.046875 -411.941406 330.453125 -406.171875 C 335.859375 -400.398438 338.648438 -394.085938 338.828125 -387.234375 C 339.015625 -380.390625 334.601562 -374.265625 325.59375 -368.859375 C 321.257812 -365.972656 318.191406 -361.191406 316.390625 -354.515625 C 314.585938 -347.847656 312.601562 -340.816406 310.4375 -333.421875 C 308.28125 -326.035156 305.128906 -319.273438 300.984375 -313.140625 C 296.835938 -307.015625 290.253906 -303.410156 281.234375 -302.328125 C 276.546875 -299.804688 269.960938 -298.003906 261.484375 -296.921875 C 253.015625 -295.835938 247.425781 -295.023438 244.71875 -294.484375 C 242.019531 -293.941406 240.492188 -292.953125 240.140625 -291.515625 C 233.648438 -272.398438 225.894531 -249.234375 216.875 -222.015625 C 207.863281 -194.796875 198.398438 -167.03125 188.484375 -138.71875 Z M 115.203125 -281.78125 C 114.484375 -281.78125 114.125 -281.6875 114.125 -281.5 C 114.125 -281.320312 114.484375 -281.234375 115.203125 -281.234375 Z M 115.203125 -281.78125 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(328.739045, 616.132042)">
              <g>
                <path d="M 212.5625 -394.8125 C 216.164062 -385.082031 218.144531 -378.59375 218.5 -375.34375 C 219.226562 -368.488281 216.707031 -362.71875 210.9375 -358.03125 C 210.9375 -357.675781 210.578125 -357.140625 209.859375 -356.421875 C 213.097656 -339.472656 213.816406 -323.601562 212.015625 -308.8125 C 210.210938 -294.03125 207.867188 -279.789062 204.984375 -266.09375 C 224.453125 -299.269531 239.957031 -323.609375 251.5 -339.109375 C 275.289062 -371.203125 297.460938 -394.097656 318.015625 -407.796875 C 324.867188 -411.765625 333.253906 -414.738281 343.171875 -416.71875 C 353.085938 -418.695312 362.550781 -418.96875 371.5625 -417.53125 C 380.582031 -416.09375 388.066406 -412.488281 394.015625 -406.71875 C 399.960938 -400.945312 402.578125 -392.289062 401.859375 -380.75 C 391.753906 -310.445312 380.929688 -244.914062 369.390625 -184.15625 C 357.859375 -123.40625 342.898438 -65.445312 324.515625 -10.28125 L 324.515625 -9.1875 L 323.96875 -9.1875 C 319.644531 3.789062 308.828125 12.984375 291.515625 18.390625 C 274.566406 23.429688 259.425781 23.789062 246.09375 19.46875 C 229.863281 14.78125 222.472656 6.128906 223.921875 -6.484375 L 224.453125 -18.921875 L 224.453125 -20.015625 C 225.898438 -28.660156 226.710938 -34.515625 226.890625 -37.578125 C 227.066406 -40.648438 227.335938 -42.90625 227.703125 -44.34375 C 228.421875 -53.71875 229.953125 -62.460938 232.296875 -70.578125 C 234.640625 -78.691406 236.351562 -85.269531 237.4375 -90.3125 C 238.519531 -95.363281 239.597656 -100.140625 240.671875 -104.640625 C 241.753906 -109.148438 242.476562 -112.671875 242.84375 -115.203125 C 229.144531 -96.453125 219.410156 -85.09375 213.640625 -81.125 C 199.210938 -71.03125 182.445312 -66.34375 163.34375 -67.0625 C 151.445312 -67.78125 144.59375 -70.484375 142.78125 -75.171875 C 139.175781 -85.273438 136.65625 -91.226562 135.21875 -93.03125 C 133.050781 -95.914062 131.25 -100.78125 129.8125 -107.625 C 120.4375 -66.164062 111.238281 -36.78125 102.21875 -19.46875 C 98.613281 -12.613281 95.007812 -6.484375 91.40625 -1.078125 C 86.363281 10.816406 74.828125 19.109375 56.796875 23.796875 C 39.847656 28.484375 23.625 28.125 8.125 22.71875 C -7.738281 17.664062 -15.3125 8.648438 -14.59375 -4.328125 C -13.875 -17.304688 -11.257812 -33.617188 -6.75 -53.265625 C -2.25 -72.921875 3.066406 -93.742188 9.203125 -115.734375 C 27.585938 -185.328125 40.65625 -230.578125 48.40625 -251.484375 C 56.164062 -272.398438 62.75 -288.804688 68.15625 -300.703125 C 81.132812 -328.472656 92.671875 -348.664062 102.765625 -361.28125 C 113.941406 -384 132.507812 -397.703125 158.46875 -402.390625 C 179.019531 -406.359375 197.050781 -403.832031 212.5625 -394.8125 Z M 212.5625 -394.8125 " />
              </g>
            </g>
          </g>
        </svg>
      </i>
    </a>
  );
};

export default Facebook;