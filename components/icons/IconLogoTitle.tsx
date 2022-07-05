import stls from '@/styles/components/icons/IconLogoTitle.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

const IconLogoTitle = () => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 276 177' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Московская Бизнес Академия</title>
        <path
          d='M10.6 43.4H3.89999V0.800003H10.7L24.5 20L38.2 0.900005H44.9V43.4H38.2V11.1L26.3 27.1H22.4L10.5 11.1L10.6 43.4Z'
          fill='#262626'
        />
        <path
          d='M69.3 44.1C64.5 44.1 60.6 42.6 57.5 39.5C54.4 36.5 52.9 32.7 52.9 28.3C52.9 23.9 54.4 20.2 57.5 17.2C60.6 14.2 64.5 12.6 69.3 12.6C74 12.6 77.9 14.1 81.1 17.2C84.2 20.2 85.7 23.9 85.7 28.3C85.7 32.7 84.2 36.4 81.1 39.5C77.9 42.6 74 44.1 69.3 44.1ZM69.3 38.4C72.1 38.4 74.4 37.5 76.3 35.5C78.2 33.6 79.1 31.3 79.1 28.4C79.1 25.6 78.2 23.2 76.3 21.4C74.4 19.5 72.1 18.6 69.3 18.6C66.5 18.6 64.1 19.5 62.2 21.4C60.3 23.3 59.4 25.6 59.4 28.4C59.4 31.3 60.3 33.6 62.2 35.5C64.1 37.4 66.5 38.4 69.3 38.4Z'
          fill='#262626'
        />
        <path
          d='M103.5 44.1C98.2 44.1 94 43.1 91 41.1V34.9C94.5 37.3 98.6 38.5 103.2 38.5C105.3 38.5 106.9 38.2 108 37.6C109.2 37 109.7 36.1 109.7 35C109.7 34 109.1 33.2 107.9 32.6C107.4 32.4 106.4 32.1 105 31.7L101.3 30.8C97.8 29.9 95.2 28.8 93.6 27.4C92 26 91.2 24 91.2 21.5C91.2 18.8 92.3 16.7 94.6 15.1C96.8 13.5 99.9 12.8 103.9 12.8C108.5 12.8 112.2 13.7 114.9 15.5V21.5C111.3 19.5 107.7 18.5 104.1 18.5C102.1 18.5 100.6 18.8 99.5 19.4C98.4 20 97.9 20.8 97.9 21.8C97.9 22.7 98.5 23.5 99.8 24.2C100 24.3 100.9 24.6 102.7 25.1L106.2 25.8C113 27.3 116.4 30.4 116.4 35.2C116.4 37.9 115.2 40.1 112.8 41.8C110.6 43.3 107.4 44.1 103.5 44.1Z'
          fill='#262626'
        />
        <path
          d='M138.1 44.1C133.6 44.1 129.8 42.6 126.7 39.7C123.6 36.7 122 32.9 122 28.3C122 23.7 123.6 20 126.7 17.1C129.9 14.2 133.7 12.7 138.2 12.7C141.6 12.7 144.6 13.4 147.2 14.8V20.4C144.5 19.1 141.8 18.5 139.2 18.5C136.2 18.5 133.7 19.4 131.6 21.3C129.6 23.2 128.6 25.6 128.6 28.4C128.6 31.3 129.6 33.7 131.6 35.6C133.6 37.5 136.1 38.4 139.2 38.4C142.4 38.4 145.3 37.7 147.7 36.1V41.7C144.8 43.3 141.6 44.1 138.1 44.1Z'
          fill='#262626'
        />
        <path
          d='M169.4 44.1C164.6 44.1 160.7 42.6 157.6 39.5C154.5 36.5 153 32.7 153 28.3C153 23.9 154.5 20.2 157.6 17.2C160.7 14.2 164.6 12.6 169.4 12.6C174.1 12.6 178 14.1 181.2 17.2C184.3 20.2 185.8 23.9 185.8 28.3C185.8 32.7 184.3 36.4 181.2 39.5C178.1 42.6 174.1 44.1 169.4 44.1ZM169.4 38.4C172.2 38.4 174.5 37.5 176.4 35.5C178.3 33.6 179.2 31.3 179.2 28.4C179.2 25.6 178.3 23.2 176.4 21.4C174.5 19.5 172.2 18.6 169.4 18.6C166.6 18.6 164.2 19.5 162.3 21.4C160.4 23.3 159.5 25.6 159.5 28.4C159.5 31.3 160.4 33.6 162.3 35.5C164.3 37.4 166.6 38.4 169.4 38.4Z'
          fill='#262626'
        />
        <path
          d='M205.6 43.6H199.9L189.5 13.5H196.2L203.2 33.8L210.1 13.4H215.5L222.6 33.8L229.5 13.5H236.1L225.6 43.6H220L212.8 23L205.6 43.6Z'
          fill='#262626'
        />
        <path
          d='M24.9 103.6H4V61.1H23.4C27.3 61.1 30.3 62 32.6 63.9C34.8 65.8 36 68.3 36 71.5C36 73.6 35.5 75.4 34.4 77C33.3 78.5 32 79.6 30.3 80.3C33 80.8 35.2 82 36.8 84.1C38.5 86.1 39.3 88.7 39.3 91.7C39.3 95.3 38 98.2 35.4 100.4C32.8 102.5 29.3 103.6 24.9 103.6ZM10.6 67.2V78.2H22.1C24.3 78.2 26.1 77.7 27.3 76.8C28.5 75.9 29.2 74.5 29.2 72.7C29.2 70.9 28.6 69.6 27.3 68.6C26.1 67.7 24.3 67.2 22.1 67.2H10.6ZM10.6 84.1V97.5H23.6C26.2 97.5 28.2 96.9 29.7 95.7C31.2 94.5 31.9 92.8 31.9 90.7C31.9 88.6 31.2 87 29.7 85.8C28.2 84.7 26.2 84.1 23.5 84.1H10.6Z'
          fill='#262626'
        />
        <path
          d='M68.7 93.4V73.8H75.3V103.6H68.7V99.7C65.8 102.9 62.1 104.4 57.7 104.4C54.2 104.4 51.4 103.3 49.5 101.1C47.6 98.9 46.6 95.9 46.6 92V73.8H53.2V90.6C53.2 95.7 55.5 98.3 60.2 98.3C61.8 98.3 63.4 97.8 65 96.9C66.6 96 67.9 94.8 68.7 93.4Z'
          fill='#262626'
        />
        <path
          d='M95.3 104.4C90 104.4 85.8 103.4 82.8 101.4V95.2C86.3 97.6 90.4 98.8 95 98.8C97.1 98.8 98.7 98.5 99.8 97.9C101 97.3 101.5 96.4 101.5 95.3C101.5 94.3 100.9 93.5 99.7 92.9C99.2 92.7 98.2 92.4 96.8 92L93.1 91.1C89.6 90.2 87 89.1 85.4 87.7C83.8 86.3 83 84.3 83 81.8C83 79.1 84.1 77 86.4 75.4C88.6 73.8 91.7 73.1 95.7 73.1C100.3 73.1 104 74 106.7 75.8V81.8C103.1 79.8 99.5 78.8 95.9 78.8C93.9 78.8 92.4 79.1 91.3 79.7C90.2 80.3 89.7 81.1 89.7 82.1C89.7 83 90.3 83.8 91.6 84.5C91.8 84.6 92.7 84.9 94.5 85.4L98 86.1C104.8 87.6 108.2 90.7 108.2 95.5C108.2 98.2 107 100.4 104.6 102.1C102.4 103.5 99.2 104.4 95.3 104.4Z'
          fill='#262626'
        />
        <path
          d='M119.7 68.4C118.5 68.4 117.5 68 116.7 67.2C115.9 66.4 115.5 65.4 115.5 64.3C115.5 63.2 115.9 62.1 116.7 61.3C117.5 60.5 118.5 60.1 119.7 60.1C120.8 60.1 121.8 60.5 122.6 61.3C123.4 62.1 123.8 63.1 123.8 64.3C123.8 65.5 123.4 66.5 122.6 67.2C121.8 68 120.8 68.4 119.7 68.4ZM123 103.6H116.4V73.8H123V103.6Z'
          fill='#262626'
        />
        <path
          d='M139.5 84V103.6H132.9V73.8H139.5V77.7C142.4 74.5 146.1 73 150.5 73C154 73 156.8 74.1 158.7 76.3C160.6 78.5 161.6 81.5 161.6 85.4V103.6H155V86.8C155 81.7 152.7 79.1 148 79.1C146.4 79.1 144.8 79.6 143.2 80.5C141.5 81.4 140.3 82.5 139.5 84Z'
          fill='#262626'
        />
        <path
          d='M168.2 88.6C168.2 84.1 169.6 80.4 172.5 77.4C175.4 74.4 179.1 72.9 183.6 72.9C186.7 72.9 189.3 73.7 191.5 75.3C195.7 78.3 197.8 82.8 197.8 88.8V90.5H174.9C175.3 93 176.5 95 178.5 96.4C180.5 97.8 183.1 98.5 186.1 98.5C189.5 98.5 192.7 97.6 195.7 95.8V101.3C192.9 103.2 189.3 104.2 184.7 104.2C180.1 104.2 176.2 102.7 172.9 99.8C169.7 97.1 168.2 93.3 168.2 88.6ZM174.9 85.6H191.1C191 83.7 190.3 82.1 189 80.7C187.6 79.2 185.7 78.5 183.3 78.5C181 78.5 179.1 79.2 177.5 80.5C175.9 81.9 175.1 83.6 174.9 85.6Z'
          fill='#262626'
        />
        <path
          d='M215.8 104.4C210.5 104.4 206.3 103.4 203.3 101.4V95.2C206.8 97.6 210.9 98.8 215.5 98.8C217.6 98.8 219.2 98.5 220.3 97.9C221.5 97.3 222 96.4 222 95.3C222 94.3 221.4 93.5 220.2 92.9C219.7 92.7 218.7 92.4 217.3 92L213.6 91.1C210.1 90.2 207.5 89.1 205.9 87.7C204.3 86.3 203.5 84.3 203.5 81.8C203.5 79.1 204.6 77 206.9 75.4C209.2 73.8 212.2 73.1 216.2 73.1C220.8 73.1 224.5 74 227.2 75.8V81.8C223.6 79.8 220 78.8 216.4 78.8C214.4 78.8 212.9 79.1 211.8 79.7C210.7 80.3 210.2 81.1 210.2 82.1C210.2 83 210.8 83.8 212.1 84.5C212.3 84.6 213.2 84.9 215 85.4L218.5 86.1C225.3 87.6 228.7 90.7 228.7 95.5C228.7 98.2 227.5 100.4 225.1 102.1C222.8 103.5 219.7 104.4 215.8 104.4Z'
          fill='#262626'
        />
        <path
          d='M247 104.4C241.7 104.4 237.5 103.4 234.5 101.4V95.2C238 97.6 242.1 98.8 246.7 98.8C248.8 98.8 250.4 98.5 251.5 97.9C252.7 97.3 253.2 96.4 253.2 95.3C253.2 94.3 252.6 93.5 251.4 92.9C250.9 92.7 249.9 92.4 248.5 92L244.8 91.1C241.3 90.2 238.7 89.1 237.1 87.7C235.5 86.3 234.7 84.3 234.7 81.8C234.7 79.1 235.8 77 238.1 75.4C240.4 73.8 243.4 73.1 247.4 73.1C252 73.1 255.7 74 258.4 75.8V81.8C254.8 79.8 251.2 78.8 247.6 78.8C245.6 78.8 244.1 79.1 243 79.7C241.9 80.3 241.4 81.1 241.4 82.1C241.4 83 242 83.8 243.3 84.5C243.5 84.6 244.4 84.9 246.2 85.4L249.7 86.1C256.5 87.6 259.9 90.7 259.9 95.5C259.9 98.2 258.7 100.4 256.3 102.1C254 103.5 250.9 104.4 247 104.4Z'
          fill='#262626'
        />
        <path
          d='M7.10001 163.8H0L18.6 121.1H25.1L43.7 163.8H36.5L31.9 153.2H11.7L7.10001 163.8ZM21.8 129.5L14 147.3H29.6L21.8 129.5Z'
          fill='#262626'
        />
        <path
          d='M63.1 164.6C58.6 164.6 54.8 163.1 51.7 160.2C48.6 157.2 47 153.4 47 148.8C47 144.2 48.6 140.5 51.7 137.6C54.9 134.7 58.7 133.2 63.2 133.2C66.6 133.2 69.6 133.9 72.2 135.3V140.9C69.5 139.6 66.8 139 64.2 139C61.2 139 58.7 139.9 56.6 141.8C54.6 143.7 53.6 146.1 53.6 148.9C53.6 151.8 54.6 154.2 56.6 156.1C58.6 158 61.1 158.9 64.2 158.9C67.4 158.9 70.3 158.2 72.7 156.6V162.2C69.8 163.8 66.6 164.6 63.1 164.6Z'
          fill='#262626'
        />
        <path
          d='M108.8 158.7C109.4 158.7 110 158.6 110.6 158.3V163.3C109.7 163.9 108.4 164.3 106.8 164.3C103.4 164.3 101.3 162.9 100.5 160C97.8 163.1 94.1 164.6 89.5 164.6C86.3 164.6 83.6 163.7 81.5 161.9C79.4 160.2 78.3 157.7 78.3 154.5C78.3 151.3 79.5 148.9 81.8 147.2C84.1 145.5 86.9 144.6 90.3 144.6C93.9 144.6 97.1 145.4 99.9 146.9V145.3C99.9 141 97 138.8 91.1 138.8C87.7 138.8 84.5 139.7 81.7 141.5V135.7C84.7 134 88.3 133.2 92.6 133.2C96.8 133.2 100.2 134.2 102.7 136.2C105.2 138.2 106.4 141 106.4 144.6V155.7C106.4 156.6 106.6 157.4 107.1 157.9C107.5 158.4 108.1 158.7 108.8 158.7ZM99.8 155.4V151.8C97.3 150.4 94.6 149.7 91.8 149.7C89.6 149.7 87.9 150.1 86.7 150.9C85.5 151.7 84.8 152.8 84.8 154.3C84.8 155.8 85.4 157 86.5 157.8C87.7 158.6 89.2 159 91.2 159C92.8 159 94.4 158.7 95.9 158C97.6 157.3 98.9 156.4 99.8 155.4Z'
          fill='#262626'
        />
        <path
          d='M129.5 164.6C125.3 164.6 121.8 163.1 119.1 160C116.4 157 115 153.3 115 148.8C115 144.4 116.4 140.7 119.1 137.7C121.8 134.7 125.3 133.1 129.5 133.1C134.1 133.1 137.6 134.7 140.2 138V121.2H146.8V163.7H140.2V159.6C137.6 163 134.1 164.6 129.5 164.6ZM131.3 158.8C133.2 158.8 135 158.3 136.5 157.3C138.1 156.3 139.3 155 140.2 153.4V144.2C139.3 142.7 138.1 141.4 136.5 140.4C134.9 139.4 133.2 138.9 131.3 138.9C128.5 138.9 126.2 139.9 124.4 141.8C122.6 143.7 121.7 146 121.7 148.8C121.7 151.6 122.6 154 124.4 155.9C126.2 157.9 128.5 158.8 131.3 158.8Z'
          fill='#262626'
        />
        <path
          d='M154 148.9C154 144.4 155.4 140.7 158.3 137.7C161.2 134.7 164.9 133.2 169.4 133.2C172.5 133.2 175.1 134 177.3 135.6C181.5 138.6 183.6 143.1 183.6 149.1V150.8H160.7C161.1 153.3 162.3 155.3 164.3 156.7C166.3 158.1 168.9 158.8 171.9 158.8C175.3 158.8 178.5 157.9 181.5 156.1V161.6C178.7 163.5 175.1 164.5 170.5 164.5C165.9 164.5 162 163 158.7 160.1C155.5 157.3 154 153.5 154 148.9ZM160.7 145.8H176.9C176.8 143.9 176.1 142.3 174.8 140.9C173.4 139.4 171.5 138.7 169.1 138.7C166.8 138.7 164.9 139.4 163.3 140.7C161.7 142.1 160.9 143.8 160.7 145.8Z'
          fill='#262626'
        />
        <path
          d='M197.5 163.8H190.9V134H197.5V137.9C199.8 134.8 203.1 133.2 207.4 133.2C209.7 133.2 211.7 133.7 213.4 134.7C215.1 135.7 216.2 137 216.9 138.6C218 137 219.5 135.7 221.4 134.7C223.3 133.7 225.4 133.2 227.8 133.2C231.1 133.2 233.7 134.2 235.6 136.3C237.5 138.4 238.4 141.3 238.4 145.2V163.8H231.8V146.7C231.8 141.8 229.8 139.3 225.7 139.3C224.1 139.3 222.6 139.8 221.2 140.7C219.8 141.6 218.7 142.8 218.1 144.3V163.8H211.5V146.7C211.5 141.8 209.4 139.3 205.3 139.3C203.8 139.3 202.3 139.8 200.8 140.7C199.4 141.6 198.3 142.7 197.5 144.1V163.8Z'
          fill='#262626'
        />
        <path
          d='M250.1 176.2C247.6 176.2 245.8 175.9 244.7 175.2V169.4C246 170 247.4 170.4 249 170.4C250.7 170.4 252.1 169.8 253.2 168.6C254.4 167.4 255.5 165.4 256.7 162.7L243.7 134H251L260 155L268.7 134H275.8L261.5 167C258.8 173.2 255 176.2 250.1 176.2Z'
          fill='#262626'
        />
      </svg>
    </div>
  )
}

export default IconLogoTitle
