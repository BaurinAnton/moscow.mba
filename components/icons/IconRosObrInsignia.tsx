import stls from '@/styles/components/icons/IconRosObrInsignia.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

// TODO: improve structure
const IconRosObrInsignia = () => {
  return (
    <div className={stls.container}>
      <svg
        className={stls.insignia}
        viewBox='0 0 197 200'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <title>РОСОБРНАДЗОР</title>

        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M99.8867 0L105.436 6.76362H105.437L99.887 13.8819L94.3382 6.76362L99.8867 0ZM40.6466 49.9749C42.1837 42.6763 35.8138 46.4957 34.0929 47.8608H34.0925C36.1941 41.8275 34.0973 39.5261 32.3445 37.6033C31.2457 36.398 30.2828 35.3413 30.5736 33.6074C30.8963 31.6827 33.527 31.2918 36.0745 30.9131C37.6896 30.6732 39.2715 30.4381 40.2109 29.8203C41.3565 29.0673 42.558 27.7337 43.7673 26.3911C47.0938 22.6988 50.482 18.938 52.9382 26.9964C46.6975 33.0494 50.3308 41.9598 58.2538 41.9598C58.2538 41.9598 58.2979 43.2662 58.2284 43.37C48.775 42.8869 45.479 35.6303 47.2057 29.8203C47.5121 28.7928 37.5116 28.7667 37.5116 35.3029C37.5116 37.473 38.9796 39.0773 40.4611 40.6965C41.9701 42.3458 43.4933 44.0108 43.4933 46.3044C43.4933 48.4219 41.3124 49.9749 40.6466 49.9749ZM149.794 29.8203C149.487 28.7928 159.487 28.7669 159.487 35.3029C159.487 37.473 158.02 39.0773 156.538 40.6965C155.029 42.3458 153.506 44.0108 153.506 46.3044C153.506 48.4219 155.687 49.9749 156.356 49.9749C154.816 42.6763 161.186 46.4957 162.906 47.8608C160.805 41.8278 162.903 39.5264 164.656 37.604C165.755 36.3983 166.718 35.3416 166.426 33.6074C166.104 31.6824 163.472 31.2915 160.925 30.9131C159.31 30.6729 157.728 30.4381 156.789 29.8203C155.643 29.0673 154.442 27.7337 153.233 26.3911C149.906 22.6988 146.518 18.938 144.062 26.9964C150.305 33.0501 146.672 41.9598 138.746 41.9598C138.746 41.9598 138.701 43.2662 138.774 43.37C148.229 42.8869 151.524 35.6306 149.794 29.8203H149.794ZM123.206 46.2857C133.381 46.2501 142.975 46.2165 144.188 53.0908V53.0901C144.614 55.498 143.521 59.1662 142.34 60.2202C142.128 59.4576 141.029 56.9625 137.548 56.4031C119.971 53.5892 105.296 82.2906 118.546 93.8952C118.744 94.0709 118.63 94.3969 118.36 94.3969H91.8501C92.0902 94.398 92.3356 94.5482 92.459 94.8953L95.3519 103.709C94.9722 103.748 94.6105 103.809 94.3382 103.894L105.248 141.596C105.978 141.142 106.662 140.626 107.283 140.06L108.211 142.888C105.215 144.53 96.2683 145.836 91.7135 140.942C90.1391 141.755 86.0142 140.981 86.0142 137.136C86.0142 136.778 86.0898 136.164 86.244 135.531C86.2413 135.71 86.2528 135.88 86.2793 136.043C86.5993 135.788 86.9794 135.56 87.4048 135.358C87.4326 136.257 88.0012 136.448 88.9128 136.454C88.8813 135.907 88.8833 135.352 88.9132 134.797C90.515 134.33 92.4082 134.113 94.1087 134.113C92.4905 132.471 91.9783 127.704 92.8031 124.937C92.0478 125.764 91.324 126.597 90.651 127.421C90.9988 126.56 91.3511 125.829 91.6586 125.283C92.1271 124.448 92.1271 123.833 91.8535 122.966C91.4402 121.662 91.3263 120.486 91.5118 119.47C90.9642 119.47 90.8259 120.246 90.6554 121.201C90.3835 122.728 90.0299 124.711 87.7967 124.711C88.7728 123.155 88.4473 121.829 87.5788 120.486C86.3328 118.546 86.3684 116.83 87.5621 115.817C88.7501 114.811 91.2484 115.412 92.8458 117.064C93.5229 116.254 95.5852 115.689 96.6782 115.689C96.21 115.082 96.0371 114.417 96.1869 113.671C93.174 113.927 87.9659 111.799 87.9659 108.529C87.9659 106.074 91.6484 104.22 93.9385 103.615L91.2643 95.3651L91.265 95.3644C91.091 94.785 91.4609 94.3983 91.8464 94.3969H78.6451C78.3715 94.3969 78.2583 94.0709 78.46 93.8952C91.7067 82.2906 77.0317 53.5892 59.4543 56.4031C55.9766 56.9625 54.8734 59.4576 54.6625 60.2206C53.4813 59.1662 52.388 55.4977 52.8111 53.0908C54.0262 46.2165 63.6212 46.2501 73.7967 46.2857C80.4565 46.3091 87.3645 46.3332 92.3349 44.4223C92.579 47.7377 88.4667 53.0504 84.537 55.0167C91.2545 61.1935 97.2864 73.6387 98.4994 88.8433C99.7165 73.6387 105.748 61.1935 112.466 55.0167C108.536 53.0504 104.427 47.7377 104.668 44.4223C109.638 46.3332 116.546 46.3091 123.206 46.2857ZM90.651 127.421C88.0975 130.544 86.2759 133.529 86.244 135.531C86.3779 134.982 86.5708 134.419 86.8244 133.995C87.3187 133.167 87.6927 133.646 87.5367 134.319C87.4384 134.742 87.3964 135.083 87.4048 135.358C87.8618 135.142 88.3707 134.955 88.9132 134.797C89.0555 132.12 89.8414 129.422 90.651 127.421ZM107.283 140.06C109.316 138.205 110.66 135.81 110.66 133.283C110.66 130.472 107.372 131.404 105.775 133.597C105.631 132.599 105.491 131.623 105.354 130.662L105.351 130.641V130.64V130.64C105 128.177 104.663 125.817 104.306 123.461C104.169 122.557 104.534 122.232 105.111 121.959H105.11C107.048 121.055 110.085 121.787 109.981 125.309C109.956 126.106 110.846 126.106 110.91 125.291C111.49 120.018 108.66 118.498 105.699 119.116C105.582 118.538 105.471 117.982 105.363 117.443L105.359 117.421V117.42C105.132 116.279 104.919 115.21 104.687 114.147C104.414 112.877 104.313 110.49 105.482 110.49C106.034 110.49 105.907 112.196 105.828 113.261L105.828 113.262C105.817 113.412 105.807 113.549 105.8 113.667C105.747 114.506 105.986 115.014 106.528 115.038C106.865 115.055 107.286 114.513 107.537 114.154C109.232 111.74 109.625 108.003 107.64 106.201C105.979 104.688 101.818 105.814 100.675 107.969C100.502 107.157 99.6772 105.817 99.2809 105.233C98.8964 104.664 98.7961 104.273 99.3287 103.773C99.5795 103.531 100.338 102.582 100.338 101.601C100.338 101.021 99.9813 99.9499 98.8466 99.9499C97.9515 99.9499 96.9562 100.73 96.9562 102.471C96.9562 102.858 97.0314 103.273 97.2291 103.718C96.8585 103.641 96.0723 103.635 95.3519 103.709L107.283 140.06ZM122.085 63.732C124.891 62.7747 129.782 62.699 133.183 65.9947V65.9944C133.183 62.4707 130.428 59.3409 129.467 58.9426C128.205 59.191 123.923 61.2369 122.085 63.732ZM63.8169 65.9947C67.221 62.699 72.1124 62.7747 74.9155 63.732C73.0841 61.2369 68.7954 59.191 67.537 58.9426C66.5762 59.3409 63.8172 62.4707 63.8172 65.9944L63.8169 65.9947ZM133.18 22.2746V22.2745V22.2742V22.2746ZM133.18 22.2745L129.019 16.6583L124.862 22.2746L129.019 27.7639L133.18 22.2745ZM158.155 147.511V147.512V147.511V147.511ZM152.606 141.596L158.155 147.511L152.606 152.701L147.057 147.512L152.606 141.596ZM72.1382 22.2745L67.9767 16.6583L63.8196 22.2745L67.9767 27.7639L72.1375 22.2745H72.1382ZM75.1569 44.4216H61.9027C61.8648 44.3724 59.5757 41.3933 58.999 39.9115C56.9086 34.5359 59.577 32.0286 63.4833 32.0286L68.5283 36.4139L73.5733 32.0286C77.4802 32.0286 80.148 34.5359 78.0583 39.9115C77.7915 40.5988 77.1551 41.6087 76.5462 42.4958C81.2495 41.8763 87.2526 38.7886 88.5731 32.1736C88.5731 32.1736 85.0947 26.879 84.2255 24.7363C81.0885 17.0313 85.0907 13.8819 90.9432 13.8819L98.4991 22.4005L106.055 13.8819C111.908 13.8819 115.91 17.0316 112.777 24.7363C111.904 26.8787 108.429 32.1733 108.429 32.1733C109.746 38.7883 115.749 41.876 120.453 42.4954C119.847 41.6083 119.208 40.5988 118.941 39.9115C116.847 34.5356 119.522 32.0284 123.425 32.0284L128.471 36.4133L133.516 32.0284C137.419 32.0284 140.094 34.5356 138 39.9115C137.419 41.4051 135.1 44.422 135.1 44.422H121.845C110.697 44.422 105.686 37.8621 104.171 32.1733H92.8313C91.3158 37.8618 86.301 44.4216 75.1569 44.4216ZM194.933 82.6007C192.503 83.8684 178.254 90.7481 160.001 88.2035C160.19 87.3062 160.35 86.4025 160.481 85.4944C172.63 83.9963 182.505 81.8733 188.798 78.2656C195.972 74.1506 199.109 64.328 195.488 57.0199C195.394 56.8357 195.134 56.8027 195.004 56.9571C193.021 59.3111 180.544 73.2981 160.887 77.6465C160.837 76.5972 160.744 75.5507 160.608 74.5095C170.155 68.9294 179.475 62.5002 183.915 56.6216C190.624 47.7329 190.007 36.3963 183.623 30.6157C183.556 30.5572 183.469 30.5308 183.382 30.5433C183.296 30.556 183.219 30.6063 183.171 30.6815C181.151 34.1149 162.246 65.608 141.488 79.2029C141.234 79.3701 140.979 79.5336 140.722 79.6938C140.127 80.0659 140.062 80.8624 140.569 81.3363C142.962 83.5712 144.449 86.6824 144.449 90.1355C144.449 96.1399 139.958 101.134 134.022 102.216C131.005 102.818 126.65 102.644 122.467 101.219C122.279 101.157 122.085 101.285 122.085 101.479V120.496C122.085 120.802 122.536 120.878 122.643 120.584C125.185 113.643 132.798 112.167 136.126 112.167C137.325 119.587 139.464 125.734 142.244 129.041C146.77 134.417 154.162 134.342 157.367 130.625C157.42 130.563 157.443 130.48 157.429 130.399C157.415 130.319 157.366 130.249 157.295 130.21C155.412 129.094 144.637 122.277 142.481 111.104C143.332 110.802 144.163 110.459 144.959 110.054C148.437 115.986 153.499 121.269 157.575 123.287C164.42 126.672 170.688 125.026 173.468 120.071C173.568 119.897 173.445 119.68 173.24 119.66C169.006 119.311 156.01 115.473 150.476 106.121C151.11 105.521 151.73 104.896 152.308 104.231C158.098 108.773 166.285 112.789 172.146 113.609C179.004 114.57 186.775 112.315 186.964 104.096C186.967 103.931 186.824 103.796 186.656 103.806C184.216 103.957 168.074 104.682 156.572 97.8772C156.971 97.0942 157.344 96.2973 157.689 95.4873C157.689 95.4873 175.069 99.7209 183.304 98.3182C191.487 96.9259 196.281 90.6385 195.355 82.8174C195.329 82.6224 195.109 82.5077 194.933 82.6L194.933 82.6007ZM40.4279 97.8772C40.0275 97.0946 39.6539 96.2973 39.3077 95.4873V95.4866C39.3077 95.4866 21.9278 99.7202 13.6957 98.3172C5.51214 96.9253 0.72281 90.6443 1.64452 82.8225C1.66713 82.6251 1.88811 82.5067 2.06999 82.602C4.51839 83.8796 18.7616 90.743 36.9959 88.2015C36.8068 87.3038 36.6464 86.4005 36.5152 85.4923C24.3668 83.9943 14.4914 81.871 8.198 78.2632C1.03075 74.1482 -2.10588 64.3318 1.50779 57.0205C1.59844 56.8363 1.86519 56.8031 1.99825 56.9646C4.00196 59.3345 16.4688 73.2991 36.109 77.6444C36.1585 76.5952 36.2501 75.5486 36.385 74.5075C26.8405 68.9274 17.5209 62.4982 13.0816 56.6192C6.37255 47.7339 6.9927 36.4004 13.3673 30.6163C13.5071 30.4914 13.7342 30.5241 13.8288 30.6854C15.8648 34.1424 34.7618 65.6131 55.506 79.2015C55.7616 79.3684 56.0193 79.5319 56.2786 79.6921C56.8699 80.0639 56.938 80.8607 56.4282 81.3316C54.0384 83.5668 52.548 86.681 52.548 90.1348C52.548 96.1389 57.0391 101.133 62.9784 102.216C65.9924 102.818 70.3468 102.643 74.5297 101.218C74.7178 101.156 74.9155 101.284 74.9155 101.478V120.496C74.9155 120.801 74.4643 120.878 74.3541 120.584C71.8114 113.643 64.2027 112.167 60.8711 112.167C59.6726 119.587 57.5361 125.733 54.7557 129.041C50.2294 134.417 42.835 134.342 39.6298 130.625C39.5776 130.563 39.5552 130.48 39.5691 130.4C39.583 130.319 39.6315 130.249 39.701 130.209C41.5846 129.094 52.3595 122.277 54.5161 111.104C53.6685 110.801 52.8372 110.459 52.0385 110.054C48.5604 115.986 43.4978 121.269 39.4254 123.287C32.5768 126.671 26.3091 125.025 23.5292 120.071C23.4316 119.897 23.5518 119.679 23.7563 119.66C27.9912 119.31 40.9839 115.472 46.5202 106.12C45.8875 105.521 45.2705 104.896 44.6891 104.231C38.8992 108.773 30.7093 112.79 24.8505 113.609C17.9925 114.57 10.2249 112.315 10.0326 104.099C10.0295 103.938 10.1724 103.796 10.3445 103.806C12.7929 103.961 28.9293 104.679 40.4279 97.8772ZM154.666 155.595L148.324 150.559C145.793 152.079 143.933 154.495 143.211 157.325C139.396 157.865 128.994 155.534 130.005 153.988C141.405 137.808 132.685 128.175 122.206 128.71V139.577C122.206 143.067 119.188 145.894 115.47 145.894H108.233C103.042 145.894 99.6629 151.16 99.6629 151.16C99.6629 151.16 96.2842 145.894 91.0927 145.894H83.8559C80.1358 145.894 77.1239 143.067 77.1239 139.577V128.711C66.6443 128.175 57.9175 137.808 69.3213 153.988C70.3231 155.518 59.6316 157.969 54.6164 157.348C53.2959 155.967 51.3899 155.095 49.2561 155.095C48.3492 155.096 47.4494 155.258 46.5985 155.576C46.5985 155.576 26.8921 136.749 26.5311 136.565L26.6937 136.184C27.8156 134.067 26.0985 131.758 25.0124 131.92C26.274 130.393 26.333 123.707 19.3333 122.161C19.5382 123.504 19.6421 126.245 19.6421 126.245C19.6421 126.245 14.24 123.297 11.5273 125.841C9.1435 128.689 12.4514 133.854 12.4514 133.854C12.4514 133.854 9.68672 133.921 8.32395 133.805C10.3278 140.642 17.0474 140.158 18.5013 138.809C18.4065 139.897 20.8367 141.446 22.8953 140.203L23.7995 139.761C23.9591 139.977 43.1519 158.275 43.1519 158.275C42.2705 159.596 41.8511 161.216 42.1403 162.943C42.5956 165.642 44.824 167.879 47.6701 168.46C49.6799 168.867 51.5693 168.473 53.085 167.579L58.1657 172.337C58.6179 172.751 59.2292 173.009 59.9123 172.961C61.1545 172.876 62.0851 171.859 61.9905 170.694C61.9515 170.168 61.6851 169.716 61.3172 169.374C61.2359 169.283 56.1427 164.512 56.1427 164.512C60.3442 161.538 68.1733 159.444 74.6717 159.444C75.8132 159.444 76.3496 158.469 75.9566 157.513C73.0126 150.369 79.3421 145.195 85.8894 149.407C88.7453 151.244 91.647 154.863 93.8324 160.9C83.0894 163.525 69.6016 170.755 66.8725 178.649C65.8218 181.696 69.2924 185.851 73.5075 186.687C73.5825 186.704 73.6604 186.69 73.7245 186.648C73.7886 186.606 73.8333 186.54 73.8489 186.464C76.0512 174.681 88.6091 165.9 95.1434 164.408L95.3878 165.07L95.5624 165.542L95.693 165.893C88.5765 169.29 81.6746 176.453 79.7036 184.969C78.7994 188.869 83.1091 192.384 86.6671 193.346C86.8461 193.395 87.0217 193.269 87.0316 193.095C87.7079 182.325 92.4207 173.18 96.6426 169.018C96.7582 169.832 96.845 170.649 96.9029 171.469C96.9029 171.469 92.5804 183.623 92.5804 192.491C92.5804 196.616 98.656 199.496 99.5538 199.9C100.676 199.496 106.748 196.616 106.748 192.491C106.748 183.623 102.426 171.469 102.426 171.469C102.485 170.649 102.573 169.832 102.689 169.018C106.908 173.18 111.624 182.322 112.297 193.091C112.307 193.265 112.486 193.395 112.661 193.346C116.223 192.384 120.529 188.869 119.628 184.969C117.653 176.453 110.755 169.29 103.638 165.894C103.806 165.439 103.858 165.294 103.915 165.14C103.969 164.994 104.026 164.84 104.185 164.409C110.723 165.9 123.277 174.681 125.479 186.464C125.495 186.539 125.54 186.605 125.604 186.647C125.668 186.689 125.746 186.703 125.821 186.687C130.033 185.851 133.51 181.696 132.453 178.649C129.73 170.755 116.239 163.525 105.496 160.9C107.685 154.863 110.586 151.244 113.442 149.408C119.986 145.195 126.315 150.37 123.371 157.514C122.978 158.469 123.511 159.444 124.657 159.444C132.007 159.444 141.062 162.123 144.645 165.716C146.936 169.184 151.167 171.401 155.942 170.927C161.367 170.391 165.79 166.278 166.402 161.194C166.935 156.739 164.652 152.739 161.013 150.56L154.666 155.596V155.595Z'
          fill='white'
          fillOpacity='0.15'
        />
      </svg>
    </div>
  )
}

export default IconRosObrInsignia
