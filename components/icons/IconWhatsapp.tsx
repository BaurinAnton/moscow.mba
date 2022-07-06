import stls from '@/styles/components/icons/IconWhatsapp.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

// TODO: improve structure
const IconWhatsapp = ({ fill = '#fff' }) => {
  return (
    <div className={stls.container}>
      <svg
        width='17'
        height='18'
        viewBox='0 0 17 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <title>Whatsapp</title>
        <path
          d='M0 17.6035C0.210858 17.0284 0.414118 16.4739 0.61765 15.9193C0.877356 15.2113 1.13489 14.5024 1.4003 13.7966C1.44344 13.6821 1.4372 13.5988 1.36909 13.4934C0.804084 12.6173 0.407605 11.6725 0.205431 10.6547C0.052104 9.88292 0.0227955 9.10534 0.106922 8.32086C0.255093 6.94225 0.719958 5.67752 1.52024 4.53651C2.67576 2.8895 4.23616 1.77769 6.19793 1.21329C7.06633 0.963481 7.9559 0.859945 8.85904 0.898439C10.5996 0.972507 12.1804 1.50717 13.5755 2.53085C15.1571 3.69124 16.2125 5.20923 16.7216 7.08082C16.9588 7.95265 17.05 8.84119 16.9737 9.74381C16.7428 12.4726 15.4478 14.5943 13.1381 16.1203C12.0887 16.8134 10.9174 17.2145 9.66095 17.3879C8.08399 17.6056 6.59197 17.338 5.16291 16.6772C4.9838 16.5944 4.81067 16.4986 4.62966 16.4194C4.57077 16.3937 4.49044 16.3828 4.42965 16.3993C2.99137 16.79 1.55416 17.1856 0.116691 17.5798C0.0871114 17.5881 0.056446 17.5923 0 17.6035ZM2.08742 15.6968C2.10913 15.7013 2.11835 15.7064 2.12568 15.7043C2.90507 15.4903 3.685 15.2774 4.46331 15.0597C4.54797 15.0361 4.61175 15.0398 4.68855 15.0865C5.62615 15.6607 6.63946 16.0215 7.74396 16.142C8.69513 16.2458 9.62812 16.1691 10.5421 15.9039C12.1807 15.4287 13.4871 14.4995 14.4556 13.1196C15.146 12.1363 15.5381 11.0457 15.663 9.8638C15.7354 9.17914 15.6958 8.49713 15.5596 7.82044C15.3175 6.61731 14.7959 5.54399 13.9745 4.62014C12.6697 3.15312 11.0222 2.33917 9.03516 2.18918C7.95563 2.10768 6.91084 2.26272 5.90811 2.65111C4.36073 3.25081 3.16315 4.26095 2.32351 5.6677C1.77208 6.59182 1.46732 7.59186 1.38483 8.66014C1.33055 9.36205 1.38727 10.0534 1.54521 10.738C1.77181 11.72 2.21035 12.6056 2.82393 13.4103C2.87685 13.4796 2.88309 13.5377 2.85432 13.615C2.69014 14.0527 2.52922 14.4916 2.36775 14.9301C2.27358 15.1847 2.18104 15.4398 2.08742 15.6968Z'
          fill={fill}
        />
        <path
          d='M5.60753 4.83021C5.62975 4.83021 5.65223 4.83021 5.67445 4.83021C6.05833 4.83074 6.16327 4.90353 6.29926 5.25302C6.52252 5.82639 6.73882 6.40265 6.97626 6.9705C7.09753 7.2606 6.96609 7.48238 6.82073 7.70075C6.69947 7.88285 6.55089 8.04813 6.40767 8.21552C6.26178 8.38632 6.24277 8.48539 6.35012 8.67826C6.90265 9.67128 7.63427 10.5024 8.63572 11.0826C8.89137 11.2308 9.16202 11.3549 9.43052 11.4802C9.60532 11.5619 9.71562 11.5336 9.82939 11.388C10.0676 11.0829 10.3035 10.7757 10.5348 10.4654C10.6625 10.2938 10.7671 10.247 10.9684 10.335C11.2648 10.4646 11.5558 10.6068 11.8443 10.7523C12.1723 10.9179 12.4946 11.0945 12.8206 11.2637C12.9497 11.3307 13 11.4321 13 11.5735C12.9997 11.9051 12.9392 12.2265 12.8198 12.5337C12.6793 12.895 12.376 13.116 12.0593 13.317C11.419 13.7232 10.7251 13.7561 10.0213 13.5414C9.04905 13.245 8.13138 12.8332 7.33043 12.1986C6.71365 11.7101 6.14854 11.1691 5.67686 10.5458C5.27424 10.0137 4.88742 9.46606 4.54316 8.89637C4.18337 8.30092 3.97644 7.64609 4.00214 6.93949C4.02918 6.19322 4.32204 5.56072 4.86226 5.03807C5.07052 4.83678 5.33287 4.80893 5.60753 4.83021Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconWhatsapp
