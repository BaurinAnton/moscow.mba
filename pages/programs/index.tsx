import Programs from '@/components/pages/Programs'
import { backendUrl, apiProgramsReqUrl } from '@/config/index'

const programs = ({ programs }) => {
  const data = programs.filter(
    program =>
      program.studyFormat === 'online' && program.category.type === 'mini'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mini'} mbaFormat={'online'} />
  )
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default programs
