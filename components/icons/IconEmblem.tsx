import stls from '@/styles/components/icons/IconEmblem.module.sass'
import classnames from 'classnames'


const IconEmblem = ({classNames}) => {
  return (
    <div className={classnames([stls.container], classNames)}>
      <svg viewBox='0 0 180 183' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
              d='M91.6242 0.410156L96.6663 6.55571H96.6669L91.6245 13.0235L86.5828 6.55571L91.6242 0.410156ZM37.7975 45.8183C39.1942 39.1866 33.4063 42.6571 31.8427 43.8974H31.8424C33.7519 38.4154 31.8467 36.3243 30.2541 34.5773C29.2557 33.4821 28.3808 32.5219 28.645 30.9465C28.9382 29.1977 31.3286 28.8425 33.6432 28.4984C35.1107 28.2804 36.548 28.0668 37.4016 27.5055C38.4425 26.8213 39.5342 25.6096 40.633 24.3897C43.6556 21.0347 46.7342 17.6176 48.9659 24.9396C43.2955 30.4395 46.5968 38.5356 53.7958 38.5356C53.7958 38.5356 53.8358 39.7227 53.7727 39.817C45.1832 39.378 42.1883 32.7845 43.7572 27.5055C44.0357 26.5718 34.949 26.5481 34.949 32.4871C34.949 34.4589 36.2828 35.9165 37.629 37.3878C39.0001 38.8864 40.3841 40.3992 40.3841 42.4832C40.3841 44.4072 38.4025 45.8183 37.7975 45.8183ZM136.971 27.5055C136.692 26.5718 145.778 26.5484 145.778 32.4871C145.778 34.4589 144.445 35.9165 143.099 37.3878C141.728 38.8864 140.344 40.3992 140.344 42.4832C140.344 44.4072 142.326 45.8183 142.934 45.8183C141.534 39.1866 147.322 42.6571 148.885 43.8974C146.976 38.4157 148.882 36.3246 150.475 34.5779C151.473 33.4824 152.348 32.5222 152.083 30.9465C151.79 29.1974 149.399 28.8422 147.085 28.4984C145.617 28.2802 144.18 28.0668 143.326 27.5055C142.286 26.8213 141.194 25.6096 140.095 24.3897C137.073 21.0347 133.994 17.6176 131.762 24.9396C137.435 30.4401 134.134 38.5356 126.933 38.5356C126.933 38.5356 126.892 39.7227 126.958 39.817C135.549 39.378 138.543 32.7849 136.971 27.5055H136.971ZM112.812 42.4663C122.057 42.4339 130.775 42.4034 131.877 48.6495V48.6489C132.264 50.8368 131.271 54.1697 130.198 55.1274C130.006 54.4345 129.007 52.1674 125.844 51.6591C109.873 49.1023 96.5388 75.181 108.578 85.7252C108.759 85.8848 108.655 86.1811 108.41 86.1811H84.322C84.5401 86.182 84.7632 86.3185 84.8753 86.6339L87.5038 94.6425C87.1588 94.6779 86.8301 94.7334 86.5828 94.8105L96.4956 129.067C97.1589 128.654 97.7808 128.186 98.3445 127.671L99.1883 130.241C96.4658 131.733 88.3365 132.919 84.1979 128.472C82.7673 129.212 79.0194 128.508 79.0194 125.014C79.0194 124.689 79.0881 124.132 79.2282 123.556C79.2257 123.718 79.2362 123.874 79.2602 124.021C79.551 123.79 79.8964 123.583 80.283 123.399C80.3082 124.216 80.8248 124.39 81.6531 124.395C81.6245 123.898 81.6263 123.394 81.6534 122.889C83.1089 122.465 84.8291 122.268 86.3742 122.268C84.9039 120.776 84.4385 116.444 85.188 113.931C84.5016 114.682 83.8439 115.439 83.2325 116.187C83.5485 115.405 83.8686 114.74 84.148 114.244C84.5737 113.486 84.5737 112.927 84.3251 112.14C83.9496 110.955 83.8461 109.886 84.0146 108.963C83.5171 108.963 83.3914 109.668 83.2365 110.536C82.9894 111.923 82.6681 113.725 80.6391 113.725C81.5259 112.311 81.2302 111.106 80.441 109.886C79.3089 108.124 79.3413 106.564 80.4259 105.643C81.5053 104.73 83.7753 105.275 85.2268 106.777C85.8419 106.041 87.7158 105.527 88.7089 105.527C88.2835 104.975 88.1264 104.372 88.2625 103.694C85.5249 103.927 80.7928 101.993 80.7928 99.0219C80.7928 96.7912 84.1387 95.1061 86.2196 94.5571L83.7897 87.0608L83.7903 87.0602C83.6323 86.5337 83.9684 86.1823 84.3186 86.1811H72.3237C72.0751 86.1811 71.9722 85.8848 72.1555 85.7252C84.1917 75.181 70.8577 49.1023 54.8865 51.6591C51.7266 52.1674 50.7243 54.4345 50.5326 55.1277C49.4594 54.1697 48.466 50.8364 48.8504 48.6495C49.9544 42.4034 58.6727 42.4339 67.9184 42.4663C73.9696 42.4875 80.2463 42.5094 84.7625 40.7731C84.9843 43.7855 81.2477 48.6128 77.6772 50.3994C83.7808 56.0117 89.2615 67.3197 90.3637 81.1349C91.4696 67.3197 96.9497 56.0117 103.054 50.3994C99.4827 48.6128 95.7495 43.7855 95.9686 40.7731C100.485 42.5094 106.762 42.4875 112.812 42.4663ZM83.2325 116.187C80.9123 119.025 79.2572 121.737 79.2282 123.556C79.3499 123.058 79.5252 122.546 79.7556 122.161C80.2047 121.408 80.5445 121.844 80.4028 122.455C80.3135 122.839 80.2753 123.149 80.283 123.399C80.6982 123.202 81.1606 123.033 81.6534 122.889C81.7828 120.457 82.4969 118.006 83.2325 116.187ZM98.3445 127.671C100.192 125.986 101.413 123.81 101.413 121.514C101.413 118.959 98.4255 119.807 96.974 121.799C96.8434 120.893 96.7168 120.005 96.5924 119.132L96.5896 119.113V119.112V119.112C96.2705 116.874 95.9643 114.73 95.6393 112.59C95.5154 111.767 95.8469 111.473 96.3712 111.224H96.3706C98.1314 110.403 100.89 111.068 100.796 114.268C100.774 114.993 101.582 114.993 101.64 114.252C102.167 109.461 99.5955 108.08 96.9053 108.642C96.7988 108.116 96.698 107.611 96.6004 107.121L96.5964 107.101V107.1C96.39 106.063 96.1965 105.092 95.9858 104.127C95.7378 102.972 95.6464 100.803 96.7079 100.803C97.2097 100.803 97.0948 102.353 97.023 103.321L97.0227 103.322C97.0125 103.458 97.0036 103.583 96.9971 103.69C96.9488 104.453 97.1666 104.914 97.6582 104.936C97.965 104.952 98.3473 104.459 98.5752 104.132C100.116 101.939 100.473 98.5441 98.6689 96.9065C97.1598 95.5317 93.3795 96.5548 92.3404 98.5127C92.1836 97.7751 91.4339 96.5575 91.0738 96.0271C90.7244 95.5102 90.6332 95.1551 91.1172 94.7001C91.3451 94.4806 92.0342 93.6179 92.0342 92.7265C92.0342 92.1994 91.7102 91.2266 90.6791 91.2266C89.8659 91.2266 88.9615 91.9358 88.9615 93.5171C88.9615 93.8691 89.0299 94.2458 89.2095 94.6505C88.8728 94.5805 88.1584 94.575 87.5038 94.6425L98.3445 127.671ZM111.794 58.3183C114.344 57.4484 118.788 57.3797 121.878 60.3742V60.3739C121.878 57.1723 119.374 54.3285 118.501 53.9666C117.355 54.1922 113.464 56.0512 111.794 58.3183ZM58.8505 60.3742C61.9435 57.3797 66.388 57.4484 68.9349 58.3183C67.2709 56.0512 63.3741 54.1922 62.2306 53.9666C61.3576 54.3285 58.8508 57.1723 58.8508 60.3739L58.8505 60.3742ZM121.875 20.6493V20.6492V20.649V20.6493ZM121.875 20.6492L118.094 15.5462L114.318 20.6493L118.094 25.6369L121.875 20.6492ZM144.568 134.442V134.442V134.441V134.442ZM139.526 129.067L144.568 134.442L139.526 139.157L134.484 134.442L139.526 129.067ZM66.4114 20.6492L62.6302 15.5462L58.8529 20.6492L62.6302 25.6369L66.4108 20.6492H66.4114ZM69.1542 40.7725H57.1112C57.0767 40.7278 54.9968 38.0209 54.4728 36.6745C52.5734 31.7902 54.9981 29.512 58.5473 29.512L63.1314 33.4966L67.7154 29.512C71.2653 29.512 73.6893 31.7902 71.7905 36.6745C71.548 37.299 70.9698 38.2166 70.4166 39.0226C74.6901 38.4598 80.1446 35.6542 81.3445 29.6437C81.3445 29.6437 78.1839 24.8329 77.3941 22.886C74.5438 15.8851 78.1802 13.0235 83.498 13.0235L90.3634 20.7637L97.2291 13.0235C102.547 13.0235 106.183 15.8854 103.336 22.886C102.543 24.8327 99.3857 29.6434 99.3857 29.6434C100.582 35.6539 106.037 38.4595 110.311 39.0223C109.761 38.2163 109.18 37.299 108.937 36.6745C107.035 31.7899 109.466 29.5118 113.011 29.5118L117.596 33.496L122.18 29.5118C125.727 29.5118 128.157 31.7899 126.255 36.6745C125.727 38.0317 123.62 40.7728 123.62 40.7728H111.576C101.447 40.7728 96.8936 34.8124 95.517 29.6434H85.2135C83.8366 34.8121 79.28 40.7725 69.1542 40.7725ZM177.985 75.4627C175.777 76.6146 162.83 82.8657 146.245 80.5536C146.417 79.7383 146.562 78.9171 146.682 78.092C157.72 76.7308 166.693 74.8019 172.411 71.5238C178.929 67.7849 181.779 58.8599 178.489 52.2195C178.404 52.0521 178.168 52.0222 178.05 52.1625C176.248 54.3013 164.911 67.0103 147.051 70.9612C147.005 70.0079 146.92 69.057 146.797 68.111C155.471 63.0408 163.94 57.1991 167.974 51.8576C174.07 43.7812 173.509 33.4805 167.708 28.2282C167.648 28.175 167.569 28.151 167.49 28.1624C167.411 28.174 167.341 28.2197 167.298 28.288C165.463 31.4077 148.285 60.0228 129.424 72.3754C129.194 72.5274 128.962 72.676 128.728 72.8214C128.188 73.1596 128.129 73.8833 128.589 74.3139C130.763 76.3446 132.115 79.1714 132.115 82.309C132.115 87.7648 128.034 92.302 122.64 93.2859C119.899 93.833 115.942 93.6746 112.142 92.38C111.971 92.323 111.794 92.4395 111.794 92.6161V109.896C111.794 110.173 112.204 110.242 112.301 109.975C114.611 103.668 121.528 102.327 124.552 102.327C125.641 109.069 127.585 114.654 130.111 117.66C134.224 122.544 140.94 122.476 143.852 119.099C143.9 119.043 143.921 118.967 143.908 118.894C143.895 118.82 143.851 118.757 143.787 118.721C142.076 117.708 132.285 111.514 130.326 101.362C131.1 101.087 131.854 100.775 132.578 100.407C135.738 105.798 140.337 110.598 144.041 112.431C150.261 115.506 155.955 114.011 158.481 109.509C158.573 109.351 158.461 109.153 158.275 109.135C154.427 108.818 142.618 105.331 137.591 96.8334C138.166 96.2885 138.73 95.7204 139.255 95.1162C144.516 99.2438 151.955 102.893 157.28 103.637C163.512 104.511 170.573 102.462 170.744 94.9935C170.747 94.8437 170.618 94.7211 170.464 94.7306C168.248 94.8678 153.58 95.5262 143.129 89.3433C143.492 88.6318 143.831 87.9078 144.144 87.1717C144.144 87.1717 159.936 91.0185 167.419 89.744C174.854 88.479 179.21 82.7661 178.369 75.6597C178.345 75.4825 178.145 75.3783 177.985 75.4621L177.985 75.4627ZM37.5988 89.3433C37.235 88.6322 36.8955 87.9078 36.581 87.1717V87.1711C36.581 87.1711 20.7893 91.0179 13.3094 89.743C5.87367 88.4783 1.52199 82.7713 2.35947 75.6643C2.38002 75.4849 2.5808 75.3773 2.74607 75.464C4.97073 76.6248 17.9124 82.861 34.4805 80.5517C34.3086 79.7361 34.1629 78.9153 34.0437 78.0901C23.0053 76.729 14.0324 74.7997 8.31409 71.5216C1.80179 67.7827 -1.04821 58.8632 2.23524 52.2201C2.31761 52.0527 2.55998 52.0225 2.68089 52.1693C4.50149 54.3226 15.8291 67.0112 33.6746 70.9594C33.7196 70.006 33.8028 69.0551 33.9254 68.1091C25.253 63.0389 16.7851 57.1972 12.7515 51.8555C6.65546 43.7821 7.21893 33.4842 13.011 28.2287C13.1381 28.1152 13.3444 28.145 13.4303 28.2915C15.2803 31.4326 32.4504 60.0275 51.2991 72.3742C51.5313 72.5258 51.7654 72.6744 52.0011 72.8199C52.5383 73.1577 52.6002 73.8818 52.1369 74.3096C49.9655 76.3406 48.6114 79.1702 48.6114 82.3084C48.6114 87.7638 52.692 92.3014 58.0887 93.2853C60.8272 93.8327 64.7837 93.6737 68.5844 92.3791C68.7553 92.3224 68.9349 92.4389 68.9349 92.6152V109.895C68.9349 110.173 68.5249 110.242 68.4248 109.975C66.1145 103.668 59.201 102.327 56.1739 102.327C55.0849 109.069 53.1436 114.654 50.6174 117.66C46.5047 122.544 39.7859 122.476 36.8737 119.099C36.8262 119.042 36.8059 118.967 36.8185 118.894C36.8311 118.821 36.8752 118.757 36.9383 118.721C38.6498 117.708 48.4401 111.514 50.3996 101.361C49.6295 101.086 48.8741 100.775 48.1484 100.407C44.9882 105.797 40.3881 110.598 36.6879 112.431C30.4651 115.506 24.7702 114.011 22.2444 109.509C22.1556 109.351 22.2649 109.153 22.4507 109.135C26.2986 108.818 38.104 105.33 43.1343 96.8331C42.5595 96.2888 41.9989 95.7204 41.4706 95.1162C36.2098 99.2438 28.7683 102.893 23.4449 103.638C17.2135 104.511 10.1558 102.462 9.98104 94.9966C9.97827 94.8499 10.1081 94.7214 10.2645 94.7306C12.4891 94.8709 27.151 95.5231 37.5988 89.3433ZM141.398 141.786L135.635 137.211C133.336 138.592 131.645 140.787 130.989 143.359C127.523 143.849 118.071 141.731 118.99 140.327C129.349 125.625 121.426 116.872 111.904 117.359V127.233C111.904 130.404 109.161 132.973 105.783 132.973H99.2083C94.4915 132.973 91.4209 137.757 91.4209 137.757C91.4209 137.757 88.3509 132.973 83.6339 132.973H77.0583C73.6782 132.973 70.9415 130.404 70.9415 127.233V117.36C61.4195 116.873 53.4902 125.626 63.8519 140.327C64.7621 141.717 55.0477 143.944 50.4908 143.38C49.2909 142.125 47.5591 141.333 45.6203 141.333C44.7962 141.333 43.9787 141.481 43.2055 141.77C43.2055 141.77 25.2999 124.663 24.9719 124.496L25.1197 124.15C26.139 122.226 24.5789 120.128 23.592 120.275C24.7383 118.888 24.7919 112.813 18.4319 111.408C18.618 112.628 18.7124 115.119 18.7124 115.119C18.7124 115.119 13.8039 112.44 11.3391 114.752C9.1732 117.339 12.1788 122.032 12.1788 122.032C12.1788 122.032 9.66678 122.094 8.42853 121.988C10.2492 128.201 16.3548 127.761 17.6758 126.535C17.5897 127.523 19.7979 128.931 21.6683 127.802L22.4899 127.4C22.6349 127.596 40.0739 144.222 40.0739 144.222C39.273 145.422 38.892 146.894 39.1547 148.463C39.5684 150.916 41.5932 152.949 44.1792 153.476C46.0053 153.846 47.7221 153.488 49.0993 152.675L53.7157 156.999C54.1266 157.375 54.682 157.609 55.3027 157.566C56.4314 157.489 57.277 156.565 57.191 155.506C57.1556 155.028 56.9135 154.618 56.5793 154.307C56.5053 154.224 51.8776 149.889 51.8776 149.889C55.6952 147.187 62.8088 145.284 68.7134 145.284C69.7506 145.284 70.2379 144.398 69.8809 143.53C67.2059 137.038 72.957 132.337 78.906 136.164C81.501 137.834 84.1375 141.122 86.1232 146.607C76.3619 148.992 64.1066 155.561 61.6269 162.734C60.6722 165.503 63.8257 169.278 67.6556 170.038C67.7237 170.053 67.7945 170.04 67.8528 170.002C67.911 169.964 67.9516 169.904 67.9658 169.835C69.9669 159.129 81.3771 151.15 87.3144 149.795L87.5365 150.396L87.6951 150.825L87.8137 151.144C81.3476 154.23 75.0764 160.739 73.2854 168.476C72.4639 172.02 76.3797 175.214 79.6127 176.089C79.7753 176.133 79.9349 176.018 79.9438 175.86C80.5583 166.074 84.8405 157.764 88.6766 153.984C88.7816 154.722 88.8605 155.465 88.9131 156.21C88.9131 156.21 84.9856 167.254 84.9856 175.311C84.9856 179.06 90.506 181.676 91.3217 182.043C92.341 181.676 97.8587 179.06 97.8587 175.311C97.8587 167.253 93.9312 156.21 93.9312 156.21C93.9848 155.465 94.0649 154.722 94.1705 153.984C98.0038 157.764 102.289 166.071 102.9 175.856C102.909 176.015 103.072 176.133 103.231 176.088C106.468 175.214 110.38 172.02 109.562 168.477C107.767 160.739 101.5 154.231 95.033 151.144C95.1852 150.731 95.233 150.6 95.2844 150.459C95.3331 150.327 95.3848 150.187 95.5296 149.795C101.47 151.15 112.877 159.128 114.878 169.835C114.893 169.903 114.933 169.963 114.992 170.001C115.05 170.039 115.121 170.052 115.189 170.038C119.016 169.278 122.175 165.503 121.214 162.734C118.741 155.562 106.482 148.992 96.7211 146.607C98.7095 141.122 101.346 137.834 103.94 136.165C109.887 132.337 115.638 137.039 112.963 143.53C112.605 144.398 113.09 145.284 114.131 145.284C120.809 145.284 129.037 147.719 132.293 150.983C134.374 154.134 138.218 156.149 142.557 155.717C147.486 155.231 151.506 151.493 152.061 146.874C152.546 142.826 150.471 139.192 147.164 137.212L141.398 141.788V141.786Z'
              fill='white'
        />
      </svg>
    </div>
  )
}

export default IconEmblem