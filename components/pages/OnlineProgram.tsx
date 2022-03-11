import stls from '@/styles/components/pages/OnlineProgram.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
import {
  JumbotronProgram,
  Reviews,
  ProgramGoal,
  WhatWillYouLearn,
  ProgramDesc,
  HowProcessGoes,
  ProgramsModules,
  GetStudyPlan,
  ContactUs,
  Qna,
  Students,
  Teachers,
  UpToDateContent,
  Diploma,
  CorporateClients,
  CostOfStudy,
  Accreditation,
  Pros,
  ECTSStandard,
  CostOfStudyDescription
} from '@/components/sections'

const PageOnlineProgram = ({ program, teachers }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={`${program?.title} MBA - Moscow Business Academy`}
        description={truncate(program?.goal, 120)}
        canonical={`https://moscow.mba${router.asPath}`}
      />
      <CourseJsonLd
        courseName={`${program?.title} MBA`}
        provider={{
          name: 'Moscow Business Academy',
          url: `https://moscow.mba${router.asPath}`
        }}
        description={truncate(program?.goal, 120)}
      />
      <JumbotronProgram program={program} />
      <ProgramGoal data={program} />
      <WhatWillYouLearn data={program} />
      <ProgramDesc />
      <Pros format={'online'} />
      <HowProcessGoes />
      <ProgramsModules program={program} />
      {/* <ECTSStandard /> */}
      <GetStudyPlan />
      <Teachers
        programId={program?._id}
        programTitle={program?.title}
        teachers={teachers}
      />

      <UpToDateContent withBottomLine />
      <CorporateClients />
      <Accreditation />
      <Diploma />
      <Students />
      <Reviews />
      <CostOfStudy
        programId={program?._id}
        programTitle={program?.title}
        programFormat={program?.studyFormat}
        programType={program?.category?.type}
      />
      <CostOfStudyDescription />
      <Qna programId={program?._id} programTitle={program?.title} />
      <ContactUs
        programId={program?._id}
        programTitle={program?.title}
        title={''}
        titleNewStr={'Получите консультацию по программам MBA'}
        overlapsFooter
      />
    </>
  )
}

export default PageOnlineProgram
