import stls from '@/styles/components/icons/IconEmail.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

const IconEmail = () => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 17 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M8.50306 0.892194C10.8256 0.892194 13.147 0.890993 15.4695 0.892194C16.1895 0.892194 16.7494 1.29593 16.9389 1.95079C16.9768 2.08176 16.9963 2.22235 16.9963 2.35933C17 5.61441 16.9988 8.8695 17 12.1234C17 13.0486 16.3778 13.6698 15.4402 13.6698C11.9001 13.6698 8.36003 13.6686 4.81872 13.6686C3.73078 13.6686 2.64284 13.6686 1.55368 13.671C0.640541 13.6734 0 13.0462 0 12.1486C0 8.88392 0.00122241 5.61802 0.00122241 2.35332C0.00122241 1.54465 0.642986 0.899404 1.47422 0.894598C2.76997 0.887388 4.06694 0.892194 5.36392 0.892194C6.4103 0.892194 7.45668 0.893396 8.50306 0.892194ZM8.49939 1.87869V1.87629C7.27576 1.87629 6.05335 1.87629 4.82973 1.87629C3.73078 1.87629 2.63306 1.87749 1.53412 1.87749C1.37154 1.87749 1.22485 1.90873 1.11483 2.04091C1.04393 2.12502 1.01949 2.1887 1.1185 2.28483C1.99863 3.14156 2.87143 4.00429 3.7479 4.86583C4.8554 5.95446 5.9629 7.04309 7.06917 8.13293C7.28554 8.34561 7.52758 8.52224 7.81606 8.62197C8.6473 8.91155 9.37341 8.72411 9.99072 8.12091C11.1826 6.95538 12.3683 5.78504 13.5565 4.6159C14.329 3.8565 15.1004 3.09469 15.8778 2.3401C15.9964 2.22595 15.9695 2.14184 15.8827 2.04091C15.7641 1.90273 15.6052 1.87629 15.4317 1.87629C13.1213 1.87869 10.8097 1.87869 8.49939 1.87869ZM11.5285 7.92265C11.2192 8.23386 10.9295 8.52585 10.6398 8.81783C9.50176 9.96294 7.60214 9.98216 6.4543 8.85748C6.14503 8.55469 5.84555 8.24347 5.53994 7.93467C5.48127 7.98754 5.44949 8.01277 5.42015 8.04161C4.40555 9.04012 3.39095 10.0386 2.37636 11.0384C1.9534 11.4541 1.5329 11.8735 1.10505 12.2844C1.02315 12.3625 1.0366 12.4202 1.09161 12.4935C1.20407 12.6449 1.36298 12.6869 1.5439 12.6869C3.3445 12.6857 5.14633 12.6869 6.94693 12.6869C9.76336 12.6869 12.5798 12.6869 15.3962 12.6857C15.494 12.6857 15.5955 12.6797 15.6884 12.6533C15.9585 12.5788 16.0172 12.3541 15.8228 12.163C14.697 11.0564 13.5699 9.94972 12.4453 8.84186C12.1458 8.54387 11.85 8.24347 11.5285 7.92265ZM1.04882 3.5549C1.03782 3.56451 1.02682 3.57413 1.01582 3.58494C1.01582 6.04458 1.01582 8.50542 1.01582 10.9302C2.2639 9.707 3.52297 8.47418 4.74171 7.2786C3.51564 6.04218 2.28223 4.79854 1.04882 3.5549ZM12.3109 7.26419C13.5174 8.45255 14.7557 9.67216 15.9854 10.8834C15.9854 8.47658 15.9854 6.05179 15.9854 3.62579C15.9732 3.61738 15.9597 3.60897 15.9475 3.59936C14.7288 4.82858 13.51 6.0566 12.3109 7.26419Z'
          fill='white'
        />
      </svg>
    </div>
  )
}

export default IconEmail
