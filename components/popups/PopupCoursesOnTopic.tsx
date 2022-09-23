import Link from 'next/link'
import cn from 'classnames'

import { TypeClassNames, TypeLibJournalArticleRecommendedProgramsSection } from '@/types/index'

import routesFront from '@/config/routesFront'

import { ImgJournalArticleRecommended } from '@/components/images'

import stls from '@/styles/components/popups/PopupCoursesOnTopic.module.sass'
import { getClassNames } from '@/helpers/index'


type TypeSectionPopupCoursesOnTopicProps = {
    recommendedProgramsSection: TypeLibJournalArticleRecommendedProgramsSection | null
    handlePopupCoursesOnTopic: () => void
} & TypeClassNames

const PopupCoursesOnTopic = ({
    recommendedProgramsSection,
    classNames,
    handlePopupCoursesOnTopic
}: TypeSectionPopupCoursesOnTopicProps) => {
    if (!recommendedProgramsSection?.programs) return null   //If there are no programs, then do not render the component

    return (
        <>
            <div className={stls.wrapper} onClick={handlePopupCoursesOnTopic}></div>
            <div className={cn([stls.container], getClassNames({ classNames })) || undefined}>

                <div className={stls.buttonClosed}>
                    <button className={stls.closed} onClick={handlePopupCoursesOnTopic}></button>
                </div>
                <div className={stls.category}>
                    <span className={stls.categoryItem}>{'Курсы по теме'}</span>
                </div>
                <div className={stls.programs}>
                    {
                        recommendedProgramsSection?.programs.map((program, idx) =>

                            <div key={`${program.title}_${idx}`} className={stls.program}>
                                <div className={stls.iconProgram}>
                                    <ImgJournalArticleRecommended
                                        icon={program.icon}
                                        backgroundColor='medium'
                                        widthIcon={30}
                                        heightIcon={30}
                                        usage='popup'
                                    />
                                </div>
                                <div className={stls.contentProgram}>
                                    <p className={stls.nameProgram}>{program.title}</p>
                                </div>
                                <div className={stls.linkProgram}>
                                    <Link href={`${routesFront.root}${routesFront.programs}/${program.categorySlug}/${program.studyFormatSlug}/${program.slug}`}>
                                        <a className={stls.link}>{recommendedProgramsSection?.btnVal}</a>
                                    </Link>
                                </div>
                            </div>

                        )
                    }
                    {
                        recommendedProgramsSection?.programs.map((program, idx) =>

                            <div key={`${program.title}_${idx}`} className={stls.program}>
                                <div className={stls.iconProgram}>
                                    <ImgJournalArticleRecommended
                                        icon={program.icon}
                                        backgroundColor='medium'
                                        widthIcon={30}
                                        heightIcon={30}
                                        usage='popup'
                                    />
                                </div>
                                <div className={stls.contentProgram}>
                                    <p className={stls.nameProgram}>{program.title}</p>
                                </div>
                                <div className={stls.linkProgram}>
                                    <Link href={`${routesFront.root}${routesFront.programs}/${program.categorySlug}/${program.studyFormatSlug}/${program.slug}`}>
                                        <a className={stls.link}>{recommendedProgramsSection?.btnVal}</a>
                                    </Link>
                                </div>
                            </div>

                        )
                    }
                    {
                        recommendedProgramsSection?.programs.map((program, idx) =>

                            <div key={`${program.title}_${idx}`} className={stls.program}>
                                <div className={stls.iconProgram}>
                                    <ImgJournalArticleRecommended
                                        icon={program.icon}
                                        backgroundColor='medium'
                                        widthIcon={30}
                                        heightIcon={30}
                                        usage='popup'
                                    />
                                </div>
                                <div className={stls.contentProgram}>
                                    <p className={stls.nameProgram}>{program.title}</p>
                                </div>
                                <div className={stls.linkProgram}>
                                    <Link href={`${routesFront.root}${routesFront.programs}/${program.categorySlug}/${program.studyFormatSlug}/${program.slug}`}>
                                        <a className={stls.link}>{recommendedProgramsSection?.btnVal}</a>
                                    </Link>
                                </div>
                            </div>

                        )
                    }
                </div>
                <div className={stls.bottom}>
                    {
                        recommendedProgramsSection?.shortTextAtTheBottom.map((text, idx) =>
                            <span key={`${text.textPart}_${idx}`} className={cn(
                                text.isHighlighted
                                    ? stls.isHighlightedTextBottom
                                    : '',
                                stls.textBottom)}>{`${text.textPart} `}</span>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default PopupCoursesOnTopic