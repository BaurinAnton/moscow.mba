import stls from '@/styles/components/icons/IconMobilePhone.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

const IconMobilePhone = ({ fill = '#fff', large = false }) => {
  return (
    <div className={`${stls.container} ${large ? stls.large : stls.regular}`}>
      <svg viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M2.59735 6.3592C3.7342 8.37817 5.26748 9.98264 7.36045 11.0466C7.83462 10.5786 8.3088 10.1259 8.76548 9.65793C9.07058 9.34467 9.4165 9.24344 9.83431 9.38096C10.6233 9.64264 11.4395 9.74197 12.2674 9.77062C12.7571 9.78781 13 10.0438 13 10.5289C13 11.3216 13 12.1143 13 12.907C13 13.4036 12.726 13.6729 12.2168 13.671C11.2471 13.6653 10.291 13.5488 9.34848 13.3234C7.74134 12.9414 6.27413 12.2633 4.95266 11.2949C3.32221 10.1049 2.06682 8.59974 1.18649 6.80044C0.667619 5.74225 0.311989 4.62867 0.146806 3.46542C0.0593561 2.85419 0.0302061 2.23342 0.00105618 1.61455C-0.0203205 1.17332 0.284783 0.892535 0.735635 0.890625C1.55961 0.890625 2.38358 0.890625 3.20755 0.890625C3.68173 0.890625 3.94408 1.12366 3.96351 1.59354C3.99655 2.39577 4.09177 3.18655 4.29971 3.96205C4.30554 3.98306 4.30748 4.00598 4.31719 4.02508C4.5057 4.37271 4.35412 4.63631 4.10537 4.8808C3.60205 5.36978 3.10456 5.86067 2.59735 6.3592Z'
          fill={fill}
        />
        <path
          d='M7 2.19182C7 1.75439 7 1.32404 7 0.893691C10.0519 0.789203 13.0462 3.36775 12.9995 6.78927C12.5622 6.78927 12.1249 6.78927 11.675 6.78927C11.6516 5.53365 11.2198 4.43565 10.311 3.53953C9.4041 2.64519 8.29382 2.21661 7 2.19182Z'
          fill={fill}
        />
        <path
          d='M7 4.42004C7 3.89133 7 3.37536 7 2.85938C9.09164 2.85514 10.959 4.42641 11 6.79181C10.4717 6.79181 9.94124 6.79181 9.41294 6.79181C9.31806 5.29273 8.28733 4.47949 7 4.42004Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconMobilePhone
