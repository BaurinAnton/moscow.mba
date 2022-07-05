import stls from '@/styles/components/icons/IconLocation.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

const IconLocation = ({ fill = '#09121F', large = false }) => {
  return (
    <div className={stls.container}>
      <svg
        width={large ? '25' : '16'}
        height={large ? '25' : '16'}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <title>Локация</title>
        <path
          d='M12.5 24.7192L5.87084 18.09C4.55973 16.7789 3.66686 15.1084 3.30513 13.2899C2.94341 11.4713 3.12907 9.5863 3.83864 7.87325C4.54822 6.1602 5.74984 4.69603 7.29154 3.6659C8.83325 2.63577 10.6458 2.08594 12.5 2.08594C14.3542 2.08594 16.1668 2.63577 17.7085 3.6659C19.2502 4.69603 20.4518 6.1602 21.1614 7.87325C21.8709 9.5863 22.0566 11.4713 21.6949 13.2899C21.3331 15.1084 20.4403 16.7789 19.1292 18.09L12.5 24.7192ZM17.6563 16.6171C18.6759 15.5973 19.3703 14.2981 19.6516 12.8836C19.9329 11.4692 19.7885 10.0031 19.2366 8.67081C18.6846 7.33848 17.7501 6.19972 16.551 5.39853C15.3519 4.59735 13.9421 4.16972 12.5 4.16972C11.0579 4.16972 9.64814 4.59735 8.44905 5.39853C7.24996 6.19972 6.31536 7.33848 5.76345 8.67081C5.21154 10.0031 5.0671 11.4692 5.34839 12.8836C5.62968 14.2981 6.32407 15.5973 7.34375 16.6171L12.5 21.7734L17.6563 16.6171ZM12.5 13.5442C11.9475 13.5442 11.4176 13.3247 11.0269 12.934C10.6362 12.5433 10.4167 12.0134 10.4167 11.4609C10.4167 10.9083 10.6362 10.3784 11.0269 9.98772C11.4176 9.59702 11.9475 9.37752 12.5 9.37752C13.0525 9.37752 13.5824 9.59702 13.9731 9.98772C14.3638 10.3784 14.5833 10.9083 14.5833 11.4609C14.5833 12.0134 14.3638 12.5433 13.9731 12.934C13.5824 13.3247 13.0525 13.5442 12.5 13.5442Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconLocation
