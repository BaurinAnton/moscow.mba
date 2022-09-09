import cn from 'classnames'

import { TypeClassNames, TypeLibJournalArticleListItem } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { Wrapper, ContentJournalArticle } from '@/components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalList.module.sass'

type TypeSectionJournalListProps = TypeClassNames & {
  listItem: TypeLibJournalArticleListItem | null
}

const SectionJournalList = ({
  classNames,
  listItem
}: TypeSectionJournalListProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle>
          <ul className={stls.list}>
            {listItem
              ?.filter(item => item)
              .map((item, iidx) => (
                <li key={`${item.body} ${iidx}`} className={stls.item}>
                  {item.body}
                </li>
              ))}
          </ul>
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalList
