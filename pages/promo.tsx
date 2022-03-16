import stls from '@/styles/pages/promo/Index.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import lang from '@/data/translation/index'
import { routesFront } from '@/config/index'
import { SetString } from '@/helpers/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import {
  JumbotronCta,
  WhatWillYouLearn,
  CourseOptions,
  ProgramDesc,
  ContactUs,
  Accreditation,
  Diploma,
  WhoItIsFor
} from '@/components/sections'

const PagePromo = ({ programs }) => {
  usePageHandleContext({ programs })
  const courseOptions = {
    whoIsFor: [
      {
        name: 'Online MBA',
        description: (
          <>
            <span className={stls.firstPara}>
              Программа проходит в онлайн-формате. Разработана специально для
              предпринимателей и руководителей, которые ценят свое время и хотят
              пройти обучение без отрыва от работы.{' '}
            </span>{' '}
            Во время обучения Вы будете получать обратную связь от экспертов по
            решению кейсов, проектным работам и домашним заданиям. Сможете в
            любое время задать вопрос и получить полезные советы и рекомендации.
          </>
        )
      },
      {
        name: 'Blended MBA',
        description: (
          <>
            <span className={stls.firstPara}>
              Смешанная программа MBA с очными сессиями. Разработана для
              предпринимателей и руководителей, которые готовы выделять время на
              посещение наших кампусов в Москве.{' '}
            </span>{' '}
            Во время обучения Вы сможете как в онлайн формате, так и очно
            получать обратную связь от экспертов и коллег по решению кейсов,
            проектным работам и домашним заданиям.
          </>
        )
      }
    ]
  }

  return (
    <>
      <NextSeo
        title={'Программы Mini MBA - Moscow Business Academy'}
        description={'Программы Mini MBA'}
        canonical={'https://moscow.mba/promo'}
      />

      <JumbotronCta />
      <div className={stls.container}>
        <CourseOptions />
        <ContactUs title={SetString(lang.receiveConsultation)} />
        <WhatWillYouLearn />
        <ProgramDesc />
        <Accreditation />
        <Diploma darkBackground />
        <WhoItIsFor program={courseOptions} />
        <ContactUs
          title={'Есть вопросы?'}
          titleNewStr={'Получите консультацию по программам MBA'}
          overlapsFooter
        />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.promo, context })

export default PagePromo
