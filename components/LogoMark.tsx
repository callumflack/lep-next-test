import { Icon } from "@chakra-ui/react";

const LogoMark = ({
  size = "80px",
  color = "black",
  canvas = "white",
}: Props) => (
  <Icon viewBox="0 0 100 100" height={size} width={size} color={color}>
    <path
      d="M98.8013 50.0524C98.8013 76.8382 77.0871 98.5524 50.3013 98.5524C23.5155 98.5524 1.80127 76.8382 1.80127 50.0524C1.80127 23.2666 23.5155 1.55237 50.3013 1.55237C77.0871 1.55237 98.8013 23.2666 98.8013 50.0524Z"
      fill={canvas}
      stroke="currentColor"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M24.943 45.7877C24.6867 45.7877 24.5586 45.5589 24.5586 45.2935C24.5586 45.0373 24.6867 44.7993 24.9704 44.7536C26.4163 44.5431 26.8831 44.2869 26.9929 43.024C27.0478 42.4017 27.121 41.212 27.121 38.1829V34.4582C27.121 31.4291 27.0478 30.0107 26.9929 29.4158C26.8922 28.098 26.5261 27.8143 25.1077 27.6038C24.824 27.5764 24.6959 27.3201 24.6959 27.0822C24.6959 26.8534 24.824 26.6155 25.0802 26.6155H32.8955C33.1518 26.6155 33.2799 26.8443 33.2799 27.0822C33.2799 27.311 33.1518 27.5489 32.8955 27.6038C31.7058 27.8143 31.3215 28.1712 31.1385 29.4158C31.0561 30.0381 31.0103 31.5389 31.0103 34.4125V38.2195C31.0103 41.093 31.0378 42.4383 31.111 43.088C31.2666 44.2502 32.1451 44.4333 33.7283 44.4333C36.6019 44.4333 38.0478 42.3102 39.0636 40.187C39.1917 39.9308 39.3473 39.821 39.6584 39.821C39.9147 39.821 40.1801 40.004 40.1251 40.3884L39.4479 45.2569C39.393 45.6962 39.0361 45.7968 38.6701 45.7968H24.943V45.7877Z"
      fill="currentColor"
    />
    <path
      d="M47.5378 66.0581C48.0045 66.113 48.5994 66.1313 49.1393 66.1313C50.6951 66.1313 52.3515 66.1313 52.6077 64.0906C52.6626 63.7245 52.9921 63.5506 53.3032 63.5506C53.5595 63.5506 53.7974 63.6787 53.7974 64.0723C53.7974 64.6396 53.6418 65.4175 53.6418 67.019C53.6418 68.3094 53.7974 68.7303 53.7974 69.499C53.7974 69.8834 53.5412 70.039 53.2575 70.039C52.9738 70.039 52.6901 69.8834 52.6077 69.5448C52.2691 67.7328 50.7225 67.6596 49.2217 67.6596C48.5994 67.6596 48.0869 67.6596 47.5378 67.7145V69.2428C47.5378 72.1163 47.5927 73.4891 47.6659 74.1297C47.8215 75.2919 49.2674 75.5298 51.1892 75.5298C53.2849 75.5298 54.8864 74.1297 56.0761 71.9608C56.2317 71.7045 56.3872 71.549 56.7258 71.549C56.9821 71.549 57.1377 71.732 57.1377 72.0431L56.5154 76.3168C56.4605 76.7561 56.1036 76.8568 55.7375 76.8568H41.5162C41.26 76.8568 41.1318 76.628 41.1318 76.3626C41.1318 76.1064 41.26 75.8684 41.5437 75.8227C42.9896 75.6122 43.4563 75.2827 43.5661 74.0107C43.621 73.3884 43.6942 72.2811 43.6942 69.252V65.6005C43.6942 62.5714 43.621 61.1255 43.5661 60.5307C43.4654 59.2129 43.0994 58.9292 41.6809 58.7187C41.3972 58.6638 41.2691 58.3801 41.2691 58.1238C41.2691 57.895 41.3698 57.6846 41.6077 57.6846H55.1701C55.6643 57.6846 55.9937 57.8127 55.9937 58.252V62.3152C55.9937 62.5989 55.7833 62.727 55.5819 62.727C55.2433 62.727 55.1152 62.5714 55.0145 62.2603C54.4471 60.2653 53.3307 59.2861 50.8781 59.2861H48.8831C48.4987 59.2861 47.9222 59.341 47.5653 59.5149V66.0581H47.5378Z"
      fill="currentColor"
    />
    <path
      d="M64.9078 64.9142C64.9078 71.796 64.9078 73.7636 65.0908 74.4683C65.3471 75.4749 66.308 75.603 67.6532 75.8135C67.9095 75.8684 68.0376 76.1247 68.0376 76.3534C68.0376 76.6097 67.9095 76.8476 67.6532 76.8476H58.877C58.6208 76.8476 58.4927 76.6188 58.4927 76.3534C58.4927 76.0972 58.6208 75.8593 58.9045 75.8135C60.3504 75.603 60.8171 75.3468 60.9269 74.0839C60.9819 73.4616 61.0551 72.4 61.0551 69.3709V65.6188C61.0551 62.5897 60.9819 61.1163 60.9269 60.5215C60.8263 59.2037 60.4602 58.92 59.0418 58.7095C58.7581 58.6821 58.6299 58.4258 58.6299 58.1696C58.6299 57.9134 58.7581 57.6754 59.0143 57.6754H66.5734C70.5817 57.6754 73.8488 59.3867 73.8488 63.1114C73.8488 67.5406 69.6299 69.2703 66.7564 69.2703C66.2165 69.2703 66.0334 68.9866 66.0334 68.7029C66.0334 68.4466 66.189 68.2087 66.6832 68.2087C68.0559 68.2087 69.7123 66.8085 69.7123 63.2944C69.7123 60.8876 68.4677 59.0207 66.2439 59.0207C65.8596 59.0207 65.1549 59.0756 64.9261 59.1762V64.9142H64.9078Z"
      fill="currentColor"
    />
    <path
      d="M67.4055 37.03L48.6359 37.0025C48.1052 37.0025 47.8489 36.5907 48.0594 36.0782C48.2699 35.5657 48.8647 35.1539 49.3955 35.1539L68.1651 35.1814C68.6958 35.1814 68.9521 35.5932 68.7416 36.1057C68.5311 36.6182 67.9271 37.03 67.4055 37.03Z"
      fill="currentColor"
    />
  </Icon>
);

interface Props {
  size?: string;
  color?: string;
  canvas?: string;
}

export default LogoMark;